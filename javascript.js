new Vue({
    el:'#app',
    data :{
        arrEmail: [],
    },

    methods:{
        randomEmails(){
            this.arrEmail = [];
            for (let i=0; i <10; i++ ){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((axiosRespons) => {
                    this.arrEmail.push(axiosRespons.data.response);
                })
            }
        }
    }

})