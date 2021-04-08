import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'



Vue.use(Vuetify, {
   iconfont: "md",
   icons: {
      iconfont: 'mdiSvg', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
   },
})

const opts = {}

export default new Vuetify(opts)
