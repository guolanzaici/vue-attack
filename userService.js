// src/services/userService.js

const USER_KEY = 'users';

export function registerUser(email, nickname, password) {
    let users = JSON.parse(localStorage.getItem(USER_KEY)) || [];
    const user = { email, nickname, password };
    users.push(user);
    localStorage.setItem(USER_KEY, JSON.stringify(users));
}

export function loginUser(email, password) {
    let users = JSON.parse(localStorage.getItem(USER_KEY)) || [];
    return users.find(user => user.email === email && user.password === password);
}