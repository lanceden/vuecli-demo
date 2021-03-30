# vue cli
> javascript template: 新專案範本

# 安裝node.js
 - https://nodejs.org/en/

# 驗證node及npm是否有安裝成功
 - node -v
 - npm -v

# 安裝vue-cli
 - sudo npm install -g @vue/cli

# 確認vue-cli是否有安裝完成
 - vue -V

# vuecli 新建專案
 - vue create 你的專案名稱
 - ex：vue create vuecli-demo

# vscode 安裝套件
 - vetur

# 使用vetur產生vue文件範本
 - vue

# 安裝bootstrap-vue
 - https://bootstrap-vue.org/docs/components/calendar

# package.json設定
 > 新增 --open,意思為在執行為npm run serve後，自動開啟專案網頁
 - "serve": "vue-cli-service serve --open"

# 啟動專案
 - npm run serve

# vue-router   
- npm install vue-router
- 新增router/index.js

```
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import List from '../components/List'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        { path: '/Home', component: Home },
        { path: '/List', component: List },
    ]
})

```

### 於專案中任意資料夾中新增index.js文件，之後import 時會自動引用此文件 
> ex:import router from './router'

# 顯示router-view

```
<div id="app">
    <NavBar msg="首頁" />
    <router-view></router-view>
    <loading :active.sync="$store.state.isLoading"></loading>
  </div>
```

# 路由跳轉設定：router-link 

```
<b-collapse id="nav-collapse" is-nav>
  <b-navbar-nav>
    <b-nav-item href="#">
      <router-link to="/Home">{{msg}}</router-link>
    </b-nav-item>
    <b-nav-item href="#">
      <router-link to="/List">列表</router-link>
    </b-nav-item>
  </b-navbar-nav>
</b-collapse>
```

# Vuex
  - npm install vuex --save
  - state: 狀態
  - actions： 非同步方法調用
  - mutations： 非同步方法調用完成後會自動呼叫對應的muatation方法做狀態更改

  - 新增store資料夾/index.js

  ``` 
  import Vue from 'vue'
  import Vuex from 'vuex'
  import state from './state'
  import actions from './actions'
  import mutations from './mutations'

  Vue.use(Vuex)

  export default new Vuex.Store({
      actions,
      mutations,
      state
  })
  ```

# Axios
 - npm install axios

### 使用Interceptors

```
// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });
```

# 安裝vue-loader-overlay
 - npm install vue-loading-overlay 

# 於main.js引用vue-loading-overlay

```
import Vue from 'vue';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
Vue.component('Loading', Loading)
```

# 於App.vue中新增loading compo
 ```
  <loading :active.sync="$store.state.isLoading"></loading>
 ```

# 於專案中每次請求時都顯示loading,在interceptors request時為顯示，response為隱藏
 ```
  store.dispatch('setIsLoading', true)
 ```