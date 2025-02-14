<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>

<template>
    <div class="top-0 w-full h-screen fixed z-50 bg-[rgba(0,0,0,0.5)]">
        <div class="relative h-full w-full flex justify-center">
            <section class="py-5 px-10 bg-Noir border-2 border-Tonic text-Blanc absolute w-full max-w-[800px] bottom-0 text-sm lg:text-base">
                <p class="mb-4">Avec votre accord, nous utilisons des cookies ou technologies similaires pour stocker, consulter et traiter des données personnelles telles que votre visite sur ce site internet, les adresses IP et les identifiants de cookie. À tout moment, vous pouvez retirer votre consentement ou vous opposer au traitement des données fondé sur l'intérêt légitime en allant dans notre <RouterLink to="/PolitiqueDeConfidentialite" class="text-Tonic underline-offset-2 underline">politique de confidentialité sur ce site internet</RouterLink>.</p>
                <p class="text-[0.6rem] leading-[1rem]  lg:text-xs font-bold">Vos données personnelles sont traitées pour les finalités suivantes:</p>
                <p class="text-[0.6rem] leading-[1rem] lg:text-xs">Analyses marketing sur la base de la géolocalisation, Données de géolocalisation et identification par analyse de l’appareil, Google Analytics, Mesures de performance, études d’audience et développement du services, Stocker et/ou accéder à des informations sur un appareil.</p>
                <div class="flex mt-4 gap-5">
                    <button class="bg-Tonic h-8 -skew-x-[25deg] hover:opacity-60 duration-200">
                        <p
                        class="text-Noir font-fugaz-one uppercase lg:text-xs text-[0.8rem] px-3 skew-x-[25deg]"
                        >
                        Tout accepter
                        </p>
                    </button>
                    <button class="bg-Blanc h-8 -skew-x-[25deg] hover:opacity-60 duration-200">
                        <p
                        class="text-Noir font-fugaz-one uppercase lg:text-xs text-[0.8rem] px-3 skew-x-[25deg]"
                        >
                        Tout refuser
                        </p>
                    </button>
                </div>
            </section>
        </div>
    </div>
</template>