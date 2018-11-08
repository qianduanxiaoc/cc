<template>
    <div :class="s.wraper">
        <!-- 参考地址 https://www.html5rocks.com/en/tutorials/shapes/getting-started/ -->
        <div>
            <img src="./images/css-shapes.png" alt="" :class="s.shapeImg">
            <p>这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这</p>
        </div>
        <br/>
        <br/>
        <div>
            <div :class="s.shapeCircle">
                <div></div>
            </div>
            <p>这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这</p>
        </div>
        <br/>
        <br/>
        <div>
            <div :class="s.shapePolygon">
            </div>
            <p>这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这</p>
        </div>
        <br/>
        <br/>
        <div>
            <div :class="s.shapeInset">
            </div>
            <p>这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这</p>
        </div>
        <br/>
        <br/>
        <div>
            <div :class="s.shapeAnimate">
            </div>
            <p>这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这</p>
        </div>
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

        }
    }
</script>
<style module="s" lang="scss">
    .wraper {
        .shapeImg {
            float: left;
            width: 100px;
            shape-outside: url('./images/css-shapes.png');
            shape-image-threshold: 0.5;
        }

        .shapeCircle {
            float: left;
            width: 100px;
            height: 100px;
            shape-outside: circle(50%);
            shape-image-threshold: 0.5;
            shape-margin: 3px;
            >div {
                width: 100px;
                height: 100px;
                border-radius: 50%;
                background: #b4e7d4;
            }
        }

        .shapePolygon {
            float: left;
            width: 100px;
            height: 100px;
            padding: 10px;
            shape-outside: polygon(0 0, 0 50px, 50px 100px);
            shape-image-threshold: 0.5;
            shape-margin: 10px;
        }

        .shapeInset {
            width: 300px;
            height: 300px;
            border-radius: 50%;
            shape-outside: border-box;
            float: left;
        }

        .shapeAnimate {
            width: 300px;
            height: 300px;
            shape-outside: circle(30%);
            transition: shape-outside 1s;
            float: left;

            &:hover{
                shape-outside: circle(50%);
            }
        }
    }
</style>