import ajax from "./ajax";

const Base_URL = '/api';
// https://x.dscmall.cn/api/discover/find_list?size=10&page=1

export const integration = (data) => ajax(Base_URL + `/discover/find_list?size=${data.size}&page=${data.page}`);