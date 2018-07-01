<template>
    <div class="topMenu">
        <div class="logo">
            <img src="../assets/img/logo_black.png" alt="">
        </div>
        <div class="menu">
            <router-link to="/vuejs">Vuejs</router-link>
            <router-link to="/cpp">C++</router-link>
            <router-link to="/js">JS</router-link>
            <router-link to="/linux">Linux</router-link>
        </div>
        <div class="auth">
           <router-link to="/auth">ВХОД</router-link> 
        </div>
    </div>
</template>
<script>
export default {
}
</script>
<style lang="stylus"  scoped>
@import '../assets/style/topMenu'
</style>