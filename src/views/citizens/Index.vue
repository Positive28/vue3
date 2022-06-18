<template>
  <div class="container">
    <h4 class="font-weight-bold">Fuqaro ma'lumotlari</h4>
    <div class="bg-white box-shadow p-4">
      <!-- <router-link :to="{name: 'CreateCitizen'}">
        <el-button
          type="success"
          class="float-right mb-2 font-weight-bold"
          icon="el-icon-plus"
        >New Create</el-button>
      </router-link> -->
      <br><br>

      <citizen-list :citizens="citizens"/>
    </div>
  </div>
</template>


<script>
import { mapActions, mapGetters } from 'vuex'
import CitizenList from '@/components/CitizenList.vue'

export default {
  name: 'IndexCitizen',
  components: {
    CitizenList
  },
  data() {
    return {
      filter: {
            name: '',
            passport: '',
            company: '',
            total: 0,
            limit: 0,
            page: 0
        },
        modalVisible: false,
        isLoading: false,
        selectedSort: "",
        searchQuery: "",
        selectOptions: [
            {value: "name", name: "filter by name"},
            {value: "email", name: "filter by email"}
        ]
    }
  },
  computed: {
    ...mapGetters({
      citizens: 'GET_CITIZENS',
      citizens_pagination: 'citizen/GET_CITIZENS_PAGINATION',
    }),
  },

  mounted() {
    this.fetchCitizens()
  },

  methods: {
    ...mapActions({
        fetchCitizens: 'indexCtizen',
        deleteCitizenAction: 'citizen/delete'
    })
  },
  
  watch: {
  }
}
</script>