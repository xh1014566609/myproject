<template>
  <el-container>
    <!-- 头部 -->
    <el-header
      ><el-row>
        <el-col :span="8"></el-col>
        <el-col :span="8"><h1>电商管理平台</h1></el-col>
        <el-col :span="8"></el-col>
         </el-row
    ></el-header>
    <el-container>
      <!-- 侧边栏 -->
      <el-aside width="200px">Aside</el-aside>
      <!-- 内容 -->
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {};
</script>

<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
  height: 100%;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
  height: 100%;
}
.el-container {
  height: 100%;
}
</style>
