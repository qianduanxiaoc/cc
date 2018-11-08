<template>
    <div id="SomeElementYouWantToAnimate">11</div>
</template>
<script>
    export default {
        components: {},
        data() {
            return {
                ele: {},
                start: null
            }
        },
        computed: {

        },
        methods: {
            step(timestamp) {
                console.log('timestamp', timestamp)
                if (!this.start) {
                    this.start = timestamp
                }
                var progress = timestamp - this.start
                this.ele.style.left = Math.min(progress / 10, 200) + 'px'
                console.log('left', this.ele.style.left)
                if (progress < 2000) {
                    window.requestAnimationFrame(this.step)
                }
            }

        },
        mounted() {
            this.ele = document.getElementById('SomeElementYouWantToAnimate')

            window.requestAnimationFrame(this.step)
        }
    }
</script>
<style module="s">
     #SomeElementYouWantToAnimate {
        position: absolute;
        border: 1px solid #666;
     }
</style>