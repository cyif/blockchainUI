<template>
    <div class="layout-logo">
        <router-link to="/">
            <img src="../../image/logo.png" width="45px" height="45px">
        </router-link>
        <router-link to="/">
            <img src="../../image/title.png" height="45px">
        </router-link>
    </div>
</template>

<script>
    export default{

    }

</script>

<style scoped>
    .layout-logo{
        width: 280px;
        height: 50px;
        background: white;
        border-radius: 8px;
        float: left;
        position: relative;
        top: 3px;
        left: 20px;
        margin-right: 20px;
        padding: 5px;
    }
</style>