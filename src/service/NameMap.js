const nameMap = {
    "Block": {
        "nb": "区块",
        "time_utc": "交易确认时间（区块生成）",
        "nb_txs": "确认交易数",
        "fees": "小费总计",
        "days_destroyed": "币天（指标）"
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