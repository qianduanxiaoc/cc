<template>
    <div v-html="formal"></div>
</template>
<script>
    export default {
        components: {},
        data() {
            return {
                obj: {
                    name: '姓名',
                    id: '1212',
                    mobile: '12111111111'
                },
                formal: ''
            }
        },
        created() {
            this.formal = JSON.stringify(this.obj, null,'<br/>')
            console.log(this.formal)
        },
        computed: {

        },
        methods: {

        }
    }
</script>
<style module="s">
     
</style>