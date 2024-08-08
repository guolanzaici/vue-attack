<template>
  <div class="container">
    <div class="form">
      <h2>注册</h2>
      <div class="input-group">
        <label for="name">用户名</label>
        <input type="text" id="name" v-model="name" required>
      </div>
      <div class="input-group">
        <label for="email">邮箱</label>
        <input type="email" id="email" v-model="email" required>
      </div>
      <div class="input-group">
        <label for="password">密码</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <button class="btn btn-primary" @click="register">注册</button>
      <router-link class="link" to="/login">已有账号？登录</router-link>
    </div>
  </div>
</template>

<script>
import { registerUser } from '@/services/userService';

export default {
  data() {
    return {
      nickname: '',
      email: '',
      password: ''
    };
  },
  methods: {
    register() {
      registerUser(this.email, this.nickname, this.password);
      this.$router.push('/login');
    }
  }
};
</script>

<style scoped>
@import '../assets/styles.css';

.btn {
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-register {
  background-color: #008CBA; /* 蓝色背景 */
  color: white;
}

.btn-register:hover {
  background-color: #007bb5; /* 悬停时变深 */
}

.register-container {
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 10px;
  margin: 50px auto;
  width: 80%;
  max-width: 600px;
  text-align: center;
}
</style>
