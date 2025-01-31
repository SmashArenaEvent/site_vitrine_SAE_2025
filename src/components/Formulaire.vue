<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <form
    class="col-span-12 col12 text-Gris_clair lg:text-xl mt-6 mb-12"
    @submit.prevent="submitForm"
  >
    <div class="lg:flex lg:col-start-2 col-span-12 lg:col-span-10 lg:col10">
      <div class="lg:col-span-5 lg:w-full">
        <input
          class="w-full px-2.5 text-[10px] lg:text-xl h-8 lg:h-10 bg-Gris border-b border-Gris_clair"
          type="text"
          name="firstName"
          v-model="form.firstName"
          placeholder="Prénom"
        />
      </div>
      <div class="mt-5 lg:mt-0 lg:col-span-6 lg:w-full">
        <input
          class="w-full px-2.5 text-[10px] lg:text-xl h-8 lg:h-10 bg-Gris border-b border-Gris_clair"
          type="text"
          name="name"
          v-model="form.name"
          placeholder="Nom"
        />
      </div>
    </div>
    <div class="mt-5 lg:mt-12 lg:col-start-2 col-span-12 lg:col-span-10 lg:w-full">
      <input
        class="w-full px-2.5 text-[10px] lg:text-xl h-8 lg:h-10 bg-Gris border-b border-Gris_clair"
        type="email"
        name="email"
        v-model="form.email"
        placeholder="Email"
      />
    </div>
    <div class="mt-5 lg:mt-12 lg:col-start-2 col-span-12 lg:col-span-10">
      <textarea
        class="w-full px-2.5 pt-2 lg:pt-0 text-[10px] lg:text-xl bg-Gris border-l border-b border-Gris_clair"
        rows="5"
        name="message"
        v-model="form.message"
        placeholder="Message"
      />
    </div>
    <div class="mt-5 lg:mt-12 lg:col-start-2 col-span-12 lg:col-span-10">
      <button class="bg-Tonic h-12 lg:h-20 -skew-x-[25deg] ml-[13px] hover:opacity-60 duration-200">
        <input
          class="font-fugaz-one uppercase lg:text-xl text-Noir px-6 lg:px-9 skew-x-[25deg]"
          type="submit"
          value="Envoyer"
        />
      </button>
      <button class="bg-Blanc h-12 lg:h-20 -skew-x-[25deg] ml-[30px] hover:opacity-60 duration-200">
        <input
          class="font-fugaz-one uppercase lg:text-xl text-Noir px-6 lg:px-9 skew-x-[25deg]"
          type="reset"
          value="Annuler"
        />
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const WEB3FORMS_ACCESS_KEY = '2e16caef-865b-4105-80bf-cafccea701be'

interface FormData {
  firstName: string
  name: string
  email: string
  message: string
}

const form = ref<FormData>({
  firstName: '',
  name: '',
  email: '',
  message: ''
})
const submitForm = async () => {
  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        ...form.value
      })
    })
    const result = await response.json()
    if (result.success) {
      console.log('Form submitted successfully:', result)
      // Reset the form if needed
      form.value = { firstName: '', name: '', email: '', message: '' }
    } else {
      console.error('Form submission failed:', result)
    }
  } catch (error) {
    console.error('Error submitting form:', error)
  }
}
</script>
