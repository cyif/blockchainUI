<template>
    <Card class="dom" id="intro">
        <div class="intro">
            <li v-for="(image, index) in images" :key="index">
                <img :src="image.imgUrl" style="align-items: center">
            </li>
        </div>
        <div>
            <span style="width: 100%; align: right"> 素材源于http://blog.jobbole.com/53433/</span>
        </div>
    </Card>
</template>

<script>

    import intro1 from '../image/intro1.png'
    import intro2 from '../image/intro2.png'
    import intro3 from '../image/intro3.png'
    import intro4 from '../image/intro4.png'
    import intro5 from '../image/intro5.png'
    import intro6 from '../image/intro6.png'
    import intro7 from '../image/intro7.png'
    import intro8 from '../image/intro8.png'

    export default {
        data () {
            return {
                images: [
                    {
                        imgUrl: intro1
                    },
                    {
                        imgUrl: intro2
                    },
                    {
                        imgUrl: intro3
                    },
                    {
                        imgUrl: intro4
                    },
                    {
                        imgUrl: intro5
                    },
                    {
                        imgUrl: intro6
                    },
                    {
                        imgUrl: intro7
                    },
                    {
                        imgUrl: intro8
                    }
                ]
            }
        }
    }
</script>
<style scoped>
    .dom {
        min-height: 300px;
        width: 90%;
        margin-left: 5%;
        margin-right: 5%;
        margin-top: 10px;
        background: #f1f2f0;
        border-radius: 8px;
        font-family: "ff-tisa-web-pro-1","ff-tisa-web-pro-2","Lucida Grande","Hiragino Sans GB","Hiragino Sans GB W3",serif;

    }
    .intro {
        margin-left: 10%;
        margin-top: 30px;
    }
</style>