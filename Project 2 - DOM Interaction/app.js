const app = Vue.createApp({
    data() {
        return{
            myName: 'Lars',
            myAge: 23,
            imageUrl: 'https://weekend.knack.be/medias/18721/9585233.jpg'
        }
    },
    methods: {
     randomNumber() {
        const randomNumber = Math.random();
     }       
    }
})

app.mount('#assignment');