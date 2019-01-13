import request from '@/utils/request.js'

export function fetchList(params) {
    return request({
        url: 'api/playlist/hot',
        method: 'get',
        params
    })
}
export function fetchBanner(params) {
    return request({
        url: 'api/banner',
        method: 'get',
        params
    })
}
