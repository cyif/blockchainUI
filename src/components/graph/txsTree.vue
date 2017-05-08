<template>
    <Card id="d3tree" class="container-fluid">
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
    </Card>
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
                for (let i = 0; i < this.trade.vouts.length; i++) {
                    if (i >= 20) {
                        children.push({
                            text: '...',
                            is_spent: false
                        });
                        break;
                    }
                    let out = this.trade.vouts[i];
                    children.push({
                        text: out.address,
                        amount: out.amount,
                        is_spent: out.is_spent === 49,
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
//                this.currentNode = evt.element;
//                this.onEvent('onClick', evt)
                console.log(evt);
                this.$route.push({
                    path: '/address/info/' + evt.element.text
                });
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
        font-family: "ff-tisa-web-pro-1","ff-tisa-web-pro-2","Lucida Grande","Hiragino Sans GB","Hiragino Sans GB W3",serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 20px;
    }
    .tree {
        min-height: 500px;
        width: 90%;
    }
</style>
