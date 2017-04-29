/**
 * Created by chen on 2017/4/29.
 */

import axios from 'axios'

export const webApi = {

    getBlockChainInfo: function() {
        return axios.get('http://blockr.io/api/v1/trivia/blockchain');
    },

    getBlockRank: function() {
        return axios.get('http://blockr.io/api/v1/trivia/block');
    },
    getBlockInfo: function(blockId) {
        return axios.get('http://btc.blockr.io/api/v1/block/info/' + blockId);
    },
    getBlockTxs: function(blockId) {
        return axios.get('http://btc.blockr.io/api/v1/block/txs/' + blockId);
    },

    getTxRank: function() {
        return axios.get('http://blockr.io/api/v1/trivia/tx');
    },
    getTxInfo: function(txId) {
        return axios.get('http://btc.blockr.io/api/v1/tx/info/' + txId);
    },

    getAddressRank: function() {
        return axios.get('http://blockr.io/api/v1/trivia/address');
    },
    getAddressInfo: function(addressId) {
        return axios.get('http://btc.blockr.io/api/v1/address/info/' + addressId);
    },
    getAddressTxs: function(addressId) {
        return axios.get('http://btc.blockr.io/api/v1/address/txs/' + addressId);
    }
}