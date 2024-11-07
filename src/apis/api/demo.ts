import { get } from '@/utils/methods'
import type { demoParams } from '../type/demo'

export  function demoRequest(params: demoParams) {
    return get('/hello', { params }); //测试接口
}
