<template>
    <div></div>
</template>
<script>
    export default {
        components: {},
        data() {
            return {}
        },
        methods: {
        },
        created() {
            /*
            工厂模式
            通过接收参数创建具有必要信息的对象，解决了创建多个类似对象的问题，但未解决对象的识别问题
            */
            function createPerson(name, age, job) {
                var o = new Object()
                o.name = name
                o.age = age
                o.job = job
                o.getName = function() {
                    return o.name
                }
                return o
            }
            let person1 = createPerson('lili1', 11, 'student')


            /*
            构造函数
            解决了对象识别问题，但每个方法都要在每个实例上创建一遍
            */
            function Person(name, age, job) {
                this.name = name
                this.age = age
                this.job = job
                this.getName = function() {
                    return this.name
                }
            }

            let person2 = new Person('lili2', 11, 'student')
            let person3 = new Person('lili4', 11, 'student')
            console.log(person2.constructor == Person)
            console.log(person3.constructor == Person)
            console.log(person2 instanceof Person)


            //将getName转移到外部，Person2实例共享getName函数，产生新问题：全局函数只能被某个对象调用，毫无封装性可言
            function Person2(name, age, job) {
                this.name = name
                this.age = age
                this.job = job
                this.getName = getName()
            }
            function getName() {
                return this.name
            }


            /*
            原型模式
            每个函数都有一个prototype属性，该属性是一个指针，指向一个对象，该对象的用途是包含可以由特定类型的所有势力共享的属性和方法。
            解决了传递初始化参数，但是原型的共享性对于引用类型的属性上带来了新问题
            */
            function Person3() {}
            Person3.prototype.name = 'lili'
            Person3.prototype.age = 10
            Person3.prototype.job = 'student'
            Person3.prototype.friends = ['li']
            Person3.prototype.getName = function() {
                return this.name
            }
            let person4 = new Person3
            let person5 = new Person3
            person4.friends.push('li2')

            console.log(person4.getName === person5.getName) //true
            console.log(person5.friends)  //li,li2

        }
    }
</script>
<style module="s">
     
</style>