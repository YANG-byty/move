import ajax from "./ajax"

let Base_URL = '/api';

export let loginuser = (user_name, password, captcha) => ajax(Base_URL + '/v1/users/login', { user_name, login_password: password, captcha }, 'post')