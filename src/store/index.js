import Vue from 'vue'
import Vuex from 'vuex'

import activities from './modules/activities.js'
import search from './modules/search' // 搜索接口
import subject from './modules/subject' // 搜索后查看详情接口
import movie from './modules/movie' // 电影接口
import book from './modules/book' // 图书接口
import userInfo from './modules/userInfo' // 用户信息接口
import group from './modules/group' // 小组信息接口
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    activities,
    search,
    subject,
    movie,
    book,
    userInfo,
    group
  }
})
