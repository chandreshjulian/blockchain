// tesing script

const EC = require('elliptic').ec
const ec = new EC('secp256k1')

const { Blockchain, Transaction } = require('./blockchain')

const myKey = ec.keyFromPrivate('ec887531051b3a005b284f836e261911e3fd197c265773bcf613051c73d24e51')
const myWalletAddress = myKey.getPublic('hex')

let chadCoin = new Blockchain()

let tx1 = new Transaction(myWalletAddress, 'public key goes here', 10)
tx1.signTransaction(myKey)

chadCoin.addTransaction(tx1)

// console.log('Mining block 1...')
// chadCoin.addBlock(new Block(1, Date.now(), { amount: 4 }))

// console.log('Mining block 2...')
// chadCoin.addBlock(new Block(2, Date.now(), { amount: 10 }))

// console.log('Is blockchain valid? ' + chadCoin.isChainValid())

// chadCoin.chain[1].transactions = { ammount: 100 }
// chadCoin.chain[1].hash = chadCoin.chain[1].calculateHash()

// console.log('Is blockchain valid? ' + chadCoin.isChainValid())

// console.log(JSON.stringify(chadCoin, null, 4))

// chadCoin.createTransaction(new Transaction('address1', 'address2', 100))
// chadCoin.createTransaction(new Transaction('address2', 'address1', 50))

console.log('Starting the miner...')
chadCoin.minePendingTransactions(myWalletAddress)

console.log('Balance of Chad: ', chadCoin.getBalanceOfAddress(myWalletAddress))

console.log('Is blockchain valid? ' + chadCoin.isChainValid())

chadCoin.chain[1].transactions[0].amount = 1

console.log('Is blockchain valid? ' + chadCoin.isChainValid())

// console.log('Starting the miner...')
// chadCoin.minePendingTransactions('chad-address')

// console.log('Balance of Chad: ', chadCoin.getBalanceOfAddress('chad-address'))