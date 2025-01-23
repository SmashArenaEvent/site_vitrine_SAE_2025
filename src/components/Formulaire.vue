<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <form class="col-span-12 col12 text-Gris_clair lg:text-xl	mt-6 mb-12" @submit.prevent="submitForm">
        <div class="lg:flex col-span-12">
            <div>
                <input class="w-full px-2.5 text-[10px] bg-Gris border-b border-Gris_clair" type="text" name="firstName" v-model="form.firstName" placeholder="Prénom"/>
            </div>
            <div class="mt-5">
                <input class="w-full px-2.5 text-[10px] bg-Gris border-b border-Gris_clair" type="text" name="name" v-model="form.name" placeholder="Nom"/>
            </div>
        </div>
        <div class="mt-5 col-span-12">
            <input class="w-full px-2.5 text-[10px] bg-Gris border-b border-Gris_clair" type="email" name="email" v-model="form.email" placeholder="Email"/>
        </div>
        <div class="mt-5 col-span-12">
            <textarea class="w-full px-2.5 text-[10px] bg-Gris border-l border-b border-Gris_clair" rows="5" name="message" v-model="form.message" placeholder="Message"/>
        </div>
        <div class="mt-5 col-span-12">
            <button class="bg-Tonic h-12 lg:h-20 -skew-x-[25deg] ml-[13px]"><input class="font-fugaz-one uppercase lg:text-xl text-Noir px-6 lg:px-9 skew-x-[25deg]" type="submit" value="Envoyer"/></button>
            <button class="bg-Blanc h-12 lg:h-20 -skew-x-[25deg] ml-[30px]"><input class="font-fugaz-one uppercase lg:text-xl text-Noir px-6 lg:px-9 skew-x-[25deg]" type="reset" value="Annuler"/></button>
        </div>
    </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const WEB3FORMS_ACCESS_KEY = "2e16caef-865b-4105-80bf-cafccea701be";

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
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: WEB3FORMS_ACCESS_KEY,
      ...form.value
    }),
  });
  const result = await response.json()
  if (result.success) {
      console.log('Form submitted successfully:', result)
      // Reset the form if needed
      form.value = { firstName: '', name: '', email: '',  message: '' }
    } else {
      console.error('Form submission failed:', result)
    }
  } catch (error) {
    console.error('Error submitting form:', error)
  }
};
</script>
