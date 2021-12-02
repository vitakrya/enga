import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import '../node_modules/timeline-vuejs/dist/timeline-vuejs.css'

new Vue({
    router,
    render: (h) => h(App),
}).$mount("#app");
