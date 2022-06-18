export const mutations = {
    SET_CITIZEN: (state, citizen) => {
        state.citizen.id = citizen.id;
        state.citizen.name = citizen.name;
        state.citizen.gender = citizen.passport;
        state.citizen.birth_date = citizen.birth_date;
    },
    SET_CITIZENS: (state, citizens) => {
        state.citizens.data = citizens.data;
        state.citizens.pagination = {
            total: citizens.meta.total,
            page: citizens.meta.current_page,
            limit: citizens.meta.per_page
            };
    },
    SET_CITIZENS_COMPANIES: (state, companies) => {
        state.citizens.companies = companies;
      },
}