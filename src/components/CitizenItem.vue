<template>
    <tr>
        <td scope="row">{{citizen.id}}</td>
        <td>{{citizen.full_name}}</td>
        <td>{{citizen.passport}}</td>
        <td>{{citizen.birth_date}}</td>
        <td >
            <ul class="list-group list-group-flush" v-for="company in citizen.companies" :key="company.id">
                <li class="list-group-item">
                    <b>Company Name</b>:   {{company.company_name}} 
                    <b>Start Date</b>:  {{company.start_date}} 
                    <b>End Date</b>:  {{company.end_date}}
                </li>
            </ul>
        </td>
        <td>
            <my-button class="btn btn-secondary" >Edit</my-button>
            <my-button class="btn btn-danger" >Delete</my-button>
        </td>
    </tr>
</template>


<script>
import MyButton from './UI/MyButton'
export default {
    props: {
        citizen:{
            type: Object,
            required: true
        }
    }
}
</script>