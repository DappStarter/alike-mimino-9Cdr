require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture globe food ski strategy regret remember column hundred light army giggle'; 
let testAccounts = [
"0xa6d4b584038a06411f773dacb120095b851fc8e92df3abebe8ce7cc8f85d29a0",
"0x2d9763b484f7b15ab5729d28cb49e1ef64efefa2820ef68f56035008c315f513",
"0x3d264323bd6f48c9b371b5d16f9642e18259b300909ea0712f2c870b71e27ae9",
"0x4ad28ed26bef8e40fad04cdc5dcdd7b69f6b2da03606f47121030de4d97ac3ee",
"0x8b95f8c664bbd51eccf76a80de5fe1f85189bef4853eb55dbbaba63cd978b473",
"0xbbf2c0e351dc4f3eb3789fb73cf003691d54e64eabb328dd932caaadc9d7c5ee",
"0x0c087622cc3b0171f644360859bf7deb6d929c6b89bafd8bbd959ab5c6b698a5",
"0x5b71dddef36e328f04a31e052335661960b44555abd916c39aa676e7ee79f0d2",
"0xda56e7af39cd61447f9edb7f28967bc2ad9337ceed01fdafd35cc5cd568749bb",
"0x108fed4d13c95f9e4dd62a21dd446dfdcbc92bb07834bfa5854daacbb777d6ac"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


