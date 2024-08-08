<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/login">Login</router-link>
      <router-link to="/register">Register</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.btn {
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

.btn-primary {
  background: linear-gradient(45deg, #4CAF50, #66BB6A); /* 渐变背景 */
  color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* 阴影 */
}

.btn-primary:hover {
  background: linear-gradient(45deg, #45a049, #5AA047); /* 悬停时变深 */
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2); /* 悬停时阴影变大 */
}

.btn-secondary {
  background: linear-gradient(45deg, #008CBA, #00B0FF); /* 渐变背景 */
  color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* 阴影 */
}

.btn-secondary:hover {
  background: linear-gradient(45deg, #007bb5, #0091EA); /* 悬停时变深 */
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2); /* 悬停时阴影变大 */
}

body {
 background-image: url('./assets/tutu.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
  margin: 0;
}

nav {
  display: flex;
  gap: 10px;
}
</style>
