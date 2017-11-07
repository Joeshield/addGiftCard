<template>
  <div class="wrap"ref="main">
    <!-- 头部logo和登录中心 -->
    <div class="header">
      <div class="logo">
        <a href="http://www.speedqueen.com.cn/">
          <img src="http://www.speedqueen.com.cn/images/speed-queen-logo.png">
        </a>
      </div>
      <div class="login">
        <a href="#">
          员工中心
        </a>
      </div>
    </div>
    <mt-navbar>
      <mt-tab-item >
        <span @click="toggleActive(true)" :class="{isActive:isCommon}">固定金额礼品卡</span>
      </mt-tab-item>
      <mt-tab-item>
        <span @click="toggleActive(false)" :class="{isActive:isCommon}">自定义金额礼品卡</span>
      </mt-tab-item>
    </mt-navbar>
    <div class="card_nac">
      <!-- 固定金额的礼品卡 -->
      <form action="#" class="fixed_money">
        <!-- 礼品卡详情及添加和删除按钮 -->
        <div class="cardDetail" v-show="isCommon">
          <ul>
            <li class="card_list1">
              <div class="amount">
                <img src="#">
                具体面额大小50
              </div>
              <div class="add">
                <button class="addOne">+</button>
                <button class="reduceOne">-</button>
              </div>
            </li>
            <li class="card_list1">
              <div class="amount">
                <img src="#">
                具体面额大小50
              </div>
              <div class="add">
                <button class="addOne">+</button>
                <button class="reduceOne">-</button>
              </div>
            </li>
            <li class="card_list1">
              <div class="amount">
                <img src="#">
                具体面额大小50
              </div>
              <div class="add">
                <button class="addOne">+</button>
                <button class="reduceOne">-</button>
              </div>
            </li>
          </ul>
        </div>
        <!-- 自定义金额礼品卡 -->
        <div class="todo-container" v-show="!isCommon" >
          <div class="todo-wrap">
            <todo-header :add-todo="addTodo"></todo-header>
            <todo-main :todos="todos" :delete-todo="deleteTodo"></todo-main>
            <todo-footer :todos="todos" @updateTodos="updateTodos"
                         @delete-done="deleteDone"></todo-footer>
          </div>
        </div>
        <!-- 员工填写事由框 -->
        <div class="reasons">
          <div class="reason">事由</div>
          <input type="text"  class="reasonDetail" placeholder="请输入申请礼品卡原因">
        </div>
        <!-- 底部礼品卡申请单  确认申请按钮 -->
        <div class="footer">
          <div class="cardList">
            <router-link to="/cardDetail">已申请卡片详情</router-link>
          </div>
          <div class="config">
            <input type="submit"  value="确认申请" class="confirm">
          </div >
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import todoHeader from './todoHeader.vue'
  import todoMain from './todoMain.vue'
  import todoFooter from './todoFooter.vue'
  import BScroll from 'better-scroll'
  import { Button } from 'mint-ui'
  import { Navbar, TabItem } from 'mint-ui';
  export default {
    data () {
      return {
        todos: [],
        isActive:'active',
        isCommon:true
      }
    },
    methods: {
      toggleActive(isActive){
        this.isCommon = isActive
      },
      //滚动
      _initSctoll(){
        new BScroll(this.$ref.main)
        new BScroll(this.$refs.brandScroll,{
          scrollY:true
        })
      },
      // 添加todo
      addTodo (todo) {
        this.todos.unshift(todo)
      },
      // 删除指定todo
      deleteTodo (todo) {
        var index = this.todos.indexOf(todo)
        this.todos.splice(index, 1)
      },
      // 删除所有完成的todo
      deleteDone () {
        this.todos = this.todos.filter(todo => !todo.isDone)
      },
      // 将所有todo设置为指定状态
      updateTodos (isDone) {
        this.todos.forEach(todo => {
          todo.isDone = isDone
        })
      }
    },
    components: {
      todoHeader,
      todoMain,
      todoFooter
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
  body
  .header
    width 100%
    height 60px
    overflow hidden
    .logo
      width 150px
      float: left
      img
        width 100%
    .login
      float right
      text-align center
      height 50px
      line-height 50px
      margin-right 10px
  .card_nac
    .fixed_money
      .cardDetail

        .isActive
        ul
          margin-top 20px
          .card_list1
            width 100%
            heigh 35px
            text-align center
            line-height 35px
            margin-top 5px
            margin-bottom 5px
            overflow hidden
            .amount
              float: left
              width 60%
              margin-left 40px
              border 1px black solid
            .add
              float left
              width 20%
              margin-left -1px
              border 1px black solid
              .addOne
                width 30px
                height 30px
                border #DBDBDB 1px solid
                border-radius 10px
              .reduceOne
                width 30px
                height 30px
                border #DBDBDB 1px solid
                border-radius 10px
      .todo-container
        width: 600px;
        margin: 0 auto;
      .isActive
        .todo-wrap
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 5px;
  .reasons
    position relative
    width 100%
    height 240px
    text-align:center
    .reason
      position absolute
      left 20px
      top 10px
      width 50px
      height 40px
      line-height 40px
      font-size:1.4em;
      border-radius:4px;
      border:1px solid black;
      color:black;
      text-align center
    .reasonDetail
      position absolute
      top 60px
      left 40px
      width 333px
      height 100px
      box-sizing: border-box;
      text-align:center;
      font-size:1.4em;
      border-radius:4px;
      border:1px solid #c8cccf;
      color:black;
      -web-kit-appearance:none;
      -moz-appearance: none;
      display:block;
      outline:0;
      padding:0 1em;
      text-decoration:none;


  .footer
    position fixed
    bottom 0
    left 0
    width 100%
    overflow hidden
    .cardList
      display inline-block
      width 50%
      height 50px
      border 1px solid black
      border-radius 10px
      text-align center
      line-height 50px
      font-size 25px

    .config
      display inline-block
      width 50%
      height 50px
      border 1px solid black
      border-radius 10px
      margin-top 20px
      margin-bottom 5px
      text-align center
      line-height 50px
      background-color lightblue
      .confirm
        width 100%
        height 50px
        margin-bottom 5px
        line-height 50px
        color black
        font-size 30px
        background-color lightblue


  /*  jo  */
</style>
