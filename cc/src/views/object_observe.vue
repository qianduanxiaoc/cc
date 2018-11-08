<template>
    <div>
        Object.observe
        <progress value="70" max="100">70 %</progress>
    </div>
</template>
<script>
    export default {
        components: {},
        data() {
            return {}
        },
        computed: {

        },
        methods: {

        },
        created() {
            // 假设我们这里有个数据模型
            let model = {};
            console.log(Object(),11)
            // 我们来对它进行监听
            // Object.observe(model, function(changes){

            //     // 这个异步回调函数将被执行
            //     changes.forEach(function(change) {

            //         // 我们知道了都发生了哪些变化
            //         console.log(change.type, change.name, change.oldValue)
            //     })
            // })
        }
    }
</script>
<style module="s">
     
</style>