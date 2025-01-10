<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <form @submit.prevent="submitForm">
        <div>
            <input class="text-black" type="text" name="name" v-model="form.name" placeholder="Nom"/>
        </div>
        <div>
            <input class="text-black" type="text" name="email" v-model="form.email" placeholder="Email"/>
        </div>
        <div>
            <textarea class="text-black" rows="5" name="message" v-model="form.message" placeholder="Message"/>
        </div>
    </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
interface FormData {
  name: string
  email: string
  message: string
}

const form = ref<FormData>({
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
    // body: JSON.stringify({
    //   access_key: WEB3FORMS_ACCESS_KEY,
    //   ...form.value
    // }),
  });
  const result = await response.json()
  if (result.success) {
      console.log('Form submitted successfully:', result)
      // Reset the form if needed
      form.value = { name: '', email: '',  message: '' }
    } else {
      console.error('Form submission failed:', result)
    }
  } catch (error) {
    console.error('Error submitting form:', error)
  }
};
</script>
