<template>
    <svg :width="size" :height="size" :viewBox="`0 0 ${size} ${size}`">

        <!-- 进度环背景 -->
        <circle :cx="radius" :cy="radius" :r="circleRadius" :stroke="trailColor" :stroke-width="trailWidth" :fill="trailBgc"/>

        <!-- 进度环 -->
        <circle :cx="radius" :cy="radius" :r="circleRadius" :stroke="strokeColor" :stroke-width="strokeWidth" fill="transparent" :style="strokeStyle"/>

    </svg>
</template>
<script>
    export default {
        props: {
            // 图表宽高
            size: {
                type: Number,
                default: 60
            },
            // 进度环背景色
            trailColor: {
                type: String,
                default: '#e1e6eb'
            },
            // 进度环底盘色-默认transparent
            trailBgc: {
                type: String,
                default: 'transparent'
            },
            // 进度环背景线宽
            trailWidth: {
                type: Number,
                default: 10
            },
            // 进度环色
            strokeColor: {
                type: String,
                default: '#0bb27a'
            },
            // 进度环线宽
            strokeWidth: {
                type: Number,
                default: 10
            },
            percent: {
                type: Number,
                default: 0
            }
        },
        data() {
            return {
                
            }
        },
        computed: {
            //圆半径
            radius() {
                return this.size / 2
            },
            //圆环半径-- 根据环宽，取环较宽的半径
            circleRadius() {
                if(this.strokeWidth > this.trailWidth) {
                    return this.radius - this.strokeWidth / 2
                } else {
                    return this.radius - this.trailWidth / 2
                }
            },
            // 进度环css
            strokeStyle() {
                let len = Math.PI * 2 * this.circleRadius
                let percentLen = this.percent / 100 * len
                return {
                    strokeDasharray: `${percentLen} ${len}`,
                    strokeDashoffset: 0
                }
            }
        },
        mounted() {
        }
    }
</script>
<style lang="scss" scope>

   .btn {
        >span {
            display: inline-block;
            padding: 0 10px;
            line-height: 32px;
            margin: 0 15px;
        }
   }
   svg{
        border-radius: 50%;
        position: relative;
        z-index: 2;
        circle {
            transition: stroke-dasharray 0.6s ease 0s
        }
   }

</style>