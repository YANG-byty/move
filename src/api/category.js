import ajax from "./ajax";

const Base_URL = '/api';

// export const getCategoryDatas = () => ajax(Base_URL + 'v1/category');
// export const getCategoryDatasR = (cid) => ajax(Base_URL + 'v1/category/categorylist/' + cid);

// 大商创接口：
export const getCategoryDatas = () => ajax(Base_URL + '/catalog/list/');
export const getCategoryDatasR = (cid) => ajax(Base_URL + '/catalog/list/' + cid);