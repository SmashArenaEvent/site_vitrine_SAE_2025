<template>
    <h1 class="col-span-12 font-fugaz-one uppercase text-4xl lg:text-6xl mt-8 pb-8 lg:pb-12">
    <span class="text-Tonic">P</span>référence <span class="text-Tonic">d</span>es <span class="text-Tonic">c</span>ookies
  </h1>
    <form class="col-span-12 flex flex-col items-start" id="cookie-form">
      <label class="text-base border-t-2 border-b-2 py-3 border-Tonic_Sombre lg:text-xl w-full"><input type="checkbox" name="necessary" checked disabled class="mr-1"> Cookies nécessaires</label>
      <label class="text-base border-b-2 py-3 border-Tonic_Sombre lg:text-xl w-full"><input type="checkbox" name="analytics" id="analytics" v-model="preferences.analytics" class="mr-1"> Cookies analytiques</label>
      <label class="text-base border-b-2 py-3 border-Tonic_Sombre lg:text-xl w-full"><input type="checkbox" name="marketing" id="marketing" v-model="preferences.marketing" class="mr-1"> Cookies marketing</label>
    </form>
    <div class="col-span-12 flex mt-4 gap-5">
      <button type="button" @click="savePreferences" class="bg-Tonic h-8 -skew-x-[25deg] hover:opacity-60 duration-200">
          <p class="text-Noir font-fugaz-one uppercase lg:text-xs text-[0.8rem] px-3 skew-x-[25deg]">
          Enregistrer
          </p>
      </button>
      <button type="button" @click="deleteCookies" class="bg-Blanc h-8 -skew-x-[25deg] hover:opacity-60 duration-200">
          <p class="text-Noir font-fugaz-one uppercase lg:text-xs text-[0.8rem] px-3 skew-x-[25deg]">
            Supprimer mes cookies
          </p>
      </button>
      <RouterLink to="#" @click.prevent="$router.go(-1)">
        <button type="button" class="bg-Blanc h-8 -skew-x-[25deg] hover:opacity-60 duration-200">
            <p class="text-Noir font-fugaz-one uppercase lg:text-xs text-[0.8rem] px-3 skew-x-[25deg]">
              Retour
            </p>
        </button>
      </RouterLink>
    </div>
</template>
<script>
import { RouterLink } from 'vue-router';

  export default {
      data() {
          return {
              preferences: {
                  necessary: true,
                  analytics: false,
                  marketing: false
              },
              showForm: false
          };
      },
      methods: {
          loadPreferences() {
              let savedPreferences = JSON.parse(localStorage.getItem('cookiePreferences')) || {};
              this.preferences.analytics = savedPreferences.analytics || false;
              this.preferences.marketing = savedPreferences.marketing || false;
          },
          savePreferences() {
              localStorage.setItem('cookiePreferences', JSON.stringify(this.preferences));
              alert('Préférences enregistrées !');
          },
          deleteCookies() {
              localStorage.removeItem('cookiePreferences');
              alert('Vos cookies ont été supprimés !');
              this.preferences.analytics = false;
              this.preferences.marketing = false;
          },
          checkFormStatus() {
            this.showForm = !localStorage.getItem('cookiePreferences');
          }
      },
      mounted() {
          this.loadPreferences();
      }
  };
</script>