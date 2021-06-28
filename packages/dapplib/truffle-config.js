require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half climb frown skull traffic develop remain exchange give clog outer slide'; 
let testAccounts = [
"0xc8f846e65ed79fb6d671ee3fdee3fb0ed6b5484823a007f4a21ac1b02148dea4",
"0x2fbd0daeede2278d4e973643536ac2500d11c3b2013e06b424e4aa062a4b68b3",
"0x39c9ef28ee299b5b2ec8609b369f81313f706c4d75bd7ae8aefc0d99abc2273f",
"0xecd1ffc5cb908b69b27d8b812151cd95bf2366d390eedbfc7a296bb741187e70",
"0xc840e17fb9f75a2a9643946cb47f9409fbbadfde7d51a896fe85109b097bde5e",
"0xe0bd6d33b9602c9ea32ba930b2ca704c51566649f3c17a42d01f34c801fe2ea2",
"0x12e98d48550e1cedc70e97caa6fb9ded977fe0df45e48d9d1e4e9c0b22b61208",
"0x3dbfa3b6f0c9e0eb0d78a188b7dcfcc78df86683a9f04cdf20ad5eeead971bd0",
"0x8970ee4107c61f819d1473fcfb8aea372b6e2b2fbd1e5e6aa8d94b9a46dba3cb",
"0x46ed90cc48b584646fea2ea22e9d7bbe044b7d77912f0580c6512be94e8d4f11"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

