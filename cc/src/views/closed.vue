<template>
    <div>
        <span @click="open">打开</span>
        <span @click="change">更换</span>
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
            open() {
                window.open('https://www.2haohr.com')
            },
            change() {
                //closed:此只读属性表示所引用的窗口是否关闭
                console.log(window.opener)
                if (window.opener && !window.opener.closed) {
                    console.log(111)
                    window.opener.location.href = "https://www.iviewui.com/components/alert"
                }
            }
        },
        mounted() {

        }
    }
</script>
<style module="s">
     
</style>