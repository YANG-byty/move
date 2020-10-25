//actions用来提交mutations中定义的方法
import { getHomeSwipe } from "@/api/index";
import { getCategoryDatas, getCategoryDatasR } from "@/api/category";
import { goodlists } from "@/api/goodlist";
import { detailDates } from "@/api/detailDates";
import { searchList } from "@/api/searchList";
import { integration } from "@/api/integrationData";

let actions = {
    getUserInfo(context, data) {
        context.commit("getUserInfo", data)
    },
    async actgetCategoryDatas(context) {
        let result = await getCategoryDatas();
        // console.log(result);
        context.commit("getCategoryDatas", result.data);
    },
    async actgetCategoryDatasR(context, cid) {
        let result = await getCategoryDatasR(cid);
        // console.log(result);
        context.commit('getCategoryDatasRight', result.data);
    },

    async actGetSwipeDatas(context) {
        let result = await getHomeSwipe();
        // console.log(result);
        context.commit('getSwipeDatas', result.data);
    },

    async actGetGoodLists(context, cat_id) {
        let result = await goodlists(cat_id);
        // console.log(result);
        context.commit('getGoodLists', result.data);
    },

    async actGetDetailLists(context, goods_id) {
        let result = await detailDates(goods_id);
        context.commit('getDetailLists', result.data);
    },

    async actGetSearchList(context, title) {
        let result = await searchList(title);
        context.commit('searchList', result.data);
    },

    async actGetIntegrationDatas(context, data) {
        let result = await integration(data);
        // console.log(result);
        context.commit('getIntegrationDatas', result.data);
    }
}
export default actions;