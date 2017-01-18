import request from '../utils/request';
import qs from 'qs';

//  get方法
export async function fetchGet(params) {
    return request(`api url?${qs.stringify(params)}`, {});
}

//  post方法
export async function fetchPost(params) {
    return request("api url", {
        method: 'post',
        body: qs.stringify(params)
    })
}
