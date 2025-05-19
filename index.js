import * as secp256k1 from '@noble/secp256k1';

const privateKey = '85c9ed58d8dd77a6257925bf9c0d89222d852f5119f9578134d66a0b10561727';
const publicKey = secp256k1.getPublicKey(privateKey, false); // uncompressed (130 bytes)

console.log('✅ publicKeyHex:', Buffer.from(publicKey).toString('hex'));
