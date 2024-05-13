//creating a view app
const app = Vue.createApp({
    data() {
        return {
            showlanguages: true,
        title: 'Best programming languages for beginers',
        languages : [
            { language: 'HTML', reason: 'The syntax is more of a markup language' },
            { language:'Python', reason:'Is easy to learn because of the syntax' },
            { language:'JavaScript' , reason:'Is the most popular language for web development'},
            { language: 'Java',  reason: 'Is a good language for beginners to learn' },
            { language: 'C', reason:'Is a good language for beginners to learn because it lays foundation for all other languages'} ,
        ]
    }
},
        methods: {
            toogleButton() {
                this.showlanguages = !this.showlanguages
            },
        }
})
app.mount('#app')
