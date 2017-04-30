<template>
    <div id="d3tree" class="container-fluid">
        <div class="col-md-9 panel panel-default">
            <d3tree class="tree"
                    :data="treeData"
                    :marginX="Marginx"
                    :marginY="Marginy"
                    :zoomable="zoomable"
                    :node-text="nodeText"
                    :type="type"
                    :duration="duration"
                    @clicked="onClick"
                    @expand="onExpand"
                    @retract="onRetract"></d3tree>
        </div>
    </div>
</template>

<script>
    import {D3tree} from '../graph/d3tree'

    export default {
        props: ['trade'],
        data () {
            return {
                type: 'cluster',
                layoutType: 'euclidean',
                duration: 750,
                Marginx: 100,
                Marginy: 100,
                nodeText: 'text',
                currentNode: null,
                zoomable: true,
            }
        },
        components: {
            D3tree
        },
        computed: {
            treeData : function() {
                let children = [];
                console.log(this.trade.vouts);
                for (let i = 0; i < this.trade.vouts.length; i++) {
                    let out = this.trade.vouts[i];
                    children.push({
                        text: out.address,
                        amount: out.amount,
                        is_spent: out.is_spent,
                        children: []
                    })
                }
                return {
                    text : '交易',
                    children: children
                }
            }
        },
        methods: {
            do (action) {
                if (this.currentNode) {
                    this.isLoading = true
                    this.$refs['tree'][action](this.currentNode).then(() => { this.isLoading = false })
                }
            },
            getId (node) {
                return node.id
            },
            expandAll () {
                this.do('expandAll')
            },
            collapseAll () {
                this.do('collapseAll')
            },
            showOnly () {
                this.do('showOnly')
            },
            show () {
                this.do('show')
            },
            onClick (evt) {
                this.currentNode = evt.element;
//                this.onEvent('onClick', evt)
            },
            onExpand (evt) {
                this.onEvent('onExpand', evt)
            },
            onRetract (evt) {
                this.onEvent('onRetract', evt)
            },
            onEvent (eventName, data) {
//                this.events.push({eventName, data: data.data});
                console.log({eventName, data: data})
            },
            resetZoom () {
                this.isLoading = true;
                this.$refs['tree'].resetZoom().then(() => { this.isLoading = false })
            }
        }
    }
</script>

<style>
    #d3tree {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 20px;
    }
    .tree {
        height: 500px;
        width: 100%;
    }
</style>
