let state = {
    userInfo: [], //用户信息
    dataList: [], //分类-类别信息
    dataListRight: [],
    swipeDatas: [], //首页轮播图数据,
    goodLists: [], //列表页数据,
    detailLists: {}, //详情页数据
    catDatas: localStorage['catDatas'] ? JSON.parse(localStorage['catDatas']) : [], //购物车数据
    checkAlldate: localStorage['checkAlldate'] ? JSON.parse(localStorage['checkAlldate']) : false,
    searchList: [],
    dataNull: false,
    integrationDatas: [], // 发现页面的数据
    titleArr: localStorage['title'] ? JSON.parse(localStorage['title']) : [],
    index: 0, //用列表数据的筛选
}

export default state;