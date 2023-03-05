// 导入axios
import axios from 'axios'
// 导入qs
import qs from 'qs'

// 设置表单提交方式为form-data
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

const service = axios.create({
    baseURL: 'http://localhost:8081',
    timeout: 5000,
})

export async function send(url, data) {
    const params = qs.stringify(data)
    return await service.post(url, params)
}