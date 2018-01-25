<template>
    <div class="home">
        <!--形象图-->
        <h3>汽车天桥可视化形象进度图</h3>
        <div class="progressChar">
            <div class="chart">
                <img :src="dataItem[1].pics" alt="">
                <span class="message">
                    <p>K60+180汽车天桥</p>
                    <p>3*45箱桥</p>
                </span>
            </div>
            <!--进度图列表-->
            <ul class="chartList clearfix">
                <li class="listTitle">可视化形象进度图:</li>
                <li>
                    <ul class="listItem">
                        <li v-for="(item , index) in dataItemFilter" :class="{active:activeIndex==index}" @click="activeIndex=index">
                            <a href="javascript:;">{{item.title}}</a>
                        </li>
                    </ul>
                </li>
                <li class="more">
                    <a href="javascript:;" @click="expand" v-if="limit===10">更 多</a>
                    <a href="javascript:;" @click="expand" v-if="limit !=10">收 起</a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                dataItem: [
                    {
                        title:"高速道路",
                        pics:require("../../../static/images/01.gif"),
                        msg:[
                            {
                                title:"K60+180汽车天桥",
                                content:">3*45箱桥"
                            }
                        ]
                    },
                    {
                        title:"汽车天桥",
                        pics:require("../../../static/images/02.gif"),
                        msg:[
                            {
                                title:"K60+180汽车天桥",
                                content:">3*45箱桥"
                            }
                        ]
                    },
                    {
                        title:"汽车天桥",
                        pics:require("../../../static/images/02.gif"),
                        msg:[
                            {
                                title:"K60+180汽车天桥",
                                content:">3*45箱桥"
                            }
                        ]
                    },
                    {
                        title:"汽车天桥",
                        pics:require("../../../static/images/02.gif"),
                        msg:[
                            {
                                title:"K60+180汽车天桥",
                                content:">3*45箱桥"
                            }
                        ]
                    },
                    {
                        title:"高速道路",
                        pics:require("../../../static/images/01.gif"),
                        msg:[
                            {
                                title:"K60+180汽车天桥",
                                content:">3*45箱桥"
                            }
                        ]
                    },
                    {
                        title:"高速道路",
                        pics:require("../../../static/images/01.gif"),
                        msg:[
                            {
                                title:"K60+180汽车天桥",
                                content:">3*45箱桥"
                            }
                        ]
                    },
                    {
                        title:"汽车天桥",
                        pics:require("../../../static/images/02.gif"),
                        msg:[
                            {
                                title:"K60+180汽车天桥",
                                content:">3*45箱桥"
                            }
                        ]
                    },
                    {
                        title:"汽车天桥",
                        pics:require("../../../static/images/02.gif"),
                        msg:[
                            {
                                title:"K60+180汽车天桥",
                                content:">3*45箱桥"
                            }
                        ]
                    },
                    {
                        title:"汽车天桥",
                        pics:require("../../../static/images/02.gif"),
                        msg:[
                            {
                                title:"K60+180汽车天桥",
                                content:">3*45箱桥"
                            }
                        ]
                    },
                    {
                        title:"高速道路",
                        pics:require("../../../static/images/01.gif"),
                        msg:[
                            {
                                title:"K60+180汽车天桥",
                                content:">3*45箱桥"
                            }
                        ]
                    },
                    {
                        title:"高速道路",
                        pics:require("../../../static/images/01.gif"),
                        msg:[
                            {
                                title:"K60+180汽车天桥",
                                content:">3*45箱桥"
                            }
                        ]
                    },
                    {
                        title:"高速道路",
                        pics:require("../../../static/images/01.gif"),
                        msg:[
                            {
                                title:"K60+180汽车天桥",
                                content:">3*45箱桥"
                            }
                        ]
                    },
                    {
                        title:"汽车天桥",
                        pics:require("../../../static/images/02.gif"),
                        msg:[
                            {
                                title:"K60+180汽车天桥",
                                content:">3*45箱桥"
                            }
                        ]
                    },
                    {
                        title:"汽车天桥",
                        pics:require("../../../static/images/02.gif"),
                        msg:[
                            {
                                title:"K60+180汽车天桥",
                                content:">3*45箱桥"
                            }
                        ]
                    },
                    {
                        title:"汽车天桥",
                        pics:require("../../../static/images/02.gif"),
                        msg:[
                            {
                                title:"K60+180汽车天桥",
                                content:">3*45箱桥"
                            }
                        ]
                    },
                    {
                        title:"高速道路",
                        pics:require("../../../static/images/01.gif"),
                        msg:[
                            {
                                title:"K60+180汽车天桥",
                                content:">3*45箱桥"
                            }
                        ]
                    },
                    {
                        title:"高速道路",
                        pics:require("../../../static/images/01.gif"),
                        msg:[
                            {
                                title:"K60+180汽车天桥",
                                content:">3*45箱桥"
                            }
                        ]
                    },
                ],
                limit:10,
                activeIndex:0
            }
        },
        computed:{
            dataItemFilter(){
                return this.dataItem.slice(0,this.limit);
            }
        },
        methods:{
//            点击更多
            expand(){
                if(this.limit ===10){
                    this.limit = this.dataItem.length;
                }else {
                    this.limit =10;
                }
            },
            aa(index){
                console.log(index);
            }
        }
    }


</script>

<style scoped>
    .home{
        width: calc(100% - 6px);
        padding-top:10px;
    }
    .home >h3{
        line-height: 42px;
        font-size: 14px;
    }
    .home> .progressChar{
        width: 100%;
        margin-bottom: 40px;
    }
    .home> .progressChar> .chart{
        /*height: 300px;*/
        box-sizing: border-box;
        box-shadow: 1px 1px 4px 1px rgba(35,183,229,.6);
        padding-top: 40px;
        padding-bottom: 20px;
    }
    .progressChar> .chart img{
        display: block;
        margin-left: 28%;

    }
    .progressChar> .chart:last-child{
        margin-right: 0;
    }
    .progressChar> .chart .message{
        display: block;
        margin-left: 45%;
        margin-top:10px;
    }
    .chartList{
        margin-top: 20px;
        border: 1px solid #999999;
        position: relative;
    }
    .chartList >li{
        padding-left: 20px;
        float: left;
        line-height: 34px;
    }
    .chartList .listTitle{
        width:140px;
        box-sizing: border-box;
        background-color: #d6d1cf;
    }
    .listItem >li{
        float: left;
        padding: 0px 20px;
    }
    .active a{
        color: #197cc3 !important;
        font-weight: bold;
    }
    .listItem >li a{
        color: #949494;
    }
    .listItem >li a:hover{
        color: #49bae6;
    }
    .chartList .more{
        position: absolute;
        right: 10px;

    }





</style>