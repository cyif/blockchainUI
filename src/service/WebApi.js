/**
 * Created by chen on 2017/4/29.
 */

import axios from 'axios'

export const webApi = {
    getBlockInfo: function(blockId) {
        return axios.get('http://btc.blockr.io/api/v1/block/info/' + blockId);
    },
    getTxInfo: function(txId) {
    },
    getAddreddInfo: function(addreddId) {

    },
    getBlockRank: function() {
        return axios.get('http://blockr.io/api/v1/trivia/block');
    }
}