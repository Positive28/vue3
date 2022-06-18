import {
    show,
    edit,
    update,
    index,
    store
  } from '@/api/citizen'

export const actions = {
  indexCtizen({ commit }, query) {
    return new Promise((resolve, reject) => {
      index(query)
        .then(res => {
          commit('SET_CITIZENS', res)
          commit('SET_CITIZENS_COMPANIES', res.data)
          resolve(res)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
    
}