import { MessageBox } from 'mint-ui';

let mutations = {
    getUserInfo(state, data) {
        state.userInfo = data;
    },
    getCategoryDatas(state, data) {
        // console.log(state);
        //传递过来的数据替换state中的dataList中的数据
        state.dataList = data;
    },
    getCategoryDatasRight(state, data) {
        state.dataListRight = data;
    },
    getSwipeDatas(state, data) {
        state.swipeDatas = data;
    },
    getGoodLists(state, data) {
        state.goodLists = data;
    },
    getDetailLists(state, data) {
        state.detailLists = data;
    },
    getIntegrationDatas(state, data) {
        state.integrationDatas = data;
    },
    //获取商品信息
    setCartDatas(state, data) {
        if (data) {
            state.catDatas.push(data);
        }
        localStorage.setItem('catDatas', JSON.stringify(state.catDatas));
    },
    //删除商品
    remove(state, index) {
        MessageBox.confirm('亲，你确认要放弃此商品吗?').then(() => {
            state.catDatas.splice(index, 1);
            localStorage.setItem('catDatas', JSON.stringify(state.catDatas));
        });
    },
    //单个选中商品
    chackSelect(state, item) {
        state.catDatas[item.index].isSelect = item.item.isSelect;
        localStorage.setItem('catDatas', JSON.stringify(state.catDatas));
    },
    // 多选
    checkAll(state) {
        state.checkAlldate = !state.checkAlldate;
        state.catDatas.forEach((item) => {
            item.isSelect = !state.checkAlldate;
        });
        localStorage.setItem('catDatas', JSON.stringify(state.catDatas));
        localStorage.setItem('checkAlldate', JSON.stringify(state.checkAlldate))

    },
    // 数量减减
    refuceFn(state, index) {
        if (state.catDatas[index].goods_num == 1) {
            state.catDatas[index].goods_num = 1;
            MessageBox({
                title: '提示',
                message: '亲，不能再减了哟！'
            });
        } else {
            state.catDatas[index].goods_num--;
            localStorage.setItem('catDatas', JSON.stringify(state.catDatas));
        }
    },
    // 数量加加
    addFn(state, index) {
        // console.log(state.catDatas[index]);
        state.catDatas[index].goods_num++;
        localStorage.setItem('catDatas', JSON.stringify(state.catDatas));
    },

    //输入数量
    changeNum(state, data) {
        // console.log(state);
        // console.log(data);
        if (data.val <= 1) {
            data.val = 1;
            MessageBox({
                title: '提示',
                message: '亲，至少要买一件哟！'
            });
        }
        state.catDatas[data.index].goods_num = data.val;
        localStorage.setItem('catDatas', JSON.stringify(state.catDatas));
    },


    //搜索结果数据
    searchList(state, data) {
        if (data == '') {
            state.dataNull = true;
        } else {
            state.dataNull = false;
        }
        if (state.searchList == '') {
            state.searchList = data;
        } else {
            data.forEach(item => {
                // console.log(item);
                state.searchList.push(item);
            });
        }
    },

    titleDatas(state, data) {
        var arr = [];
        for (const key in state.titleArr) {
            arr.push(state.titleArr[key]);
        }
        if (!arr.includes(data)) {
            state.titleArr.push(data);
            localStorage.setItem('title', JSON.stringify(state.titleArr))
        }
    }
}
export default mutations;