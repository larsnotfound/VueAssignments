const app = Vue.createApp({
data() {
    return { userInput: '', confirmedInput: '' };
},

methods: {
    submitForm() {
        alert('Melding!');
   },
    saveInput(event) {
    this.userInput = event.target.value;
  },
  confirmInput() {
    this.confirmedInput = this.userInput;
  }
}
});

app.mount('#assignment');