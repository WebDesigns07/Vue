// import Vue from 'vue/dist/vue'

// var vm = new Vue({
//     el: '#app',
//     data:{
//         message: '哈啰！',
//     },
// });

import Vue from "vue"
import HelloWorld from "../components/HelloWorld.vue"

new Vue({
    render: h => h(HelloWorld)
}).$mount('#app')