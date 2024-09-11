<template>
  <div>
    <v-container>
      <v-card color="" width="auto">
        <v-row class="justify-center">
          <v-col class="mb-3" md="2">
            <div class="d-flex">
              <v-btn class="align-self-center mr-2" color="blue" @click="store.increment()">Incrementar</v-btn>
              <v-text-field v-model="store.state.count" label="Contagem" />
            </div>
          </v-col>
          <v-col class="mb-3" md="2">
            <v-text-field v-model="store.doubleCount" label="Contagem dobrada(Getter)" />
          </v-col>
          <v-col class="mb-3" md="5">
            <div class="d-flex">
              <v-text-field v-model="personValue" label="Adicionar pessoa" />
              <v-btn class="align-self-center ml-2" color="blue" @click="addPerson()">Adicionar pessoa</v-btn>
            </div>

          </v-col>
        </v-row>
      </v-card>
      <v-data-table :headers="peopleHeaders" :items="store.state.people" />
    </v-container>
  </div>

</template>

<script setup lang="ts">
  import { reactive, ref } from 'vue'
  import { useExampleStore } from '../stores/example'

  const store = useExampleStore()

  watch(() => store.state.count, newCount => {
    console.log('Count mudou dentro do componente!', newCount)
  })

  watch(store.state, (after, before) => {
    console.log('Store mudou dentro do componente!!', before, after)
  })

  // #region Estruturação de dados da pessoa
  const personValue = ref<string>('')

  const peopleHeaders = reactive(
    [
      { title: 'Nome', value: 'name' },
      { title: 'Contagem', value: 'count' },
    ]
  )
  // #endregion

  const addPerson = () => {
    console.log(personValue)
    store.addPerson(personValue.value)
  }
</script>
