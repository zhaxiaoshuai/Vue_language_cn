/*
包含n个接口请求函数的模块
函数的返回值: promise对象
 */
import ajax from './ajax'

export const reqVideoList = () => ajax('/video')