<template>
  <div class="layout">
    <div class="top">
      <div class="logo">
        <img src="../../assets/logo.png" alt="">
        <span>内蒙****项目部</span>
      </div>
    </div>
    <aside-nav></aside-nav>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
    import AsideNav from './asideNav'
    export default {
        name: 'layout',
        components:{
            AsideNav
        },
        data () {
            return {
//      msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .layout{
    width: 100%;
    position: relative;
  }
  .layout> .top{
    width: 100%;
    height: 70px;
    background-color: #324157;
  }
  .layout> .top> .logo{
    width: 300px;
    height: 70px;
    padding-left: 280px;
    line-height: 70px;
    color: #fff;
  }
  .layout> .top> .logo img{
    height: 46px;
  }
  .layout> .top> .logo span{
    margin-left: 20px;
    font-size: 16px;
  }
  .layout .asideNav{
    position:absolute;
    top: 0;
    left: 0;
    box-shadow:1px 0px 2px 1px #000 ;
  }
  .layout .container{
    width: calc(100% - 246px);
    margin-left: 240px;
    padding-left: 6px;
    color:#000;
  }

</style>
