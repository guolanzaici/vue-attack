<template>
  <div class="container">
    <div class="form">
      <h2>登录</h2>
      <div class="input-group">
        <label for="email">邮箱</label>
        <input type="email" id="email" v-model="email" required>
      </div>
      <div class="input-group">
        <label for="password">密码</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <button class="btn btn-primary" @click="login">登录</button>
      <router-link class="link" to="/register">还没有账号？注册</router-link>
    </div>
  </div>
</template>

<script>
import { loginUser } from 'D:/attach/trueweb/src/services/userService';

export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    login() {
      const user = loginUser(this.email, this.password);
      if (user) {
        this.$router.push('/welcome');
      } else {
        alert('邮箱或密码不正确');
      }
    }
  }
};
</script>

<style scoped>
@import 'D:/attach/trueweb/src/assets/styles.css';

.btn {
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-login {
  background-color: #4CAF50; /* 绿色背景 */
  color: white;
}

.btn-login:hover {
  background-color: #45a049; /* 悬停时变深 */
}

.login-container {
  background-color: rgba(255, 255, 255, 0.8); /* 半透明背景以便于阅读 */
  padding: 20px;
  border-radius: 10px;
  margin: 50px auto;
  width: 80%;
  max-width: 600px;
  text-align: center;
}
</style>

