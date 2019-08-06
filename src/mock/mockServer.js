import Mock from 'mockjs'
import data from './data.json'
Mock.mock('/video',{code:0,data:data.allVideo})