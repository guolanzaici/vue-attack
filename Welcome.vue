<template>
  <div class="container">
    <div class="form">
      <h2>欢迎</h2>
      <p>hollow</p>
      <div>
        <input v-model="userInput" placeholder="请输入内容">
        <button @click="displayInput">显示内容</button>
      </div>
      <div v-if="displayedInput">
        <h3>用户输入内容：</h3>
        <div v-html="displayedInput"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data() {
    return {
      userInput: '',
      displayedInput: ''
    };
  },
  methods: {
    displayInput() {
      this.displayedInput = this.userInput;
    }
  }
};
</script>

<style scoped>
.container {
  text-align: center;
  margin-top: 50px;
}

.form {
  background: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h2 {
  margin-bottom: 20px;
}

input {
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

h3 {
  margin-top: 20px;
}

div {
  background: #e3e3e3;
  margin: 5px 0;
  padding: 10px;
  border-radius: 5px;
}
</style>