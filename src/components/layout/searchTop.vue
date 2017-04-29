<template>
    <div class="search-top-frame">
        <Row>
            <i-col span="3">
                <div class="logo" style="overflow: hidden; padding-left: 35px; padding-top: 25px">
                    <router-link to="/">
                        <img src="../../image/logo.png" width="45px" height="45px">
                    </router-link>
                </div>
            </i-col>
            <i-col span="19">
                <form class="cf form-wrapper">

                    <input type="text" placeholder="Search here" required>

                    <button type="submit">查询</button>

                </form>
            </i-col>
            <i-col span="2">
                <div style="position: relative">
                    <Button type="dashed" shape="circle" style="position: absolute; right: 0.5%; border: transparent; font-size: 20px; font-weight: bold">X</Button>
                </div>
            </i-col>
        </Row>
    </div>
</template>

<script>
    import ICol from "../../../node_modules/iview/src/components/grid/col";

    export default{
        components:{
            ICol,
        }
    }
</script>

<style scoped>
    .search-top-frame{
        background-color: #f9f9f9;
    }
    .cf:before,.cf:after{
        content: '';
        display: table;
    }
    .cf:after{
        clear: both;
    }
    .cf{
        zoom: 1;
    }

    .form-wrapper {

        max-width: 600px;

        padding: 15px;

        margin: 10px auto 10px auto;

        background: transparent;

        border-radius: 10px;

    }

    /* Form text input */

    .form-wrapper input {

        width: 90%;

        height: 50px;

        padding: 10px 5px;

        float: left;

        font: bold 25px 'lucida sans', 'trebuchet MS', 'Tahoma';

        border: 0;

        background: #eee;

        border-radius: 3px 0 0 3px;

    }

    .form-wrapper input:focus {

        outline: 0;

        background: #fff;

    }

    .form-wrapper input::-webkit-input-placeholder {

        color: #999;

        font-weight: normal;

        font-style: italic;

    }

    .form-wrapper input:-moz-placeholder {

        color: #999;

        font-weight: normal;

        font-style: italic;

    }

    .form-wrapper input:-ms-input-placeholder {

        color: #999;

        font-weight: normal;

        font-style: italic;

    }

    /* Form submit button */

    .form-wrapper button {

        overflow: visible;

        position: relative;

        float: right;

        border: 0;

        padding: 0;

        cursor: pointer;

        height: 50px;

        width: 10%;

        font: bold 15px/40px 'lucida sans', 'trebuchet MS', 'Tahoma';

        color: #fff;

        text-transform: uppercase;

        background: #1784cd;

        border-radius: 0 3px 3px 0;


    }

    .form-wrapper button:hover{

        background: #1784cd;

    }

    .form-wrapper button:active,

    .form-wrapper button:focus{

        background: #1784cd;

        outline: 0;

    }

    .form-wrapper button:before { /* left arrow */

        content: '';

        position: absolute;

        border-width: 8px 8px 8px 0;

        border-style: solid solid solid none;

        border-color: transparent #1784cd transparent;

        top: 12px;

        left: -6px;

    }

    .form-wrapper button:hover:before{

        border-right-color: #1784cd;

    }

    .form-wrapper button:focus:before,

    .form-wrapper button:active:before{

        border-right-color: #1784cd;

    }

    .form-wrapper button::-moz-focus-inner { /* remove extra button spacing for Mozilla Firefox */

        border: 0;

        padding: 0;

    }
</style>

