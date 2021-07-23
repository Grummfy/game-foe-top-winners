import { createApp } from 'vue'
import App from './App.vue'

let app = createApp(App)
/*
app.config.errorHandler = function (err, vm, info) {
    // todo handle error in interface
    console.log([err, vm, info])
}
*/
app.config.configureWebpack = {
    devtool: 'source-map',
}

if (process.env.CI) {
    app.config.publicPath = '/game-foe-top-winners/';
}

app.mount('#app')

// load css for icons
require('@mdi/font/css/materialdesignicons.css')
// custome css
require('./style/global.css')
