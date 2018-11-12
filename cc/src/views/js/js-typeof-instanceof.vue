<template>
    <div>
        num的typeof值： number<br/>
        bool的typeof值： boolean<br/>
        str的typeof值： string<br/>
        obj的typeof值： object<br/>
        nul的typeof值： object<br/>
        udfd的typeof值： undefined<br/>
        method的typeof值： function
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

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
        mounted() {
            let data = {
                num: 9,  //number
                bool: true, //boolean
                str: '字符串',//string
                obj: {},//object
                nul: null,//object
                udfd: undefined,//undefined
                method: function() {} //function
            }
            for(let item in data) {
                console.log(`${item}的typeof值：`, typeof(data[item]))
            }



            let instance = {
                regexp: /[wde]/,
                arr: [1,2]
            }
            //instanceof(object, constructor)
            //instanceof 运算符用来检测 constructor.prototype 是否存在于参数 object 的原型链上
            for(let item in instance) {
                console.log(`${item}的instanceof值：`, instance[item] instanceof Array)
            }


            //检测数组
            let arr = [1,2]
            console.log('arr是否是数组',Array.isArray(arr))
        }
    }
</script>
<style module="s">
     
</style>