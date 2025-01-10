<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <form style="text-Gris_clair" @submit.prevent="submitForm">
        <div class="lg:flex">
            <div>
                <input class="bg-Gris" type="text" name="firstName" v-model="form.firstName" placeholder="Prénom"/>
            </div>
            <div>
                <input class="bg-Gris" type="text" name="name" v-model="form.name" placeholder="Nom"/>
            </div>
        </div>
        <div>
            <input class="bg-Gris" type="email" name="email" v-model="form.email" placeholder="Email"/>
        </div>
        <div>
            <textarea class="bg-Gris" rows="5" name="message" v-model="form.message" placeholder="Message"/>
        </div>
        <div>
            <button><input type="submit" value="Envoyer"/></button>
            <button><input type="reset" value="Annuler"/></button>
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
