<template>
    <Dropdown>
        <a href="javascript:void(0)">
            快速链接
            <Icon type="arrow-down-b"></Icon>
        </a>
        <Dropdown-menu slot="list">
            <Dropdown-item>货币统计</Dropdown-item>
            <Dropdown-item>区块统计</Dropdown-item>
            <Dropdown-item>采矿</Dropdown-item>
            <Dropdown-item>冰糖葫芦</Dropdown-item>
            <Dropdown-item divided>北京烤鸭</Dropdown-item>
        </Dropdown-menu>
    </Dropdown>
    <Dropdown style="margin-left: 20px">
        <Button type="primary">
            下拉菜单
            <Icon type="arrow-down-b"></Icon>
        </Button>
        <Dropdown-menu slot="list">
            <Dropdown-item>驴打滚</Dropdown-item>
            <Dropdown-item>炸酱面</Dropdown-item>
            <Dropdown-item disabled>豆汁儿</Dropdown-item>
            <Dropdown-item>冰糖葫芦</Dropdown-item>
            <Dropdown-item divided>北京烤鸭</Dropdown-item>
        </Dropdown-menu>
    </Dropdown>
</template>


<script>


    export default{
        data(){

        },

        methods: {},

        mounted(){

        }
    }
</script>

<style>

</style>