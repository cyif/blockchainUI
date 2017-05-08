<template>
    <div class="overview">
        <div style="background:#eee;padding: 20px">
            <Card :bordered="false">
                <p slot="title">常用名词对照</p>
                <Card :bordered="false" v-for="term in terms">
                    <p slot="title">{{ term[0] }}</p>
                    <p slot="extra">{{ term[1] }}</p>
                    <p>{{ term[2] }}</p>
                </Card>
            </Card>
        </div>
    </div>
</template>

<script>

    import data from '../data/table.json';

    export default {
        data () {
            return {
                terms: data.values
            }
        }
    }
</script>