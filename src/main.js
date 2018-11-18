const {BlockChain, Transaction} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate("b85d249737c0c37fd877d3db5e14ab20b9b098b01125b6837e3d700aaab467ac");
const myWalletAddress = myKey.getPublic("hex");

let krisCoin = new BlockChain();

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10);
tx1.signTransaction(myKey);
krisCoin.addTransaction(tx1);

console.log('\n Starting a miner...');
krisCoin.minePendingTransactions(myWalletAddress);

console.log("Balance of kris is " + krisCoin.getBalanceOfAddress(myWalletAddress));

// console.log(krisCoin);
krisCoin.chain[1].transactions[0].amount = 1;

console.log("Is chain valid? " + krisCoin.isChainValid() );