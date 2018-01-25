<template>
    <div class="asideNav" id="asideNav">
        <el-menu :default-active="$route.path" class="el-menu-vertical-demo" @open="handleOpen"   theme="dark" router uniqueOpened>
            <div class="user">系统用户管理员</div>
            <!--首页-->
            <el-submenu index="/">
                <template slot="title">
                    <i class="icon icon-home"></i>可视化进度
                </template>
                <el-menu-item-group>
                    <el-menu-item index="/">可视化形象进度图</el-menu-item>
                    <el-menu-item index="/planTrace">形象计划跟踪管理</el-menu-item>
                    <el-menu-item index="2">暂时内容未定</el-menu-item>
                </el-menu-item-group>

            </el-submenu>
            <el-menu-item index="/itemInfo"><i class="icon icon-itemInfo"></i>项目信息</el-menu-item>
            <el-menu-item index="/userInfo"><i class="icon icon-userInfo"></i>人员信息</el-menu-item>
            <!--基础数据录入-->
            <el-submenu index="/dataIn">
                <template slot="title">
                    <i class="icon icon-message"></i>基础数据导入
                </template>
                <el-menu-item-group>
                    <template slot="title"></template>
                    <el-menu-item index="/dataIn/winBidding">中标清单</el-menu-item>
                    <el-menu-item index="/dataIn/BQItem">分部分项</el-menu-item>
                    <el-menu-item index="/dataIn/composite">复合清单</el-menu-item>
                    <el-menu-item index="/dataIn/modifyIn">变更清单导入</el-menu-item>
                    <el-menu-item index="/dataIn/teamsMeg">分包队伍信息录入</el-menu-item>
                    <el-menu-item index="/dataIn/classMegIn">班组信息录入</el-menu-item>
                    <el-menu-item index="/dataIn/farmOutIn">分包合同信息录入</el-menu-item>
                    <el-menu-item index="/dataIn/classPackIn">班组合同信息录入</el-menu-item>
                    <el-menu-item index="/dataIn/MixedMaterial">混合材料配比</el-menu-item>
                    <el-menu-item index="/dataIn/StartRecord">关键部位首建开工记录</el-menu-item>
                    <el-menu-item index="/dataIn/bigEvent">大事记</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <!--项目计划管理-->
            <el-submenu index="/itemPlan">
                <template slot="title">
                    <i class="icon icon-itemPlan"></i>项目计划
                </template>
                <el-submenu index="7">
                    <template slot="title">组织机构计划</template>
                    <el-menu-item index="/itemPlan/ownerPlan">业主计划</el-menu-item>
                    <el-menu-item index="/itemPlan/headPlan">内部下达计划</el-menu-item>
                    <el-menu-item index="/itemPlan/projectPlan">项目部下达计划</el-menu-item>
                </el-submenu>
                <el-menu-item-group>
                    <template slot="title"></template>
                    <el-menu-item index="/itemPlan/processPlan">形象进度计划</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <!--分包管理-->
            <el-submenu index="/packManage">
                <template slot="title">
                    <i class="icon icon-packManage"></i>分包管理
                </template>
                <el-menu-item-group>
                    <template slot="title"></template>
                    <el-menu-item index="/packManage/userManage">分包队伍人员管理</el-menu-item>
                    <el-menu-item index="/packManage/teamsPlan">分包队伍计划</el-menu-item>
                    <el-menu-item index="/packManage/startWorkRecord">分包队伍现场活动</el-menu-item>
                    <el-menu-item index="/packManage/getMaterial">分包商领取材料设备</el-menu-item>
                    <el-menu-item index="/packManage/subContractorChange">分包商变更</el-menu-item>
                    <el-menu-item index="/packManage/accountPack">分包结算</el-menu-item>
                    <el-menu-item index="/packManage/addTaxManage">分包商增值税管理</el-menu-item>
                </el-menu-item-group>


            </el-submenu>
            <!--班组管理-->
            <el-submenu index="/groupManage">
                <template slot="title">
                    <i class="icon icon-packManage"></i>班组管理
                </template>
                <el-menu-item-group>
                    <template slot="title"></template>
                    <el-menu-item index="/packManage/userManage">班组合同信息路途</el-menu-item>
                    <el-menu-item index="/packManage/userManage">班组人员管理</el-menu-item>
                    <el-menu-item index="/packManage/teamsPlan">班组计划</el-menu-item>
                    <el-menu-item index="/packManage/startWorkRecord">班组开工记录</el-menu-item>
                    <el-menu-item index="/packManage/getMaterial">班组领取材料设备</el-menu-item>
                    <el-menu-item index="/packManage/subContractorChange">班组变更</el-menu-item>
                    <el-menu-item index="/packManage/accountPack">班组结算</el-menu-item>
                </el-menu-item-group>


            </el-submenu>
            <!--形象进度统计-->
            <el-menu-item index="/processCount">
                <i class="icon icon-processCount"></i>形象进度统计
            </el-menu-item>
            <!--变更清单-->
            <el-menu-item index="/modify">
                <i class="icon icon-processCounts"></i>变更清单
            </el-menu-item>
            <!--计量管理-->
            <el-submenu index="/calculate">
                <template slot="title">
                    <i class="icon icon-calculate"></i>计量管理
                </template>
                <el-menu-item-group>
                    <template slot="title"></template>
                    <el-menu-item index="/calculate/bills">计量单据</el-menu-item>
                    <el-menu-item index="/calculate/ownerCalculate">业主计量</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <!--报表输出-->
            <el-submenu index="10">
                <template slot="title">
                    <i class="icon icon-export "></i>报表输出
                </template>
                <el-menu-item-group>
                    <el-menu-item index="/dataSheet/payment" ><i class="icon-cart"></i>计量支付</el-menu-item>
                    <el-menu-item index="/dataSheet/modularNum"><i class="icon-integral"></i>构建数量统计</el-menu-item>
                    <el-menu-item index="/dataSheet/meterials"><i class="icon-data"></i>材料数量统计</el-menu-item>
                    <el-menu-item index="/dataSheet/quantities"><i class="icon-iconfont-gcsltj"></i>工程量统计</el-menu-item>
                    <el-menu-item index="/dataSheet/teamsRank"><i class="icon-clxyltj"></i>分包队伍产值数量排名</el-menu-item>
                    <el-menu-item index="/dataSheet/teamsOutPut"><i class="icon-gcclztj"></i>分包队伍结算产值数量</el-menu-item>
                    <el-menu-item index="/dataSheet/planof"><i class="icon-jhzb"></i>计划占比</el-menu-item>
                    <el-menu-item index="/dataSheet/completeof"><i class="icon-wczb"></i>实际完成占比</el-menu-item>
                    <el-menu-item index="/dataSheet/comporeChart"><i class="icon-sldb"></i>数量对比图</el-menu-item>
                    <el-menu-item index="/dataSheet/fabric"><i class="icon-wczb"></i>全栈构造物汇总</el-menu-item>
                    <el-menu-item index="/dataSheet/outputPec"><i class="icon-percent"></i>月完成产值百分比</el-menu-item>
                    <el-menu-item index="/dataSheet/nodeIntervalChar"><i class="icon-lcb"></i>节点延时图</el-menu-item>
                    <el-menu-item index="/dataSheet/processBarChart"><i class="icon-text"></i>分项进度柱状图</el-menu-item>
                </el-menu-item-group>

            </el-submenu>
            <!--分包台账汇总-->
            <el-submenu index="/packLedger">
                <template slot="title">
                    <i class="icon icon-export "></i>分包台账汇总
                </template>
                <el-menu-item-group>
                    <el-menu-item index="/packLedger/packCompactManage" ><i class="icon-cart"></i>分包合同管理台账</el-menu-item>
                    <el-menu-item index="/packLedger/packTeamAccount"><i class="icon-integral"></i>分包队伍工程结算台账</el-menu-item>
                    <el-menu-item index="/packLedger/packProjectGather"><i class="icon-data"></i>分包工程汇总结算台账</el-menu-item>
                    <el-menu-item index="/packLedger/packAccountManage"><i class="icon-iconfont-gcsltj"></i>分包结算（变更）管理台账</el-menu-item>
                    <el-menu-item index="/packLedger/packTeamMaterial"><i class="icon-clxyltj"></i>分包队伍主要材料用量汇总表</el-menu-item>
                    <el-menu-item index="/packLedger/packOutputCom"><i class="icon-gcclztj"></i>各分包队产值完成情况汇总表</el-menu-item>
                    <el-menu-item index="/packLedger/packProjectProcess"><i class="icon-jhzb"></i>分包队工程进度台账</el-menu-item>
                    <el-menu-item index="/packLedger/packProjectAccount"><i class="icon-wczb"></i>分包工程结算会签单</el-menu-item>
                    <el-menu-item index="/packLedger/packTeamOut"><i class="icon-sldb"></i>分包队伍退场申请单（9）</el-menu-item>
                    <el-menu-item index="/packLedger/fabric"><i class="icon-wczb"></i>结算单（10）</el-menu-item>

                </el-menu-item-group>

            </el-submenu>
            <!--变更汇总台账-->
            <el-submenu index="/changeLedger">
                <template slot="title">
                    <i class="icon icon-export "></i>变更汇总台账
                </template>
                <el-menu-item-group>
                    <el-menu-item index="/changeLedger/changeDynamic" ><i class="icon-cart"></i>变更动态汇总</el-menu-item>
                    <el-menu-item index="/changeLedger/projectChange"><i class="icon-integral"></i>工程变更审批单</el-menu-item>
                    <el-menu-item index="/changeLedger/approveProject"><i class="icon-data"></i>已批复工程变更明细表</el-menu-item>

                </el-menu-item-group>

            </el-submenu>
            <!--消息管理-->
            <el-menu-item index="/msgManage">
                <i class="icon icon-msgManage"></i>消息管理
            </el-menu-item>
            <!--材料-->
            <el-submenu index="/materials">
              <template slot="title">
                <i class="icon icon-materials"></i>材料
              </template>
              <el-menu-item-group>
                <template slot="title"></template>
                <el-menu-item index="/materials/materialsMsg">材料供应商信息</el-menu-item>
                <el-menu-item index="/materials/supplier">材料信息</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <!--设备-->
            <el-menu-item index="13">
                <i class="icon icon-facility "></i>设备
            </el-menu-item>
            <!--安全-->
            <el-submenu index="/safety">
            <template slot="title">
              <i class="icon icon-safety"></i>安全
            </template>
            <el-submenu index="14-1">
              <template slot="title">安全资料信息库</template>
              <el-menu-item index="/safety/safetyData">安全生产合同</el-menu-item>
              <el-menu-item index="/safety/safetyContracts">安全培训资料</el-menu-item>
              <el-menu-item index="/safety/assess">安全考核制度</el-menu-item>
              <el-menu-item index="/safety/emergencyPlan">应急预案</el-menu-item>
              <el-menu-item index="/safety/safetyGear">安全组织机构</el-menu-item>
              <el-menu-item index="/safety/safetyDisclosure">安全交底资料</el-menu-item>
              <el-menu-item index="/safety/learningRegistry">违章学习登记表</el-menu-item>
              <el-menu-item index="/safety/safetyPractice">安全技术措施计划</el-menu-item>
              <el-menu-item index="/safety/specialJob">特殊工作安全措施</el-menu-item>
            </el-submenu>

            <el-submenu index="14-2">
              <template slot="title">安全隐患排查</template>
              <el-menu-item index="/safety/safetyCheckList">安全排查表</el-menu-item>
              <el-menu-item index="/safety/safetySubcontractor">分包单位安全隐患排查</el-menu-item>
              <el-menu-item index="/safety/theLaborSecurity">劳务安全隐患排查</el-menu-item>
              <el-menu-item index="/safety/siteSafety">现场安全隐患排查</el-menu-item>
              <el-menu-item index="/safety/setKey">关键点设置</el-menu-item>
            </el-submenu>

            <el-submenu index="14-3">
              <template slot="title">安全监控</template>
              <el-menu-item index="/safety/video">视频资料</el-menu-item>
              <el-menu-item index="/safety/fence">电子围栏</el-menu-item>
            </el-submenu>

            <el-submenu index="14-4">
              <template slot="title">安全巡检</template>
              <el-menu-item index="/safety/dailyCheck">日常巡检</el-menu-item>
              <el-menu-item index="/safety/winterTour">冬季雨季巡检</el-menu-item>
              <el-menu-item index="/safety/selfChecking">自检自查</el-menu-item>
            </el-submenu>

            <el-submenu index="14-5">
              <template slot="title">安全交接</template>
              <el-menu-item index="/safety/startChecking">开工安全检查报告单</el-menu-item>
              <el-menu-item index="/safety/downChecking">停工安全检查报告单</el-menu-item>
              <el-menu-item index="/safety/returnChecking">复工安全检查报告单</el-menu-item>
              <el-menu-item index="/safety/teamSafety">班组安全记录</el-menu-item>
              <el-menu-item index="/safety/concealedWork">隐蔽工程检查报告单</el-menu-item>
              <el-menu-item index="/safety/cosmeticInspect">外观检查</el-menu-item>
            </el-submenu>

            <el-submenu index="14-6">
              <template slot="title">安全评定</template>
              <el-menu-item index="/safety/safeSummary">安全工作总结评比</el-menu-item>
            </el-submenu>

            <el-submenu index="14-7">
              <template slot="title">安全解决方案</template>
              <el-menu-item index="/safety/rectification">整改通知书</el-menu-item>
              <el-menu-item index="/safety/solve">解决方案</el-menu-item>
              <el-menu-item index="/safety/accidentSurvey">安全事故调查处理</el-menu-item>
            </el-submenu>

            <el-menu-item-group>
              <template slot="title"></template>
              <el-menu-item index="/safety/accidentStatistics">事故统计处理报告</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
            <!--质量-->
            <el-submenu index="/quality">
            <template slot="title">
              <i class="icon icon-quality"></i>质量
            </template>
            <el-submenu index="15-1">
              <template slot="title">质量资料信息库</template>
              <el-menu-item index="/quality/qualityTrain">质量培训资料</el-menu-item>
              <el-menu-item index="/quality/qualityAssess">质量考核制度</el-menu-item>
              <el-menu-item index="/quality/assessSystem">安全考核制度</el-menu-item>
              <el-menu-item index="/quality/qualityPlan">应急预案</el-menu-item>
              <el-menu-item index="/quality/qualityTissue">质量组织机构</el-menu-item>
              <el-menu-item index="/quality/qualityExplanation">质量交底</el-menu-item>
            </el-submenu>

            <el-submenu index="15-2">
              <template slot="title">质量隐患排查</template>
              <el-menu-item index="/quality/policy">质量方针</el-menu-item>
              <el-menu-item index="/quality/objective">质量目标</el-menu-item>
              <el-menu-item index="/quality/testing">排查表</el-menu-item>
              <el-menu-item index="/quality/hiddenTrouble">分包单位隐患排查</el-menu-item>
              <el-menu-item index="/quality/labourService">劳务排查</el-menu-item>
              <el-menu-item index="/quality/scene">现场排查</el-menu-item>
              <el-menu-item index="/quality/criticalPoint">关键点设置</el-menu-item>
            </el-submenu>

            <el-submenu index="15-3">
              <template slot="title">质量预控</template>
              <el-menu-item index="/quality/startPreparation">工程项目开工前准备</el-menu-item>
              <el-menu-item index="/quality/divisionToPrepare">分部分项开工前准备</el-menu-item>
              <el-menu-item index="/quality/monsoonSetout">冬、雨季施工准备</el-menu-item>
            </el-submenu>

            <el-submenu index="15-4">
              <template slot="title">质量检查</template>
              <el-menu-item index="/quality/routineInspection">日常检查(工序检查)</el-menu-item>
              <el-menu-item index="/quality/monsoonInspect">冬季雨季检查</el-menu-item>
              <el-menu-item index="/quality/selfInspection">自检自查</el-menu-item>
              <el-submenu index="/quality/">
                <template slot="title">材料质量检查</template>
                <el-menu-item index="/quality/rawMaterial">原材料检查</el-menu-item>
                <el-menu-item index="/quality/semiFinishedProduct">半成品检查</el-menu-item>
                <el-menu-item index="/quality/finalGoods">成品检查</el-menu-item>
              </el-submenu>
              <el-menu-item index="/quality/signOff">交工质量检查</el-menu-item>
              <el-menu-item index="/quality/concealedWorks">隐蔽工程质量检查</el-menu-item>
              <el-menu-item index="/quality/betonRoadWork">混凝土施工质量检查</el-menu-item>
            </el-submenu>

            <el-submenu index="15-5">
              <template slot="title">质量交接</template>
              <el-menu-item index="/quality/shutdownInspection">停工检查报告单</el-menu-item>
              <el-menu-item index="/quality/returnWorkCheck">复工检查报告单</el-menu-item>
              <el-menu-item index="/quality/shiftHandover">班组交接</el-menu-item>
              <el-menu-item index="/quality/hiddenProject">隐蔽工程</el-menu-item>
              <el-menu-item index="/quality/visualInspection">外观检查</el-menu-item>
            </el-submenu>

            <el-submenu index="15-6">
              <template slot="title">质量评定</template>
              <el-menu-item index="/quality/testQuality">质量测验报告</el-menu-item>
              <el-menu-item index="/quality/solveTheQuality">质量解决方案</el-menu-item>
              <el-menu-item index="/quality/qualityProblem">质量问题报告</el-menu-item>
              <el-menu-item index="/quality/qualityAcceptation">质量验收</el-menu-item>
            </el-submenu>
          </el-submenu>
            <!--现场-->
            <el-submenu index="/workField">
            <template slot="title">
              <i class="icon icon-site"></i>现场
            </template>
            <el-menu-item-group>
              <template slot="title"></template>
              <el-menu-item index="/workField/constructionLog">施工日志</el-menu-item>
              <el-menu-item index="/workField/smartDevice">智能设备数据收集</el-menu-item>
              <el-menu-item index="/workField/supervisor">监理签名</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name:'asideNav',
        data(){
            return{
                navHeight:'',
  //            屏幕高度
                screenH:'',
            }
        },
        methods: {
            handleOpen(key, keyPath) {
//                console.log(key, keyPath);
                let nav = document.getElementById('asideNav');
                this.navHeight = document.getElementById('asideNav').clientHeight;
                if (this.navHeight >this.screenH){
//                    document.getElementById("asideNav").style.overflow="scroll";
                }
            },
        },
        mounted(){
            this.screenH = document.body.clientHeight;
            console.log(this.screenH);
            document.getElementById("asideNav").style.height = this.screenH;
            console.log(document.getElementById("asideNav").style.height);
        },

    }

</script>

<style scoped>
    .asideNav{
        width: 240px;
    }
    .asideNav .user{
        color: white;
        font-size: 14px;
        width: 100%;
        height: 42px;
        text-align: center;
        line-height: 42px;
    }

</style>
<style>
    .el-menu-item, .el-submenu__title{
        height: 54px;
    }
    .el-submenu .el-menu-item{
        height:36px;
        line-height: 36px;

    }
    .el-menu-item-group__title{
        padding-top:0;
    }
    /*导入数据的图标*/
    .icon{
      font-family: 'icomoon';
      speak: none;
      font-style: normal;
      font-weight: normal;
      font-variant: normal;
      text-transform: none;
      line-height: 1;
      font-size: 14px;
      margin-right:8px;
    }
    .icon-itemInfo:before {
      content: "\e92c";
    }
    .icon-userInfo:before{
      content: "\e933";
    }
    .icon-message:before{
      content: "\e928";
    }
    .icon-itemPlan:before{
      content:"\e92b"
    }
    .icon-calculate:before{
      content:"\e91d"
    }
    .icon-processCount:before{
      content:"\e92f"
    }
    .icon-home:before{
      content:"\e936"
    }
    .icon-packManage:before{
      content:"\e905"
    }
    .icon-processCounts:before{
      content:"\e903"
    }
    .icon-export:before{
      content:"\e902"
    }
    .icon-msgManage:before{
      content:"\e92d"
    }
    .icon-materials:before{
      content:"\e91a"
    }
    .icon-facility:before{
      content:"\e924"
    }
    .icon-safety:before{
      content:"\e900"
    }
    .icon-quality:before{
      content:"\e937"
    }
    .icon-site:before{
      content:"\e93a"
    }
</style>
