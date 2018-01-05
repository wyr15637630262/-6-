
<template>
  <div>
    <m-Breadcrumb mTitle1="订单管理" mTitle2="订单列表"></m-Breadcrumb>
  	<div class="orderList_content">
      <div class="queryOne">
        <div class="query_name"><label>订单编号</label><input type="text"></div>
        <div class="query_date"><label>下单时间</label><input type="date">-<input type="date"></div>
        <div class="query_name"><label>订单状态</label><input type="text"></div>
      </div>
      <div class="queryTwo">
        <div class="query_number"><label>手机号码</label><input type="text"></div>
        <div class="query_store"><label>订单店铺</label><input type="text"></div>
        <div class="query_ensure"><input type="button" value="查询"></div>
      </div>
      <table class="orderList_table">
        <thead>
        <tr>
          <td style="width: 10%">订单编号</td>
          <td style="width: 10%">收货人名称</td>
          <td style="width: 18%">收货人号码</td>
          <td style="width: 18%">登录手机号</td>
          <td style="width: 10%">订单店铺</td>
          <td style="width: 8%">订单金额</td>
          <td style="width: 18%">订单时间</td>
          <td style="width: 8%">状态</td>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>20171212001</td>
          <td>张静静</td>
          <td>15637030262</td>
          <td>13253818501</td>
          <td>文三店</td>
          <td>200</td>
          <td>2017-12-12 19:30</td>
          <td>待付款</td>
        </tr>
        <tr>
          <td>20171212001</td>
          <td>李静静</td>
          <td>15637030262</td>
          <td>13253818501</td>
          <td>文三店</td>
          <td>200</td>
          <td>2017-12-12 19:30</td>
          <td>待付款</td>
        </tr>
        <tr>
          <td>20171212001</td>
          <td>王静静</td>
          <td>15637030262</td>
          <td>13253818501</td>
          <td>文三店</td>
          <td>200</td>
          <td>2017-12-12 19:30</td>
          <td>待付款</td>
        </tr>
        </tbody>
      </table>
      <div class="orderList_page">
        <div class="pages">
          <el-pagination
            :page-size="10"
            layout="prev, pager, next,jumper"
            :total="12"
            @current-change="handleCurrentChange">
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import $ from 'jquery'
  import rq from './../../http/require.js'
  import mBreadcrumb from './../../component/headerTag.vue'
  export default {
    name: 'orderList',
    data () {
      return {
        orderParams: {page: 1, size: 10}, // 订单列表参数
        orderList: [], // 订单列表
        orderListTotal: 10, // 订单总个数
        orderListPageSize: 10, // 每页个数
        pageNumber: ''
      }
    },
    methods: {
      // 改变页码
      handleCurrentChange: function (val) {
//        var that = this
//        that.orderParams.page = val
//        rq.allMember(that.orderParams).then(function (data) {
//          if (data.result === '成功') {
//            console.log(data)
//            that.orderList = data.data.data
//          } else if (data.result === '失败') {
//            that.orderList = []
//          }
//        })
      }
    },
    mounted () {
      var that = this
      rq.allMember(that.orderParams).then(function (data) {
        if (data.result === '成功') {
          console.log(data)
          that.orderList = data.data.data
          that.orderListTotal = data.data.totalRecord
          that.orderListPageSize = data.data.pageSize
        } else if (data.result === '失败') {
          that.orderList = []
        }
      })
    },
    components: {
      mBreadcrumb
    }
  }
</script>
<style>
  .pages .el-pagination .el-pager li.number{
    margin-right: 5px;
    border:1px solid #9c9b9c;
  }
  .pages .el-pagination .el-pager li.number:hover{
    color: #ec6a47;
  }
  .pages .el-pagination button:hover{
    color: #ec6a47;
  }
  .pages .el-pagination .el-pager li.active{
    color: #494d56;
    border:1px solid #494d56;
  }
</style>
<!--引入样式-->
<style lang="scss" scoped>@import "scss/orderList";</style>
