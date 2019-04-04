<template>
    <div class="main">
        <div :class="['block', [i]]" :style="getStyle(data, i)" v-for="(data, i) in mapObj.names" @mouseover="mouseover($event, data, i)"></div>
        <svg width="0" height="0" v-for="(data, i) in mapObj.shapes">
            <clipPath :id="i">
                <path :d="data" fill="#436379" p-id="6487"></path>
            </clipPath>
        </svg>
        <div class="detail" :style="{left: `${mousePos.x}px`, top: `${mousePos.y}px`}"  >
            {{mousePos.data.name}}
        </div>
    </div>
</template>
<script>
    import map from '../map-dada/china-map-data.js'
    export default {
        components: {},
        data() {
            return {
                mousePos: {
                    x: 0,
                    y: 0,
                    data: {}
                },
                mapObj: map
            }
        },
        computed: {
        },
        methods: {
            getStyle(config, i) {
                return {
                    background: `#${config.color}`,
                    clipPath: `url(#${i})`
                }
            },
            mouseover(event, data, i) {
                this.mousePos = {
                    x: event.x,
                    y: event.y,
                    data: data
                }
            }
        }
    }
</script>
<style lang="scss">
        $heilongjiang: #ffe7b8;
        $jilin: #c0f0ff;
        $liaoning: #d3dd9b;
        $hebei: #c0f0ff;
        $shandong: #ffcca9;
        $jiangsu: #c0f0ff;
        $zhejiang: #f7b7b7;
        $anhui: #b1f2c7;
        $henan: #f4d3f4;
        $shanxi: #ffe7b8;
        $shaanxi: #f9caca;
        $gansu: #c0f0ff;
        $hubei: #d3dd9b;
        $jiangxi: #ffe7b8;
        $fujian: #c0f0ff;
        $hunan: #c0f0ff;
        $guizhou: #f4d3f4;
        $sichuan: #b7eac6;
        $yunnan: #d3dd9b;
        $qinghai: #ffe7b8;
        $hainan: #ffcca9;
        $shanghai: #eed38b;
        $chongqing: #ffcca9;
        $tianjin: #eed38b;
        $beijing: #ffcca9;
        $neimongol: #b1f2c7;
        $guangxi: #b1f2c7;
        $xinjiang: #ffcca9;
        $xizang: #c0f0ff;
        $guangdong: #f3f3f3;
        $ningxia: #ffcca9;
        $hongkong: #a3d0f8;
        $taiwan: #ffe7b8;
        $macau: #a3d0f8;
    
    .detail {
        position: fixed;
    }

    .icon {
       width: 1em; height: 1em;
       vertical-align: -0.15em;
       fill: currentColor;
       overflow: hidden;
    }

    .main {
        position: relative;
        width: 565px;
        height: 475px;
        .block {
            position: absolute;
            left: 0;
            top: 0;
            width: 565px;
            height: 475px;
            cursor: pointer;
            transition: all 0.5s;

            .pop {
                position: absolute;
            }
        }

        .heilongjiang { 
            &:hover {
                background: darken($heilongjiang, 10%) !important;
            }
        }
        .jilin {
            &:hover {
                background: darken($jilin, 10%) !important;
            }
        }
        .liaoning {
            &:hover {
                background: darken($liaoning, 10%) !important;
            }
        }
        .hebei { 
            &:hover {
                background: darken($hebei, 10%) !important;
            }
        }
        .shandong { 
            &:hover {
                background: darken($shandong, 10%) !important;
            }
        }
        .jiangsu { 
            &:hover {
                background: darken($jiangsu, 10%) !important;
            }
        }
        .zhejiang { 
            &:hover {
                background: darken($zhejiang, 10%) !important;
            }
        }
        .anhui { 
            &:hover {
                background: darken($anhui, 10%) !important;
            }
        }
        .henan { 
            &:hover {
                background: darken($henan, 10%) !important;
            }
        }
        .shanxi { 
            &:hover {
                background: darken($shanxi, 10%) !important;
            }
        }
        .shaanxi { 
            &:hover {
                background: darken($shaanxi, 10%) !important;
            }
        }
        .gansu { 
            &:hover {
                background: darken($gansu, 10%) !important;
            }
        }
        .hubei { 
            &:hover {
                background: darken($hubei, 10%) !important;
            }
        }
        .jiangxi { 
            &:hover {
                background: darken($jiangxi, 10%) !important;
            }
        }
        .fujian { 
            &:hover {
                background: darken($fujian, 10%) !important;
            }
        }
        .hunan { 
            &:hover {
                background: darken($hunan, 10%) !important;
            }
        }
        .guizhou { 
            &:hover {
                background: darken($guizhou, 10%) !important;
            }
        }
        .sichuan { 
            &:hover {
                background: darken($sichuan, 10%) !important;
            }
        }
        .yunnan { 
            &:hover {
                background: darken($yunnan, 10%) !important;
            }
        }
        .qinghai { 
            &:hover {
                background: darken($qinghai, 10%) !important;
            }
        }
        .hainan { 
            &:hover {
                background: darken($hainan, 10%) !important;
            }
        }
        .shanghai { 
            &:hover {
                background: darken($shanghai, 10%) !important;
            }
        }
        .chongqing { 
            &:hover {
                background: darken($chongqing, 10%) !important;
            }
        }
        .tianjin { 
            &:hover {
                background: darken($tianjin, 10%) !important;
            }
        }
        .beijing { 
            &:hover {
                background: darken($beijing, 10%) !important;
            }
        }
        .neimongol { 
            &:hover {
                background: darken($neimongol, 10%) !important;
            }
        }
        .guangxi { 
            &:hover {
                background: darken($guangxi, 10%) !important;
            }
        }
        .xinjiang { 
            &:hover {
                background: darken($xinjiang, 10%) !important;
            }
        }
        .xizang { 
            &:hover {
                background: darken($xizang, 10%) !important;
            }
        }
        .guangdong { 
            &:hover {
                background: darken($guangdong, 10%) !important;
            }
        }
        .ningxia { 
            &:hover {
                background: darken($ningxia, 10%) !important;
            }
        }
        .hongkong { 
            &:hover {
                background: darken($hongkong, 10%) !important;
            }
        }
        .taiwan { 
            &:hover {
                background: darken($taiwan, 10%) !important;
            }
        }
        .macau { 
            &:hover {
                background: darken($macau, 10%) !important;
            }
        }
    }
</style>