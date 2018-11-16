import Vue from 'vue'
import Router from 'vue-router'
import intersectionObserver from './views/intersection-observer.vue'
import mixBlendMode from './views/mix-blend-mode.vue'
import animateSearch from './views/animate.vue'
import renderDemo from './views/render.vue'
import circleCss3 from './views/circle.vue'
import circleSvg from './views/circle-svg.vue'
import timeLine from './views/animate-time-line.vue'
import newFunction from './views/new-function.vue'
import animateLine from './views/animate-line.vue'
import game from './views/game.vue'
import work from './views/worker.vue'
import requestAnimateFrame from './views/request-animate-frame.vue'
import closed from './views/closed.vue'
import cssShapes from './views/css-shapes.vue'
import objectObserve from './views/object_observe.vue'
import fixTable from './views/fix-table.vue'
import jsTypeof from './views/js/js-typeof-instanceof.vue'
import jsJsonFormal from './views/js/js-json-formal.vue'
import jsCreateObj from './views/js/js-create-obj.vue'
import jsFunction from './views/js/js-function.vue'
import vueDirective from './views/vue-directive.vue'
import myQuestion from './views/my-question.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/my-question',
            name: 'myQuestion',
            component: myQuestion
        },
        {
            path: '/intersectionObserver',
            name: 'intersectionObserver',
            component: intersectionObserver
        }, {
            path: '/mixBlendMode',
            name: 'mixBlendMode',
            component: mixBlendMode
        }, {
            path: '/animateSearch',
            name: 'animateSearch',
            component: animateSearch
        }, {
            path: '/renderDemo',
            name: 'renderDemo',
            component: renderDemo
        }, {
            path: '/circleCss3',
            name: 'circleCss3',
            component: circleCss3
        }, {
            path: '/circleSvg',
            name: 'circleSvg',
            component: circleSvg
        }, {
            path: '/timeLine',
            name: 'timeLine',
            component: timeLine
        }, {
            path: '/newFunction',
            name: 'newFunction',
            component: newFunction
        }, {
            path: '/animateLine',
            name: 'animateLine',
            component: animateLine
        }, {
            path: '/game',
            name: 'game',
            component: game
        }, {
            path: '/work',
            name: 'work',
            component: work
        }, {
            path: '/request-animate-frame',
            name: 'requestAnimateFrame',
            component: requestAnimateFrame
        }, {
            path: '/closed',
            name: 'closed',
            component: closed
        }, {
            path: '/css-shapes',
            name: 'cssShapes',
            component: cssShapes
        }, {
            path: '/object-observe',
            name: 'objectObserve',
            component: objectObserve
        }, {
            path: '/fix-table',
            name: 'fixTable',
            component: fixTable
        }, {
            path: '/js-typeof',
            name: 'jsTypeof',
            component: jsTypeof
        }, {
            path: '/js-json-formal',
            name: 'jsJsonFormal',
            component: jsJsonFormal
        }, {
            path: '/js-create-obj',
            name: 'jsCreateObj',
            component: jsCreateObj
        }, {
            path: '/js-function',
            name: 'jsFunction',
            component: jsFunction
        }, {
            path: '/vue-directive',
            name: 'vueDirective',
            component: vueDirective
        }
    ]
})
