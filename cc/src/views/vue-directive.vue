<template>
    <div v-loading>111
    </div>
</template>
<script>
    import Vue from 'vue'
    import loading from './directive/loading.vue'
    export default {
        components: {loading},
        data() {
            return {}
        },
        computed: {

        },
        directives: {
            loading: {
                //只调用一次，指令第一次绑定到元素时调用
                bind: function(el) {
                    var MyComponent = Vue.extend({
                      template: '<div>Hello!</div>'
                    })

                    // 或者，在文档之外渲染并且随后挂载
                    var component = new MyComponent().$mount()
                   // document.getElementById('app').appendChild(component.$el)
                    console.log(component)
                    // let Loading = Vue.extend(Loading)
                    // const instance = new Loading().$mount()
                    // console.log(instance)
                    //instance.vm = instance.$mount()
                    //document.body.appendChild(instance.vm.$el)
                    console.log(arguments,'bind')
                },
                // 被绑定元素插入父节点时调用
                inserted: function () {
                    console.log(arguments,'inserted')
                },
                // 所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前
                update: function () {
                    console.log(arguments,'update')
                },
                // 指令所在组件的 VNode 及其子 VNode 全部更新后调用
                componentUpdated: function () {
                    console.log(arguments,'componentUpdated')
                },
                // 只调用一次，指令与元素解绑时调用
                unbind: function () {
                    console.log(arguments,'unbind')
                }
            }
        },
        methods: {

        },
        mounted() {
        }
    }
</script>
<style module="s">
     
</style>