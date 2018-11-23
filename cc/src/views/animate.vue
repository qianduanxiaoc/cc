<template>
    <div class="animate">
        <div class="search">
            <span @click="search" >
                se<span :class="{circle: true, active: isSearch}">
                    <input type="text" v-if="isSearch"v-focus @blur="blur" @focus="focus">
                </span>rch
            </span>
        </div>
        
        <!-- 参考 -->
        <!-- https://developer.mozilla.org/zh-CN/docs/Web/CSS/clip-path -->
        <div class="clip-path-wave">
            <div class="wave wave1"></div>
            <div class="wave wave2"></div>
             <div class="wave wave3"></div>
        </div>
    </div>
</template>
<script>
    export default {
        temName: '有意思的动画',
        components: {},
        data() {
            return {
                isSearch: false,
                searchBlur: false
            }
        },
        computed: {

        },
        directives: {
            focus: {
                inserted: function (el) {
                    el.focus()
                }
            }
        },
        methods: {
            search() {
                this.isSearch = true
            },
            focus() {
                this.searchBlur = false
                this.isSearch = true
            },
            blur() {
                this.searchBlur = true
                this.isSearch = false
            }
        }
    }
</script>
<style lang="scss" scope>
    .animate {
        >div {
            margin-bottom: 32px;
        }
    }
    .search {
        >span {
            display: inline-block;
            font-size: 40px;
            color: #0bb27a;
            cursor: pointer;
        }
        .circle {
            position: relative;
            display: inline-block;
            width: 22px;
            height: 22px;
            border-radius: 11px;
            transition: width 0.2s;
            border: 3px solid #0bb27a;
            >input {
                position: absolute;
                width: 100px;
                top: 0;
                left: 11px;
                border: none;
                outline: none;
            }
            &::after {
                position: absolute;
                content: '';
                right: -4px;
                top: -2px;
                display: block;
                width: 3px;
                height: 21px;
                background: #0bb27a;
            }
            &.active  {
                width: 122px;
                padding: 0 11px;
            }
        }
    }

    .clip-path-wave {
        position: relative;
        width: 300px;
        height: 300px;
        border-radius: 50%;
        overflow: hidden;
        border: 1px solid #efefef;

        .wave {
            position: absolute;
            height: 500px;
            width: 400px;
            background: rgba(213,163,187,0.3);
        }
        .wave1 {
            top: 60px;
            left: -10px;
            clip-path: ellipse(60% 50%);
            animation: wave1 7s infinite;
        }
        .wave2 {
            top: 30px;
            left: -20%;
            clip-path: ellipse(55% 50%);
            animation: wave2 7s infinite;
        }
        .wave3 {
            top: 80px;
            left: -30%;
            clip-path: ellipse(55% 50%);
            animation: wave3 7s infinite;
        }
    }

    @keyframes wave1 {
        0% {
            top: 60px;
            left: -10px;
        }
        50% {
            top: 50px;
            left: -70px;
        }
        100% {
            top: 60px;
            left: -10px;
        }
    }

    @keyframes wave2 {
        0% {
            top: 30px;
            left: -80px;
        }
        50% {
            top: 90px;
            left: 20px;
        }
        100% {
            top: 30px;
            left: -80px;
        }
    }

    @keyframes wave3 {
        0% {
            top: 80px;
            left: -30px;
        }
        50% {
            top: 40px;
            left: -20px;
        }
        100% {
            top: 80px;
            left: -30px;
        }
    }
</style>