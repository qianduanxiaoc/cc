<template>
    <div>
        <p>name:{{name}}</p>
        <p>total:{{total}}</p>
        <p>arr:{{arr}}</p>
        <p>arr:{{arr2}}</p>
    </div>
</template>
<script>
    export default {
        components: {},
        data() {
            return {
                name: '',
                total: 0,
                arr: [],
                arr2: []
            }
        },
        computed: {

        },
        methods: {
            anonyFunc() {
                let name = '匿名函数'
                return function() {
                    return name
                }
            },
            getAnonyFuncValue() {
                this.name = this.anonyFunc()()
                console.log(this.name)
            },
            recursive(num) {
                if(num === 1) {
                    return num
                } else {
                    //recursive用arguments.callee 指向当前正在执行函数的指针-这样写可以避免recursive置null时报错，但严格模式会报错
                    return num*this.recursive(num-1)
                }
            },
            close1() {
                //闭包
                var arr = new Array()
                for(var i = 0; i< 10; i++) {
                    arr[i] = function() {
                        return i
                    }()
                }
                return arr
            },
            close2() {
                //闭包
                var arr1 = new Array()
                for(var i = 0; i< 10; i++) {
                    arr1[i] = function(num) {
                        return function() {
                            return num
                        }
                    }(i)
                }
                return arr1
            }
        },
        created() {
            this.getAnonyFuncValue()
            this.total = this.recursive(3)
            this.arr = this.close1()
            this.arr2 = this.close2()
        }
    }
</script>
<style module="s">
     
</style>