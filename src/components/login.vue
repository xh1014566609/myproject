<template>
  <div class="login">
    <div class="content">
      <el-form
        :model="userObj"
        ref="ruleForm"
        label-width="100px"
        :rules="rules"
        class="demo-ruleForm"
        label-position="top"
      >
        <h2>用户登录</h2>
        {{ userObj }}
        <el-form-item label="账号" prop="username">
          <el-input type="text" v-model="userObj.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="userObj.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="myBtn" @click.prevent="login">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //登录信息
      userObj: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    login() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.$http({
            method: "post",
            url: "http://localhost:8888/api/private/v1/login",
            data: this.userObj,
          })
            .then((res) => {
              let { data, meta } = res.data;
              //跳转到首页
              if (meta.status == 200) {
                this.$message({
                  message: "恭喜你，这是一条成功消息",
                  type: "success",
                });
                this.$router.push("/");

                window.localStorage.setItem("token", data.token);
              } else {
                this.$message.error(meta.msg);
              }
            })
            .catch((err) => {
              console.log(err);
            });
        }
      });
    },
  },
};
</script>

<style lang="">
.login {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #324152;
}
.content {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 580px;
  height: 440px;
  padding: 40px;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 5px;
  margin: 0 auto;
}
.myBtn {
  width: 100%;
}
</style>
