//creating a view app
const app = Vue.createApp({
    //data, function
    //function that returns an object
    data() {
        return {
            title:'This is a Vue 3 app',
            name:'Ahmed',
            age:25
        }
    },
    methods: {
        changeTitle(name, miaka) {
           // this.title = 'software engineers in progress',
            //this.age = 50
            this.title = name,
            this.age = miaka
        }
    }
})

app.mount('#app')
