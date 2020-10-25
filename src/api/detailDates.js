import ajax from "./ajax"

const Base_URL = '/api';

export const detailDates = (goods_id) => ajax(Base_URL + '/goods/show', { goods_id }, 'post');