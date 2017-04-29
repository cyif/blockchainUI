const nameMap = {
    "Block": {
        "nb": "块号",
        "time_utc": "创建时间",
        "fees": "手续费",
        "days_destroyed": "币天",
        "hash": "哈希值",
        "nb_txs": "交易单数",
        "merkleroot": "首笔交易单",
        "vout_sum": "比特币流",
        "difficulty": "开矿难度",
        "size": "块大小",
        "version": "版本号"
    },
    "Tx": {

    },
    "Address": {

    }
};

export default {
    getName: function (type, name) {
        return nameMap[type][name];
    }
};