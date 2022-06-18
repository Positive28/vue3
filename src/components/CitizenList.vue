<template>
    <div>
        <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Passport</th>
            <th scope="col">Tug'ilgan sana</th>
            <th scope="col">Ishalagan joyi</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <citizen-item 
            v-for="citizen in citizens" :key="citizen.id"
            :citizen="citizen" 
           />
        </tbody>
      </table>
    </div>
    
</template>


<script>
import CitizenItem from './CitizenItem.vue'

export default {
    components: {
        CitizenItem
    },
    props: {
        citizens:{
            type: Array,
            required: true
        }
    }
}
</script>