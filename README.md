vue cli

### javascript template: 新專案範本


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

# 安裝bootstrap-vue
 - https://bootstrap-vue.org/docs/components/calendar

# 啟動專案
 - npm run serve

# vue-router   
- npm install vue-router

# Vuex
  - npm install vuex --save
  - state: Vuex管理狀態
  - actions： 非同步方法調用
  - mutations： 狀態更改

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
