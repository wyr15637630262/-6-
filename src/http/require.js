/**
 * require Js 文件
 * @JsName require
 * @Description
 * @DateTime 2017/12/4 9:31
 * @author 亚茹
 */
const axios = require('axios')
const Q = require('q')
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8'
axios.defaults.withCredentials = true
module.exports = {
  u: 'http://10.0.0.4:8888/',
  // 1、会员
  // 1.1 会员列表
  allMember: function (data) {
    var deferred = Q.defer()
    axios({
      method: 'POST',
      url: this.u + 'api/member/obtainMemberList',
      headers: {'Authorization': '', 'Content-Type': 'application/json;charset=utf-8'},
      data: {'page': data.page, 'size': data.size}
    }).then(function (response) {
      deferred.resolve(response.data)
    }).catch(function (error) {
      console.log(error)
    })
    return deferred.promise
  },
  // 2 商品标签
  // 2.1 所有标签
  searchAllTag: function (data) {
    var deferred = Q.defer()
    axios({
      method: 'POST',
      url: this.u + 'api/product/obtainLabel',
      headers: {'Authorization': '', 'Content-Type': 'application/json;charset=utf-8'},
      data: {'size': data.size, 'page': data.page, 'isRecycled': data.isRecycled}
    }).then(function (response) {
      deferred.resolve(response.data)
    }).catch(function (error) {
      console.log(error)
    })
    return deferred.promise
  },
  // 2.2根据标签名查找
  searchByLabeiName: function (data) {
    var deferred = Q.defer()
    axios({
      method: 'POST',
      url: this.u + 'api/product/obtainLabelByLabelName',
      headers: {'Authorization': '', 'Content-Type': 'application/json;charset=utf-8'},
      data: {'labelName': data.labelName, 'isRecycled': data.isRecycled, 'page': data.page, 'size': data.size}
    }).then(function (response) {
      deferred.resolve(response.data)
    }).catch(function (error) {
      console.log(error)
    })
    return deferred.promise
  },
  // 2.2 标签移入回收站（暂时删除标签）
  removeTagRubbish: function (data) {
    var deferred = Q.defer()
    axios({
      method: 'POST',
      url: this.u + 'api/product/removeToRecycled',
      headers: {'Authorization': '', 'Content-Type': 'application/json;charset=utf-8'},
      data: {'id': data}
    }).then(function (response) {
      deferred.resolve(response.data)
    }).catch(function (error) {
      console.log(error)
    })
    return deferred.promise
  },
  // 2.3 在回收站中彻底删除标签
  removeTag: function (data) {
    var deferred = Q.defer()
    axios({
      method: 'POST',
      url: this.u + 'api/product/removeLabel',
      headers: {'Authorization': '', 'Content-Type': 'application/json;charset=utf-8'},
      data: {'id': data}
    }).then(function (response) {
      deferred.resolve(response.data)
    }).catch(function (error) {
      console.log(error)
    })
    return deferred.promise
  },
  // 2.4 标签移出回收站（恢复）
  backTag: function (data) {
    var deferred = Q.defer()
    axios({
      method: 'POST',
      url: this.u + 'api/product/resumeFromRecycled',
      headers: {'Authorization': '', 'Content-Type': 'application/json;charset=utf-8'},
      data: {'id': data}
    }).then(function (response) {
      deferred.resolve(response.data)
    }).catch(function (error) {
      console.log(error)
    })
    return deferred.promise
  },
  // 2.5 验证标签是否存在
  checkTagName: function (data) {
    var deferred = Q.defer()
    axios({
      method: 'POST',
      url: this.u + 'api/product/verifyLabel',
      headers: {'Authorization': '', 'Content-Type': 'application/json;charset=utf-8'},
      data: {'labelName': data}
    }).then(function (response) {
      deferred.resolve(response.data)
    }).catch(function (error) {
      console.log(error)
    })
    return deferred.promise
  },
  // 2.6 添加标签（新增）
  addTag: function (data) {
    var deferred = Q.defer()
    axios({
      method: 'POST',
      url: this.u + 'api/product/increaseLabel',
      headers: {'Authorization': '', 'Content-Type': 'application/json;charset=utf-8'},
      data: {'labelName': data.labelName, 'sortPriority': data.sortPriority}
    }).then(function (response) {
      deferred.resolve(response.data)
    }).catch(function (error) {
      console.log(error)
    })
    return deferred.promise
  },
  // 2.7 修改标签（编辑）
  reviseTag: function (data) {
    var deferred = Q.defer()
    axios({
      method: 'POST',
      url: this.u + 'api/product/modifyLabel',
      headers: {'Authorization': '', 'Content-Type': 'application/json;charset=utf-8'},
      data: {'id': data.id, 'labelName': data.labelName, 'sortPriority': data.sortPriority}
    }).then(function (response) {
      deferred.resolve(response.data)
    }).catch(function (error) {
      console.log(error)
    })
    return deferred.promise
  },
  // 3 商品类别
  // 3.1 商品所有类别
  searchAllCategory: function (data) {
    var deferred = Q.defer()
    axios({
      method: 'POST',
      url: this.u + 'api/product/obtainProductCategoryList',
      headers: {'Authorization': '', 'Content-Type': 'application/json;charset=utf-8'},
      data: {
        'category': {
          'isRecycled': data.isRecycled
        },
        'page': data.page,
        'size': data.size
      }
    }).then(function (response) {
      deferred.resolve(response.data)
    }).catch(function (error) {
      console.log(error)
    })
    return deferred.promise
  },
  // 3.2 根据类别Id查看类别信息
  obtainById: function (data) {
    var deferred = Q.defer()
    axios({
      method: 'POST',
      url: this.u + 'api/product/obtainCategoryById',
      headers: {'Authorization': '', 'Content-Type': 'application/json;charset=utf-8'},
      data: {'id': data}
    }).then(function (response) {
      deferred.resolve(response.data)
    }).catch(function (error) {
      console.log(error)
    })
    return deferred.promise
  },
  // 3.3 根据父级类别Id查看类别
  obtainByParentId: function (data) {
    var deferred = Q.defer()
    axios({
      method: 'POST',
      url: this.u + 'api/product/obtainCategoryByParentId',
      headers: {'Authorization': '', 'Content-Type': 'application/json;charset=utf-8'},
      data: {'parentId': data}
    }).then(function (response) {
      deferred.resolve(response.data)
    }).catch(function (error) {
      console.log(error)
    })
    return deferred.promise
  },
  // 3.4 校验类别
  checkCategory: function (data) {
    var deferred = Q.defer()
    axios({
      method: 'POST',
      url: this.u + 'api/product/verifyProductCategory',
      headers: {'Authorization': '', 'Content-Type': 'application/json;charset=utf-8'},
      data: {
        'category': {
          'categoryName': data
        }
      }
    }).then(function (response) {
      deferred.resolve(response.data)
    }).catch(function (error) {
      console.log(error)
    })
    return deferred.promise
  },
  // 3.5 添加类别
  addCategory: function (data) {
    var deferred = Q.defer()
    axios({
      method: 'POST',
      url: this.u + 'api/product/increaseProductCategory',
      headers: {'Authorization': '', 'Content-Type': 'application/json;charset=utf-8'},
      data: {
        'category': {
          'categoryName': data.categoryName,
          'sortPriority': data.sortPriority,
          'isRecycled': data.isRecycled,
          'pictureId': data.pictureId,
          'parentId': data.parentId
        }
      }
    }).then(function (response) {
      deferred.resolve(response.data)
    }).catch(function (error) {
      console.log(error)
    })
    return deferred.promise
  },
  // 3.6 修改类别
  modifyCategory: function (data) {
    var deferred = Q.defer()
    axios({
      method: 'POST',
      url: this.u + 'api/product/modifyProductCategory',
      headers: {'Authorization': '', 'Content-Type': 'application/json;charset=utf-8'},
      data: {
        'category': {
          'id': data.id,
          'categoryName': data.categoryName,
          'sortPriority': data.sortPriority,
          'isRecycled': data.isRecycled,
          'isParent': data.isParent,
          'parentId': data.parentId
        }

      }
    }).then(function (response) {
      deferred.resolve(response.data)
    }).catch(function (error) {
      console.log(error)
    })
    return deferred.promise
  },
  // 3.7 删除类别（彻底删除）
  removeCategory: function (data) {
    var deferred = Q.defer()
    axios({
      method: 'POST',
      url: this.u + 'api/product/removeProductCategory',
      headers: {'Authorization': '', 'Content-Type': 'application/json;charset=utf-8'},
      data: {
        'category': {
          'id': data
        }
      }
    }).then(function (response) {
      deferred.resolve(response.data)
    }).catch(function (error) {
      console.log(error)
    })
    return deferred.promise
  },
  // 3.8 移入回收站
  removeCategoryRecycle: function (data) {
    var deferred = Q.defer()
    axios({
      method: 'POST',
      url: this.u + 'api/product/increaseCategoryRecycle',
      headers: {'Authorization': '', 'Content-Type': 'application/json;charset=utf-8'},
      data: {
        'category': {
          'id': data
        }
      }
    }).then(function (response) {
      deferred.resolve(response.data)
    }).catch(function (error) {
      console.log(error)
    })
    return deferred.promise
  },
  // 3.9 回收站恢复
  backCategory: function (data) {
    var deferred = Q.defer()
    axios({
      method: 'POST',
      url: this.u + 'api/product/removeCategoryRecycle',
      headers: {'Authorization': '', 'Content-Type': 'application/json;charset=utf-8'},
      data: {
        'category': {
          'id': data
        }
      }
    }).then(function (response) {
      deferred.resolve(response.data)
    }).catch(function (error) {
      console.log(error)
    })
    return deferred.promise
  },

  // 4店铺信息
  // 4.1 获取店铺列表
  obtainStoreList: function (data) {
    var deferred = Q.defer()
    axios({
      method: 'POST',
      url: this.u + 'api/branch/obtainBranchsByCondition',
      headers: {'Authorization': '', 'Content-Type': 'application/json;charset=utf-8'},
      data: {
        'branchInfo': {
          'groupId': data.groupId,
          'status': data.status,
          'branchName': data.branchName,
          'property': data.property,
          'branchType': data.branchType,
          'district': data.district,
          'manageMode': data.manageMode
        },
        'size': data.size,
        'page': data.page,
        'sortingParam': [{'propertyName': data.propertyName, 'sortingManner': 'desc'}]
      }
    }).then(function (response) {
      deferred.resolve(response.data)
    }).catch(function (error) {
      console.log(error)
    })
    return deferred.promise
  },
  // 4.2 删除店铺列表
  removeStoreList: function (data) {
    var deferred = Q.defer()
    axios({
      method: 'POST',
      url: this.u + 'api/branch/removeBranch',
      headers: {'Authorization': '', 'Content-Type': 'application/json;charset=utf-8'},
      data: [data.id]
    }).then(function (response) {
      deferred.resolve(response.data)
    }).catch(function (error) {
      console.log(error)
    })
    return deferred.promise
  },
  // 4.3 添加店铺列表
  increaseStoreList: function (data) {
    var deferred = Q.defer()
    axios({
      method: 'POST',
      url: this.u + 'api/branch/increaseBranch',
      headers: {'Authorization': '', 'Content-Type': 'application/json;charset=utf-8'},
      data: {
        branchInfo: {
          groupId: data.groupId,
          status: data.status,
          branchName: data.branchName,
          branchCode: data.branchCode,
          property: data.property,
          acreage: data.acreage,
          reservePrice: data.reservePrice,
          branchType: data.branchType,
          district: data.district,
          manageMode: data.manageMode,
          sortOrder: data.sortOrder,
          openingTime: data.openingTime,
          endTime: data.endTime,
          branchDes: data.branchDes
        },
        address: {
          province: data.province,
          city: data.city,
          area: data.area,
          areaVillage: data.areaVillage,
          detailAddress: data.detailAddress
        }
      }
    }).then(function (response) {
      deferred.resolve(response.data)
    }).catch(function (error) {
      console.log(error)
    })
    return deferred.promise
  },
  // 4.4 修改店铺列表
  modifyStoreList: function (data) {
    var deferred = Q.defer()
    axios({
      method: 'POST',
      url: this.u + 'api/branch/modifyBranch',
      headers: {'Authorization': '', 'Content-Type': 'application/json;charset=utf-8'},
      data: {
        branchInfo: {
          id: data.id,
          groupId: data.groupId,
          status: data.status,
          branchName: data.branchName,
          branchCode: data.branchCode,
          property: data.property,
          acreage: data.acreage,
          reservePrice: data.reservePrice,
          branchType: data.branchType,
          district: data.district,
          manageMode: data.manageMode,
          sortOrder: data.sortOrder,
          openingTime: data.openingTime,
          endTime: data.endTime,
          branchDes: data.branchDes
        },
        address: {
          province: data.province,
          city: data.city,
          area: data.area,
          areaVillage: data.areaVillage,
          detailAddress: data.detailAddress
        }
      }
    }).then(function (response) {
      deferred.resolve(response.data)
    }).catch(function (error) {
      console.log(error)
    })
    return deferred.promise
  },
  // 4.5 查询店铺
  checkStoreList: function (data) {
    var deferred = Q.defer()
    axios({
      method: 'POST',
      url: this.u + 'api/branch/obtainBranchsByCondition',
      headers: {'Authorization': '', 'Content-Type': 'application/json;charset=utf-8'},
      data: {
        'branchInfo': {
          branchName: data.branchName
        },
        'page': data.page,
        'size': data.size
      }
    }).then(function (response) {
      deferred.resolve(response.data)
    }).catch(function (error) {
      console.log(error)
    })
    return deferred.promise
  },
  // 配送小区
  // 获取店铺配送的小区
  obtainArea: function (data) {
    var deferred = Q.defer()
    axios({
      method: 'POST',
      url: this.u + 'api/branch/obtainAreaByBranchId',
      headers: {'Authorization': '', 'Content-Type': 'application/json;charset=utf-8'},
      data: {
        branchId: data
      }
    }).then(function (response) {
      deferred.resolve(response.data)
    }).catch(function (error) {
      console.log(error)
    })
    return deferred.promise
  },
  // 添加小区
  increaseArea: function (data) {
    var deferred = Q.defer()
    axios({
      method: 'POST',
      url: this.u + 'api/branch/increaseArea',
      headers: {'Authorization': '', 'Content-Type': 'application/json;charset=utf-8'},
      data: {
        'branchId': data.branchId,
        'areaInfo': {
          'areaName': data.areaName
        }
      }
    }).then(function (response) {
      deferred.resolve(response.data)
    }).catch(function (error) {
      console.log(error)
    })
    return deferred.promise
  },
  // 修改小区
  modifyArea: function (data) {
    var deferred = Q.defer()
    axios({
      method: 'POST',
      url: this.u + 'api/branch/modifyArea',
      headers: {'Authorization': '', 'Content-Type': 'application/json;charset=utf-8'},
      data: {
        'areaInfo': {
          'id': data.id,
          'areaName': data.areaName
        }
      }
    }).then(function (response) {
      deferred.resolve(response.data)
    }).catch(function (error) {
      console.log(error)
    })
    return deferred.promise
  },
  // 删除小区
  removeArea: function (data) {
    var deferred = Q.defer()
    axios({
      method: 'POST',
      url: this.u + 'api/branch/removeArea',
      headers: {'Authorization': '', 'Content-Type': 'application/json;charset=utf-8'},
      data: [data]
    }).then(function (response) {
      deferred.resolve(response.data)
    }).catch(function (error) {
      console.log(error)
    })
    return deferred.promise
  },
  // 5店铺分组
  // 5.1 获取店铺分组
  obtainStoreGroupList: function (data) {
    var deferred = Q.defer()
    axios({
      method: 'POST',
      url: this.u + 'api/branch/obtainBranchGroupsByCondition',
      headers: {'Authorization': '', 'Content-Type': 'application/json;charset=utf-8'},
      data: {'page': data.page, 'size': data.size}
    }).then(function (response) {
      deferred.resolve(response.data)
    }).catch(function (error) {
      console.log(error)
    })
    return deferred.promise
  },
  // 5.2 删除店铺分组
  removeStoreGroupList: function (data) {
    var deferred = Q.defer()
    axios({
      method: 'POST',
      url: this.u + 'api/branch/removeBranchGroup',
      headers: {'Authorization': '', 'Content-Type': 'application/json;charset=utf-8'},
      data: [data.id]
    }).then(function (response) {
      deferred.resolve(response.data)
    }).catch(function (error) {
      console.log(error)
    })
    return deferred.promise
  },
  // 5.3 添加店铺分组
  addStoreGroupList: function (data) {
    var deferred = Q.defer()
    axios({
      method: 'POST',
      url: this.u + 'api/branch/increaseBranchGroup',
      headers: {'Authorization': '', 'Content-Type': 'application/json;charset=utf-8'},
      data: {
        branchGroupInfo: {
          groupName: data.groupName,
          memo: data.memo
        }
      }
    }).then(function (response) {
      deferred.resolve(response.data)
    }).catch(function (error) {
      console.log(error)
    })
    return deferred.promise
  },
  // 5.4 修改店铺分组
  modifyStoreGroupList: function (data) {
    var deferred = Q.defer()
    axios({
      method: 'POST',
      url: this.u + 'api/branch/modifyBranchGroup',
      headers: {'Authorization': '', 'Content-Type': 'application/json;charset=utf-8'},
      data: {
        branchGroupInfo: {
          id: data.id,
          groupName: data.groupName,
          memo: data.memo
        }
      }
    }).then(function (response) {
      deferred.resolve(response.data)
    }).catch(function (error) {
      console.log(error)
    })
    return deferred.promise
  },
  // 5.5 查询店铺分组
  checkStoreGroupList: function (data) {
    var deferred = Q.defer()
    axios({
      method: 'POST',
      url: this.u + 'api/branch/obtainBranchGroupsByCondition',
      headers: {'Authorization': '', 'Content-Type': 'application/json;charset=utf-8'},
      data: {
        'page': data.page,
        'size': data.size,
        'sortingParam': [{'propertyName': data.groupName, 'sortingManner': data.sorting}]
      }
    }).then(function (response) {
      deferred.resolve(response.data)
    }).catch(function (error) {
      console.log(error)
    })
    return deferred.promise
  },
  // 6 图片de分组
  obtainPictureGroupList: function (data) {
    var deferred = Q.defer()
    axios({
      method: 'POST',
      url: this.u + 'api/product/obtainPictureGroupList',
      headers: {'Authorization': '', 'Content-Type': 'application/json;charset=utf-8'},
      data: {'page': data.page, 'size': data.size}
    }).then(function (response) {
      deferred.resolve(response.data)
    }).catch(function (error) {
      console.log(error)
    })
    return deferred.promise
  },
  // 7 分组图片
  obtainPictureList: function (data) {
    var deferred = Q.defer()
    axios({
      method: 'POST',
      url: this.u + 'api/product/obtainPictureList',
      headers: {'Authorization': '', 'Content-Type': 'application/json;charset=utf-8'},
      data: {'groupId': data.groupId, 'isRecycled': data.isRecycled, 'page': data.page, 'size': data.size}
    }).then(function (response) {
      deferred.resolve(response.data)
    }).catch(function (error) {
      console.log(error)
    })
    return deferred.promise
  },
  // 8 商品规格
  // 8.1 查看所有的规格
  obtainAllSpec: function (data) {
    var deferred = Q.defer()
    axios({
      method: 'POST',
      url: this.u + 'api/product/obtainSpecList',
      headers: {'Authorization': '', 'Content-Type': 'application/json;charset=utf-8'},
      data: {'isRecycled': data.isRecycled, 'page': data.page, 'size': data.size}
    }).then(function (response) {
      deferred.resolve(response.data)
    }).catch(function (error) {
      console.log(error)
    })
    return deferred.promise
  },
  // 8.2 查询规格
  searchSpec: function (data) {
    var deferred = Q.defer()
    axios({
      method: 'POST',
      url: this.u + 'api/product/obtainSpecBySpecName',
      headers: {'Authorization': '', 'Content-Type': 'application/json;charset=utf-8'},
      data: {'specName': data.specName, 'isRecycled': data.isRecycled, 'page': data.page, 'size': data.size}
    }).then(function (response) {
      deferred.resolve(response.data)
    }).catch(function (error) {
      console.log(error)
    })
    return deferred.promise
  },
  // 8.3 添加规格
  addSpec: function (data) {
    var deferred = Q.defer()
    axios({
      method: 'POST',
      url: this.u + 'api/product/increaseSpec',
      headers: {'Authorization': '', 'Content-Type': 'application/json;charset=utf-8'},
      data: {'specName': data.specName, 'categoryId': data.categoryId, 'sortPriority': data.sortPriority, 'parentId': data.parentId}
    }).then(function (response) {
      deferred.resolve(response.data)
    }).catch(function (error) {
      console.log(error)
    })
    return deferred.promise
  },
  // 8.4 修改规格
  modifySpec: function (data) {
    var deferred = Q.defer()
    axios({
      method: 'POST',
      url: this.u + 'api/product/modifySpec',
      headers: {'Authorization': '', 'Content-Type': 'application/json;charset=utf-8'},
      data: {'id': data.id, 'specName': data.specName, 'sortPriority': data.sortPriority}
    }).then(function (response) {
      deferred.resolve(response.data)
    }).catch(function (error) {
      console.log(error)
    })
    return deferred.promise
  },
  // 8.5 校验规格
  verifySpec: function (data) {
    var deferred = Q.defer()
    axios({
      method: 'POST',
      url: this.u + 'api/product/verifySpec',
      headers: {'Authorization': '', 'Content-Type': 'application/json;charset=utf-8'},
      data: {'specName': data.specName, 'categoryId': data.categoryId}
    }).then(function (response) {
      deferred.resolve(response.data)
    }).catch(function (error) {
      console.log(error)
    })
    return deferred.promise
  },
  // 8.6 删除规格(彻底删除)
  removeSpec: function (data) {
    var deferred = Q.defer()
    axios({
      method: 'POST',
      url: this.u + 'api/product/removeSpec',
      headers: {'Authorization': '', 'Content-Type': 'application/json;charset=utf-8'},
      data: {'id': data}
    }).then(function (response) {
      deferred.resolve(response.data)
    }).catch(function (error) {
      console.log(error)
    })
    return deferred.promise
  },
  // 8.7 移入回收站
  increaseSpecRecycle: function (data) {
    var deferred = Q.defer()
    axios({
      method: 'POST',
      url: this.u + 'api/product/increaseSpecRecycle',
      headers: {'Authorization': '', 'Content-Type': 'application/json;charset=utf-8'},
      data: {'id': data}
    }).then(function (response) {
      deferred.resolve(response.data)
    }).catch(function (error) {
      console.log(error)
    })
    return deferred.promise
  },
  // 8.8 恢复
  removeSpecRecycle: function (data) {
    var deferred = Q.defer()
    axios({
      method: 'POST',
      url: this.u + 'api/product/removeSpecRecycle',
      headers: {'Authorization': '', 'Content-Type': 'application/json;charset=utf-8'},
      data: {'id': data}
    }).then(function (response) {
      deferred.resolve(response.data)
    }).catch(function (error) {
      console.log(error)
    })
    return deferred.promise
  },
  // 8.9根据规格id查看规格参数
  searchAllSpecParam: function (data) {
    var deferred = Q.defer()
    axios({
      method: 'POST',
      url: this.u + 'api/product/obtainSpecParamList',
      headers: {'Authorization': '', 'Content-Type': 'application/json;charset=utf-8'},
      data: { 'specId': data.specId, 'page': data.page, 'size': data.size }
    }).then(function (response) {
      deferred.resolve(response.data)
    }).catch(function (error) {
      console.log(error)
    })
    return deferred.promise
  },
  // 8.10添加规格参数
  addSpecParam: function (data) {
    var deferred = Q.defer()
    axios({
      method: 'POST',
      url: this.u + 'api/product/increaseSpecParam',
      headers: {'Authorization': '', 'Content-Type': 'application/json;charset=utf-8'},
      data: {'parameter': data.parameter, 'specId': data.specId}
    }).then(function (response) {
      deferred.resolve(response.data)
    }).catch(function (error) {
      console.log(error)
    })
    return deferred.promise
  },
  // 8.11修改规格参数
  reviseSpecParam: function (data) {
    var deferred = Q.defer()
    axios({
      method: 'POST',
      url: this.u + 'api/product/modifySpecParam',
      headers: {'Authorization': '', 'Content-Type': 'application/json;charset=utf-8'},
      data: {'id': data.id, 'parameter': data.parameter, 'specId': data.specId}
    }).then(function (response) {
      deferred.resolve(response.data)
    }).catch(function (error) {
      console.log(error)
    })
    return deferred.promise
  },
  // 8.12删除规格参数
  removeSpecParam: function (data) {
    var deferred = Q.defer()
    axios({
      method: 'POST',
      url: this.u + 'api/product/removeSpecParam',
      headers: {'Authorization': '', 'Content-Type': 'application/json;charset=utf-8'},
      data: {'id': data}
    }).then(function (response) {
      deferred.resolve(response.data)
    }).catch(function (error) {
      console.log(error)
    })
    return deferred.promise
  },
  // 8.13验证规格参数
  checkSpecParameter: function (data) {
    var deferred = Q.defer()
    axios({
      method: 'POST',
      url: this.u + 'api/product/verifySpecParam',
      headers: {'Authorization': '', 'Content-Type': 'application/json;charset=utf-8'},
      data: {'parameter': data.parameter, 'specId': data.specId}
    }).then(function (response) {
      deferred.resolve(response.data)
    }).catch(function (error) {
      console.log(error)
    })
    return deferred.promise
  },
  // 8.14关键字查找规格参数(模糊查询)
  checkWordSpecParam: function (data) {
    var deferred = Q.defer()
    axios({
      method: 'POST',
      url: this.u + 'api/product/obtainSpecParamByParameter',
      headers: {'Authorization': '', 'Content-Type': 'application/json;charset=utf-8'},
      data: {'specId': data.specId, 'parameter': data.parameter, 'page': data.page, 'size': data.size}
    }).then(function (response) {
      deferred.resolve(response.data)
    }).catch(function (error) {
      console.log(error)
    })
    return deferred.promise
  },
  // 9 商品库
  // 9.1 查询商品列表
  obtainProductList: function (data) {
    var deferred = Q.defer()
    axios({
      method: 'POST',
      url: this.u + 'api/bProduct/obtainProductList',
      headers: {'Authorization': '', 'Content-Type': 'application/json;charset=utf-8'},
      data: {
        'product': {
          categoryId: data.categoryId,
          isRecycled: data.isRecycled
        },
        size: data.size,
        page: data.page,
        sortingParam: [{'propertyName': data.propertyName, 'sortingManner': 'desc'}]
      }
    }).then(function (response) {
      deferred.resolve(response.data)
    }).catch(function (error) {
      console.log(error)
    })
    return deferred.promise
  },
  // 9.2 修改商品
  modifyProductList: function (data) {
    var deferred = Q.defer()
    axios({
      method: 'POST',
      url: this.u + 'api/bProduct/modifyProduct',
      headers: {'Authorization': '', 'Content-Type': 'application/json;charset=utf-8'},
      data: {
        'product': {
          categoryId: data.categoryId
        },
        size: data.size,
        page: data.page,
        sortingParam: [{'propertyName': data.propertyName, 'sortingManner': 'desc'}]
      }
    }).then(function (response) {
      deferred.resolve(response.data)
    }).catch(function (error) {
      console.log(error)
    })
    return deferred.promise
  },
  // 9.3 添加商品
  increaseProductList: function (data) {
    var deferred = Q.defer()
    axios({
      method: 'POST',
      url: this.u + 'api/bProduct/increaseProduct',
      headers: {'Authorization': '', 'Content-Type': 'application/json;charset=utf-8'},
      data: {
        'product': {
          categoryId: data.categoryId,
          productName: data.productName,
          productCode: data.productCode,
          productSold: data.productSold,
          sortPriority: data.sortPriority,
          isRecycled: 1,
          productStatus: data.productStatus,
          originalPrice: data.originalPrice,
          memberPrice: data.memberPrice
        },
        pictureIds: data.pictureIds
      }
    }).then(function (response) {
      deferred.resolve(response.data)
    }).catch(function (error) {
      console.log(error)
    })
    return deferred.promise
  },
  // 9.4 发布商品
  // 9.5 移入回收站
  removeToRecycled: function (data) {
    var deferred = Q.defer()
    axios({
      method: 'POST',
      url: this.u + 'api/bProduct/removeToRecycled',
      headers: {'Authorization': '', 'Content-Type': 'application/json;charset=utf-8'},
      data: {id: data}
    }).then(function (response) {
      deferred.resolve(response.data)
    }).catch(function (error) {
      console.log(error)
    })
    return deferred.promise
  },
  // 9.6 彻底删除商品
  removeProduct: function (data) {
    var deferred = Q.defer()
    axios({
      method: 'POST',
      url: this.u + 'api/bProduct/removeProduct',
      headers: {'Authorization': '', 'Content-Type': 'application/json;charset=utf-8'},
      data: [data]
    }).then(function (response) {
      deferred.resolve(response.data)
    }).catch(function (error) {
      console.log(error)
    })
    return deferred.promise
  },
  // 9.7 恢复商品
  resumeFromRecycled: function (data) {
    var deferred = Q.defer()
    axios({
      method: 'POST',
      url: this.u + 'api/bProduct/resumeFromRecycled',
      headers: {'Authorization': '', 'Content-Type': 'application/json;charset=utf-8'},
      data: {id: data}
    }).then(function (response) {
      deferred.resolve(response.data)
    }).catch(function (error) {
      console.log(error)
    })
    return deferred.promise
  },
  // 9.8 上架
  shelvedProducts: function (data) {
    var deferred = Q.defer()
    axios({
      method: 'POST',
      url: this.u + 'api/bProduct/shelvedProducts',
      headers: {'Authorization': '', 'Content-Type': 'application/json;charset=utf-8'},
      data: [data]
    }).then(function (response) {
      deferred.resolve(response.data)
    }).catch(function (error) {
      console.log(error)
    })
    return deferred.promise
  },
  // 9.9 下架
  unShelvedProducts: function (data) {
    var deferred = Q.defer()
    axios({
      method: 'POST',
      url: this.u + 'api/bProduct/unShelvedProducts',
      headers: {'Authorization': '', 'Content-Type': 'application/json;charset=utf-8'},
      data: [data]
    }).then(function (response) {
      deferred.resolve(response.data)
    }).catch(function (error) {
      console.log(error)
    })
    return deferred.promise
  }
}
