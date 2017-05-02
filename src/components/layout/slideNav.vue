<template>
    <div>
        <Button-group vertical>
            <Button type="info" @click="jump(0)">货币信息</Button>
            <Button type="info" @click="jump(1)">区块信息</Button>
            <Button type="info" @click="jump(2)">采矿信息</Button>
            <Button type="info" @click="jump(3)">网络信息</Button>
        </Button-group>
    </div>
</template>


<script>


    export default{
        methods: {
            jump (index) {
                let jump = document.querySelectorAll('.v_jump');
                // 获取需要滚动的距离
                let total = jump[index].offsetTop;
                $('html body').animate({scrollTop: total}, 500);
            }
        }
    }
</script>

<style>
</style>