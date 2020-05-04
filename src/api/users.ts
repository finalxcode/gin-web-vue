import request from '@/utils/request'

export const getUserInfo = (data: any) =>
  request({
    url: '/user/info',
    method: 'post',
    data
  })

export const login = (data: any) =>
  request({
    url: '/base/login',
    method: 'post',
    data
  })

export const logout = () =>
  request({
    url: '/base/logout',
    method: 'post'
  })

export const getUsers = (params: any) =>
  request({
    url: '/user/list',
    method: 'get',
    params
  })

export const createUser = (data: any) =>
  request({
    url: '/user/create',
    method: 'post',
    data
  })

export const updateUser = (id: number, data: any) =>
  request({
    url: `/user/${id}`,
    method: 'patch',
    data
  })

export const batchDeleteUser = (ids: string) =>
  request({
    url: `/user/batch`,
    method: 'delete',
    params: {
      ids
    }
  })
