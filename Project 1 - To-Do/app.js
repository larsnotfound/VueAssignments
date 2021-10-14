Vue.createApp({
    data() {
      return {
        goals: [],
        enteredValue: ''
      };
    },
    methods: {
      addGoal() {
        this.goals.push(this.enteredValue);
        this.enteredValue = '';
      }
    }
  }).mount('#app');


// const buttonEL = document.querySelector('button');
// const inputEL = document.querySelector ('input');
// const listEL = document.querySelector ('ul');

// function addGoal() {
//  const enteredValue = inputEL.value;
//  const listItemEL = document.createElement('li');
//  listItemEL.textContent = enteredValue;
//  listEL.appendChild(listItemEL)
//  inputEL.value = '';
// }

// buttonEL.addEventListener ('click', addGoal );

