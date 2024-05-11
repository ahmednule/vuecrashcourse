//creating a view app
const app = Vue.createApp({
    data() {
        return {
                heading: 'This are my Todo Items for the day',
                todo: ['Learn Vue,js', 'Finish up on Digital Marketing Course', 'Finish up on Cyber Security Course', 'Finish up on my pending Projects', 'Listen to Music'],

                showHeading: true,
                showInput: true,
                newItem: '',

            }
        },
    methods: {
        //this function updates the number of items in the leading
        updateHeading() {
            if (this.showHeading) {
                this.heading = 'Updated Todo Items for the day',
                this.todo.push('Add more tasks to the list')
            }else {
                this.heading = 'Reset Todo items',
                this.todo = ['Reset the list of the List']
            }
            this.showHeading = !this.showHeading,
            this.showInput = true
            },
            resetHeading() {
                this.heading = 'This is my Todo Items for the day',
                this.todo = [],
                this.showHeading = true,
                this.showInput = false
        },
        addItem() {
            if (this.newItem.trim() !== '') {
                this.todo.push(this.newItem),
                this.newItem = ''
            }
        }
    }
})

app.mount('#app')
