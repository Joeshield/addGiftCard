<template>
<div class="card_detail">
  <div class="back">
    <a href="javascript:history.go(-1)">返回</a>
  </div>
  <div class="detail">
    <div class="cardTitle">已申请礼品卡详情</div>
    <form action="#" class="card_table">
      <div>
        <ul class="card_list">
        <li>
          <div class="amount">
            <img src="#">
            具体面额大小50
          </div>
          <div class="number">
            XX张
          </div>
        </li>
        <li>
          <div class="amount">
            <img src="#">
            具体面额大小50
          </div>
          <div class="number">
            XX张
          </div>
        </li>
        <li>
          <div class="amount">
            <img src="#">
            具体面额大小50
          </div>
          <div class="number">
            XX张
          </div>
        </li>
        <li>
          <div class="amount">
            <img src="#">
            具体面额大小50
          </div>
          <div class="number">
            XX张
          </div>
        </li>
        <li>
          <div class="amount">
            <img src="#">
            具体面额大小50
          </div>
          <div class="number">
            XX张
          </div>
        </li>
        <li>
          <div class="amount">
            <img src="#">
            具体面额大小50
          </div>
          <div class="number">
            XX张
          </div>
        </li>

      </ul>
      </div>
      <div class="config">
        <input type="submit"  value="确认申请" class="confirm">
      </div >

    </form>

  </div>
</div>
</template>

<script>

</script>


<style lang="stylus" rel="stylesheet/stylus">
  .card_detail
    position relative
    width 100%
    .back
      position absolute
      top 10px
      left 20px
      font-size 25px
      color black
    .detail
      position absolute
      top 40px
      width 100%
      .cardTitle
        /*display: inline-block*/
        height 40px
        line-height 40px
        display: flex
        justify-content center
        background #0099cc
        font-size 20px
        color: #000
        margin 5px 0 5px 0
      .card_table
        .card_list
          li
            /*display inline*/
            width 100%
            heigh 35px
            text-align center
            line-height 35px
            margin-top 10px
            overflow hidden
            .amount
              float: left
              width 60%
              margin-left 40px
              border 1px black solid
            .number
              float left
              width 20%
              margin-left -1px
              border 1px black solid

      .config
        display inline-block
        width 50%
        height 50px
        border 1px solid black
        border-radius 10px
        margin-top 20px
        text-align center
        line-height 50px
        background-color lightblue
      .confirm
        width 100%
        height 50px
        line-height 50px
        color black
        font-size 30px
        background-color lightblue


  /* jo */
</style>
