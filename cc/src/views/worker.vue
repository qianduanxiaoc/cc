<template>
    <div>
   <!--      work  {{num}}{{error}}<br/><br/>

        主线程{{count}}<br/><br/>
        <input type="text" :style="{display: display}"><br/><br/>
        <p id="test">11</p>
        <span @click="timedCount">主线程开始</span><br/><br/>
        <span @click="toggle">隐藏、显示输入框</span><br/><br/>
        <span @click="startWorker">work开始</span><br/><br/>
        <span @click="stopWorker">结束</span> -->
        <span>生成png</span>
        <br/>
        <br/>
        <img src="./images/4.jpg" alt="" :class="s.img">
    </div>
</template>
<script>
    export default {
        components: {},
        data() {
            return {
                w: null,
                num: 0,
                count: 0,
                error: '',
                display: 'block'
            }
        },
        methods: {
            startWorker() {
                if(typeof(Worker) !== "undefined") {
                    let _this = this
                    if(!this.w) {
                        this.w = new Worker("./work.js")
                    }
                    this.w.onmessage = function (event) {
                        _this.num = event.data
                    }
                } else {
                    this.error= "Sorry, your browser does not support Web Workers..."
                }
            },
            timedCount() {
                for(let i = 1; i < 10000; i++) {
                    console.log('主线程：', i)
                }
            },
            stopWorker() {
                this.w.terminate()
            },
            toggle() {
                console.log('111111111111111111111111111111111')
            }
        },
        mounted() {
            document.getElementById('test')
        }
    }
</script>
<style module="s">
     .img {
        width: 1000px;
     }
</style>