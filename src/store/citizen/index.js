import { actions } from './actions'
import { mutations } from './mutations'
import { state } from './state'
import { getters } from './getters'


export  default {
    namespace: true,
    getters,
    state,
    mutations,
    actions
}