pragma solidity ^0.5.15;

import {SafeMath} from "@summa-tx/bitcoin-spv-sol/contracts/SafeMath.sol";
import {BytesLib} from "@summa-tx/bitcoin-spv-sol/contracts/BytesLib.sol";
import {BTCUtils} from "@summa-tx/bitcoin-spv-sol/contracts/BTCUtils.sol";
import {ValidateSPV} from "@summa-tx/bitcoin-spv-sol/contracts/ValidateSPV.sol";
import {Relay} from "./Relay.sol";

/// @title Testnet BTC Relay
contract TestRelay is Relay {
    using SafeMath for uint256;
    using BytesLib for bytes;
    using BTCUtils for bytes;
    using ValidateSPV for bytes;

    /**
    * @notice Initializes the relay with the provided block.
    * @param header - genesis block header
    * @param height - genesis block height
    */
    constructor(
        bytes memory header,
        uint256 height
    ) public Relay(header, height) {}

    /**
    * @notice Parses, validates and stores Bitcoin block header1 to mapping
    * @param header Raw Bitcoin block header bytes (80 bytes)
    * @return bytes32 Bitcoin-like double sha256 hash of submitted block
    */
    function submitBlockHeader(bytes calldata header) external returns (bytes32) {
        require(header.length == 80, ERR_INVALID_HEADER_SIZE);

        bytes32 hashPrevBlock = header.extractPrevBlockLE().toBytes32();
        bytes32 hashCurrBlock = header.hash256();

        // Fail if block already exists
        // Time is always set in block header struct (prevBlockHash and height can be 0 for Genesis block)
        require(_headers[hashCurrBlock].merkle == 0, ERR_DUPLICATE_BLOCK);

        // Fail if previous block hash not in current state of main chain
        require(_headers[hashPrevBlock].merkle != 0, ERR_PREVIOUS_BLOCK);

        uint256 target = header.extractTarget();

        // Check the PoW solution matches the target specified in the block header
        require(abi.encodePacked(hashCurrBlock).reverseEndianness().bytesToUint() <= target, ERR_LOW_DIFFICULTY);

        uint256 height = 1 + _headers[hashPrevBlock].height;
        uint256 timestamp = header.extractTimestamp();

        // NO DIFFICULTY CHECK

        bytes32 merkle = header.extractMerkleRootLE().toBytes32();
        uint256 chainWork = _headers[hashPrevBlock].chainWork + header.extractDifficulty();

        uint256 chainId = _headers[hashPrevBlock].chainId;
        bool isNewFork = _forks[chainId].height != _headers[hashPrevBlock].height;

        if (isNewFork) {
            chainId = _incrementChainCounter();

            bytes32[] memory descendants = new bytes32[](1);
            descendants[0] = hashCurrBlock;

            // Initialise fork
            _forks[chainId] = Fork({
                height: height,
                ancestor: hashPrevBlock,
                descendants: descendants
            });

            _storeBlockHeader(
                hashCurrBlock,
                merkle,
                height,
                target,
                timestamp,
                chainId,
                chainWork
            );
        } else {
            _storeBlockHeader(
                hashCurrBlock,
                merkle,
                height,
                target,
                timestamp,
                chainId,
                chainWork
            );

            if (chainId == MAIN_CHAIN_ID) {
                // check that the submitted block is extending the main chain
                require(chainWork > _bestScore, ERR_NOT_EXTENSION);

                _bestBlock = hashCurrBlock;
                _bestHeight = height;
                _bestScore = chainWork;

                // extend height of main chain
                _forks[chainId].height = height;
                _chain[height] = hashCurrBlock;
            } else if (height >= _bestHeight + CONFIRMATIONS) {
                // reorg fork to main
                uint256 ancestorId = chainId;
                uint256 forkId = _incrementChainCounter();
                uint256 forkHeight = height - 1;

                while (ancestorId != MAIN_CHAIN_ID) {
                    for (uint i = _forks[ancestorId].descendants.length; i > 0; i--) {
                        // get next descendant in fork
                        bytes32 descendant = _forks[ancestorId].descendants[i-1];
                        _replaceChainElement(forkHeight, forkId, descendant);
                        forkHeight--;
                    }

                    bytes32 ancestor = _forks[ancestorId].ancestor;
                    ancestorId = _headers[ancestor].chainId;
                }

                emit ChainReorg(_bestBlock, hashCurrBlock, chainId);

                _bestBlock = hashCurrBlock;
                _bestHeight = height;
                _bestScore = chainWork;

                // TODO: add new fork struct for old main

                // extend to current head
                _chain[_bestHeight] = _bestBlock;
                _headers[_bestBlock].chainId = MAIN_CHAIN_ID;
            } else {
                // extend fork
                _forks[chainId].height = height;
                _forks[chainId].descendants.push(hashCurrBlock);
            }
        }
    }
}