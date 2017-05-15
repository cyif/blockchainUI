/**
 * Created by chen on 2017/4/29.
 */

import axios from 'axios'
import $ from 'jquery'

const host =  'http://39.108.50.198/';

export const webApi = {
    getJsonData: function(fileName) {
        let url = host + 'data' + '/' + fileName;
        let data = null;
        $.ajax({
            method: "GET",
            url: url,
            async: false,
            success: function (res) {
                data = res;
            }
        });
        return data;
    },

    getChartData: function(period) {
        return axios.get('http://blockr.io/api/v1/graph/main?period=' + period);
    },
    getLatestBlock: function () {
        return axios.get('http://blockr.io/api/v1/block/list/latest15');
    },
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
    },

    getSearchResult: function(id) {
        return axios.get('http://blockr.io/api/v1/search/main/' + id);
    },

    getCostTxsVolume: function () {
        return axios.get('https://api.blockchain.info/charts/cost-per-transaction-percent?format=json&timespan=2years');
    },

    getStatsData: function () {
        return axios.get('https://api.blockchain.info/stats')
    }

}