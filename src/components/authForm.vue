<template>
<div>
  <notifications group="auth-notify"
  position="bottom right"
  :speed="500"
  ></notifications>
  <div class="login-wrap">
    <input id="tabInput" type="radio" name="tab" class="sign-in" checked><label for="tabInput" class="tab" @click="showForm(1)">Вход</label>
    <input id="tabRegistration" type="radio" name="tab" class="sign-up"><label for="tabRegistration" class="tab" @click="showForm(2)">Регистрация</label>
    <transition name="component-fade">
      <form class="sign-in-form" v-show="showSignInForm" @submit.prevent="submit">
        <div class="input-group">
          <label for="sign-in-email" class="label">Почта</label>
          <input id="sign-in-email" type="email" class="input" v-model.lazy="model.email">
        </div>
        <div class="input-group">
          <label for="sign-in-pass" class="label">Пароль</label>
          <input id="sign-in-pass" type="password" class="input" data-type="password" v-model.lazy="model.password">
        </div>          
        <button type="submit">ВОЙТИ</button>
        <div class="hr"></div>
        <div class="footer-link">
          <a href="#forgot">Забыли пароль?</a>
        </div>
      </form>
    </transition>
    <transition name="component-fade">
      <form class="sign-up-form" v-show="showSignUpForm" @submit.prevent="submit('reg')">
        <div class="input-group">
          <label for="sign-up-email" class="label">Почта</label>
          <input id="sign-up-email" type="email" class="input" v-model.lazy="model.email">
        </div>
        <div class="input-group">
          <label for="sign-up-pass" class="label">Пароль</label>
          <input id="sign-up-pass" type="password" class="input" data-type="password" v-model.lazy="model.password">
        </div>
        <div class="input-group">
          <label for="sign-up-passrep" class="label">Повторить пароль</label>
          <input id="sign-up-passrep" type="password" class="input" data-type="password" v-model.lazy="model.repassword">
        </div>
        <button type="submit">РЕГИСТРАЦИЯ</button>
        <div class="hr"></div>
        <div class="footer-link">
          <label for="tabInput">Уже зарегестрированы?</label>
        </div>
      </form>
    </transition>
  </div>
</div>
</template>
<script>
import { mapActions } from 'vuex';
import validator from '../system/validators';
export default {
  data() {
    return {
      showSignInForm: true,
      showSignUpForm: false,
      model: {
        email: '',
        password: '',
        repassword: ''
      }
    }
  }, 
  methods: {
    ...mapActions(['auth']),
    showForm(num){
      switch (num) {
        case 1:
          this.showSignInForm = true;
          this.showSignUpForm = false;
          break;
        case 2:
          this.showSignInForm = false;
          this.showSignUpForm = true;
          break;
      }
    },
    submit(key) {
      let valid = validator(this.model, key);
      if (valid.isValid) {
        this.auth(this.model);
      } else {
        let title = "Ошибка ввода данных";
        for (let err in valid.errors){
          this.$notify({
            group: 'auth-notify',
            type: 'error',
            title,
            text: valid.errors[err]
          });
        } 
      }
    }
  }
}
</script>
<style lang='stylus' src='../assets/style/auth.styl' scoped></style>