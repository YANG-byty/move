import ajax from "./ajax"

const Base_URL = '/api';

export const searchList = (data) => ajax(Base_URL + '/catalog/goodslist', data, 'post');