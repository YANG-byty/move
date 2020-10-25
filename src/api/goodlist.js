import ajax from "./ajax"

const Base_URL = '/api';

export const goodlists = (cat_id) => ajax(Base_URL + '/catalog/goodslist/', { cat_id }, 'post');