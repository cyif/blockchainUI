<template>
    <div id="intro">
        <li v-for="(image, index) in images" :key="index">
            <img :src="image.imgUrl">
        </li>
    </div>
</template>

<script>

    import intro1 from '../image/intro1.png'
    import intro2 from '../image/intro2.png'
    import intro3 from '../image/intro3.png'
    import intro4 from '../image/intro4.png'
    import intro5 from '../image/intro5.png'

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
                    }
                ]
            }
        }
    }
</script>