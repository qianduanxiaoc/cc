<template>
    <div id="app">
        <div class="menu">
            <menu-list></menu-list>
        </div>
        <div class="content">

        <div class="btn">
            <span @click="add">+</span>{{percent}}<span @click="del">-</span>
        </div>
            <div>
                <circle-demo :percent="percent" :size="120" :trailWidth="30" :strokeWidth="30"></circle-demo>
            </div>
            <div>
                <circle-demo :percent="percent" :size="360" :trailWidth="30" :strokeWidth="30"></circle-demo>
            </div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import menuList from './components/menu.vue'
import circleDemo from './views/circle-svg.vue'
export default {
    name: 'app',
    components: {
        menuList,
        circleDemo
    },
    data() {
        return {
            percent: 0,
            step: 10
        }
    },
    computed: {
    },
    methods: {
        add() {
            if(this.percent < 100) {
                this.percent += this.step
            }
        },
        del() {
            if(this.percent > 0) {
                this.percent -= this.step
            }
        }
    },
    mounted() {
    }
}
</script>

<style lang="scss" scope>
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        display: flex;
    }
    .menu {
        min-height: 100vh;
        flex-basis: 200px;
        flex-grow: 0;
        flex-shrink: 0;
        border-right: 1px solid #e1e6eb;
    }
    .content {
        padding: 32px;
        flex-basis: calc(100% - 200px);
    }
</style>
