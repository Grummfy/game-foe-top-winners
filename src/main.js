import { createApp } from 'vue'
import App from './App.vue'

let app = createApp(App)
/*
app.config.errorHandler = function (err, vm, info) {
    // todo handle error in interface
    console.log([err, vm, info])
}
*/

app.mount('#app')

// load css for icons
require('@mdi/font/css/materialdesignicons.css')
// custome css
require('./style/global.css')
