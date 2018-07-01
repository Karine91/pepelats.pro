<template>
    <div class="not-found">
        <img src="../assets/img/logo_black.png" alt="">
        <div class="output">
            <h3>404</h3>
            <div class="ku">
                <a href="#" @click.prevent="showKu">Ку</a>
            </div>
            <transition name="ku-animation">  
                <div class="ku" v-show="kuShow2">
                    <a href="#" @click.prevent="showKu">Ку</a>
                </div>
            </transition>
            <transition name="ku-animation">  
                <div class="ku" v-show="kuShowLast">
                    <router-link to="/vuejs">Ку</router-link>
                </div>
            </transition>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            kuShow2: false,
            kuShowLast: false,
        }
    },
    methods: {
        showKu(){
            if(!this.kuShow2){
                this.kuShow2 = true
            }else{
                this.kuShowLast = true
            }
        }
    }
}
</script>
<style lang="stylus" src="../assets/style/404.styl" scoped></style>