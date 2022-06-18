import request from '@/utils/request'

export function index(params) {
    return request({
      url: '/citizens',
      method: 'get',
      params
    })
  }
  
export function show(id) {
  return request({
    url: '/citizens/' + id,
    method: 'get'
  })
}

export function store(data) {
  return request({
    url: 'citizens',
    method: 'post',
    data
  })
}

export function edit(id) {
  return request({
    url: 'citizens/' + id,
    method: 'get'
  })
}

export function update(data) {
  return request({
    url: 'citizens/' + data.id,
    method: 'put',
    data: data
  })
}

export function destroy(id) {
  return request({
    url: '/citizens/' + id,
    method: 'delete'
  })
}
