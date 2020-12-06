import Vue from 'vue/dist/vue'
import HelloWorld from '../components/HelloWorld.vue'

var vm = new Vue({
    el: '#app',
    data:{
        message: 'Hello World! 1',
    },
    components:{
        HelloWorld
    }
});