<template>
    <div class="msgManage">
        <div class="msgSearch">
            <el-input placeholder="请输入查询内容"></el-input>
            <el-button type="primary" icon="search">查询</el-button>
        </div>
        <div class="msgCenter">
            <el-tabs type="border-card">
                <el-tab-pane>
                    <span slot="label"><i class="el-icon-message"></i> 新消息提醒</span>
                    <el-collapse accordion>
                        <el-collapse-item>
                            <template slot="title">
                                一致性 Consistency <i class="header-icon el-icon-information"> </i>
                            </template>
                            <div class="sender">
                                <span>发起人：</span>
                                <span>TOM</span>
                            </div>
                            <div class="receiver">
                                <span>收件人：</span>
                                <span>Green</span>
                            </div>
                            <div class="msgContent">
                                <span>内容：</span>
                                <p>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</p>
                            </div>
                        </el-collapse-item>
                        <el-collapse-item>
                            <template slot="title">
                                一致性 Consistency
                            </template>
                            <div class="sender">
                                <span>发起人：</span>
                                <span>TOM</span>
                            </div>
                            <div class="receiver">
                                <span>收件人：</span>
                                <span>Green</span>
                            </div>
                            <div class="msgContent">
                                <span>内容：</span>
                                <p>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</p>
                            </div>
                        </el-collapse-item>
                    </el-collapse>
                </el-tab-pane>
                <el-tab-pane>
                    <span slot="label"><i class="el-icon-time"> 形象进度计划提醒</i></span>
                    <el-collapse accordion>
                        <el-collapse-item>
                            <template slot="title">
                                进度提醒消息 <i class="header-icon el-icon-information"> </i>
                            </template>
                            <div class="planTask">
                                <span>今日计划开工项：</span>
                                <span>#103洞4-301米</span>
                            </div>
                            <div class="comTask">
                                <span>今日计划完成数量：</span>
                                <span>1个工程计划</span>
                            </div>
                        </el-collapse-item>
                    </el-collapse>

                </el-tab-pane>
                <el-tab-pane>
                    <span slot="label"><i class="el-icon-edit"> 待处理消息</i></span>
                    <el-collapse accordion>
                        <el-collapse-item>
                            <template slot="title">
                                一致性 Consistency <i class="header-icon el-icon-information"> </i>
                            </template>
                            <div class="sender">
                                <span>发起人：</span>
                                <span>TOM</span>
                            </div>
                            <div class="receiver">
                                <span>收件人：</span>
                                <span>Green</span>
                            </div>
                            <div class="msgContent">
                                <span>内容：</span>
                                <p>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</p>
                            </div>
                        </el-collapse-item>
                        <el-collapse-item>
                            <template slot="title">
                                一致性 Consistency
                            </template>
                            <div class="sender">
                                <span>发起人：</span>
                                <span>TOM</span>
                            </div>
                            <div class="receiver">
                                <span>收件人：</span>
                                <span>Green</span>
                            </div>
                            <div class="msgContent">
                                <span>内容：</span>
                                <p>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</p>
                            </div>
                        </el-collapse-item>
                    </el-collapse>
                </el-tab-pane>
                <el-tab-pane>
                    <span slot="label"><i class="el-icon-check"> 已处理消息</i></span>
                    <el-collapse accordion>
                        <el-collapse-item>
                            <template slot="title">
                                一致性 Consistency
                            </template>
                            <div class="sender">
                                <span>发起人:</span>
                                <span>TOM</span>
                            </div>
                            <div class="receiver">
                                <span>收件人：</span>
                                <span>Green</span>
                            </div>
                            <div class="msgContent">
                                <span>内容：</span>
                                <p>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</p>
                            </div>
                            <div class="result">
                                <span>处理结果：</span>
                                <p>不能通过</p>
                            </div>
                        </el-collapse-item>
                    </el-collapse>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<style>
    .msgSearch{
        padding-top: 20px;
        box-sizing: border-box;
        margin-left: 20px;
    }
    .msgSearch .el-input, .msgSearch .el-input__inner{
        width: 200px;
    }
    .msgSearch .el-button{
        padding: 8px 15px;
    }
    .msgCenter{
        margin-top: 20px;
        margin-left: 20px;
    }
    .result p{
        color: #ff6b62;
    }
    .sender >span:last-child{
        color: #76acff;
    }
    .receiver >span:last-child{
        color: #58c497;
    }
</style>