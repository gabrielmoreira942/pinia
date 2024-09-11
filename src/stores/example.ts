import { defineStore } from 'pinia'

// export const useExampleStore = defineStore('example', {
//   state: () => ({
//     count: 0,
//     people: [
//       {
//         name: 'Rafael',
//       },
//       {
//         name: 'Bigode',
//       },
//       {
//         name: 'Tícia, a Pinscher',
//       },
//     ],

//   }),

//   getters: {
//     doubleCount: state => state.count * 2,
//   },
//   actions: {
//     increment () {
//       this.count++
//     },
//     addPerson (name: string) {
//       this.people.push({ name })
//     },
//   },
// })

export const useExampleStore = defineStore('example', () => {
  const state = reactive({
    count: 0,
    people: [
      {
        name: 'Rafael',
      },
      {
        name: 'Bigode',
      },
      {
        name: 'Tícia, a Pinscher',
      },
    ],
  })

  watch(state, v => {
    console.log('Eu mudei dentro do store!', v)
  })

  const doubleCount = computed(() => state.count * 2)

  const increment = () => {
    state.count++
  }

  const addPerson = (name: string) => {
    state.people.push({ name })
  }

  return {
    state,
    // ...state,
    doubleCount,
    increment,
    addPerson,
  }
})
