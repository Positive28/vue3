<template>
    <div>
        <div class="w-75 mx-auto">
            <h3>Add Comments</h3>
            <form @submit.prevent>
                <my-input 
                    v-model="citizen.name"
                    placeholder="Enter your Name.." 
                    class="form-control"
                    />
                <my-input 
                    v-model="citizen.email" 
                    type="email" 
                    placeholder="Enter your Email.." 
                    class="form-control my-3"
                    />
                <my-input 
                    v-model="citizen.body" 
                    type="text" 
                    placeholder="Enter your Content.." 
                    class="form-control"
                    />
                <div class="d-flex flex-row-reverse">
                    <my-button @click="createComment" class="btn btn-primary mt-3">Add Comments</my-button>
                </div>
            </form>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            citizen: {
                full_name: '',
                passport: '',
                birth_date: '',
                company_id: '',
                start_date: '',
                end_date: ''
            }
        }
    },
    
}
</script>