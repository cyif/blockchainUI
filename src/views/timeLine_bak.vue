<template>
    <Card class="docs">
        <div class="timeLine">
            <Timeline v-for="item in items" :key="item[1]">
                <Timeline-item :color="item[0]">
                    <p class="time">{{item[1]}}</p>
                    <p class="content">{{item[2]}}</p>
                </Timeline-item>
            </Timeline>
        </div>
    </Card>
</template>

<script>
    import data from '../data/timeLine.json'
    import $ from 'jquery'

    export default {
        data () {
            return {
                items: $(data.values)
            }
        }
    }
</script>

<style scoped>
    .docs {
        min-height: 300px;
        width: 90%;
        margin-left: 5%;
        margin-right: 5%;
        margin-top: 10px;
        background: #f1f2f0;
        border-radius: 8px;
        font-family: "ff-tisa-web-pro-1","ff-tisa-web-pro-2","Lucida Grande","Hiragino Sans GB","Hiragino Sans GB W3",serif;

    }
    .timeLine {
        margin-left: 20%;
        margin-top: 30px;
    }
    .time {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 5px;
    }
    .content {
        padding-left: 5px;
    }
</style>