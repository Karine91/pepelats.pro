<template>
  <div>
    <top-menu v-show="currentRoute !== '/'"></top-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import topMenu from './components/topMenu.vue'
import { router } from './app.js'
export default {
  data(){
    return {
      currentRoute: router.currentRoute.path
    }
  },
  watch: {
    '$route'(to, from){
      this.currentRoute = to.path
    }
  },
  components: {
    topMenu
  }
}
</script>

<style>

</style>
