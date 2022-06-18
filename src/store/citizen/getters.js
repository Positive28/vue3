export const getters = {
    GET_CITIZEN: (state) => state.citizen,
    GET_CITIZENS: (state) => state.citizens.data,
    GET_CITIZENS_PAGINATION: (state) => state.citizens.pagination,
    GET_CITIZENS_COMPANIES: (state) => state.citizens.companies,
}