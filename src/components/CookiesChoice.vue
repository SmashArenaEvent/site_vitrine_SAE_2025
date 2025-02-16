<template>
    <div id="cookies-element" class="top-0 w-full h-screen fixed z-50 bg-[rgba(0,0,0,0.5)] hidden">
        <div class="relative h-full w-full flex justify-center">
            <section id="cookie-banner" class="py-5 px-10 bg-Noir border-2 border-Tonic text-Blanc absolute w-full max-w-[800px] bottom-0 text-sm lg:text-base">
                <p class="mb-4">Avec votre accord, nous utilisons des cookies ou technologies similaires pour stocker, consulter et traiter des données personnelles telles que votre visite sur ce site internet, les adresses IP et les identifiants de cookie. À tout moment, vous pouvez retirer votre consentement ou vous opposer au traitement des données fondé sur l'intérêt légitime en allant dans notre <RouterLink to="/PolitiqueDeConfidentialite" class="text-Tonic underline-offset-2 underline">politique de confidentialité sur ce site internet</RouterLink>.</p>
                <p class="text-[0.6rem] leading-[1rem]  lg:text-xs font-bold">Vos données personnelles sont traitées pour les finalités suivantes:</p>
                <p class="text-[0.6rem] leading-[1rem] lg:text-xs">Analyses marketing sur la base de la géolocalisation, Données de géolocalisation et identification par analyse de l’appareil, Google Analytics, Mesures de performance, études d’audience et développement du services, Stocker et/ou accéder à des informations sur un appareil.</p>
                <div class="flex mt-4 gap-5 -mx-3 lg:mx-0">
                    <button @click="acceptCookies(true)" class="bg-Tonic h-8 -skew-x-[25deg] hover:opacity-60 duration-200">
                        <p
                        class="text-Noir font-fugaz-one uppercase lg:text-xs text-[0.6rem] px-2 lg:px-3 skew-x-[25deg]"
                        >
                        Tout accepter
                        </p>
                    </button>
                    <RouterLink to="/CookiesPersonalisation">
                        <button @click="acceptCookies(false)" class="bg-Blanc h-8 -skew-x-[25deg] hover:opacity-60 duration-200">
                            <p
                            class="text-Noir font-fugaz-one uppercase lg:text-xs text-[0.6rem] px-2 lg:px-3 skew-x-[25deg]"
                            >
                            Personnaliser
                            </p>
                        </button>
                    </RouterLink>
                    <button  @click="acceptCookies(false)" class="h-8 hover:opacity-60 duration-200">
                        <p
                        class="text-Blanc opacity-90 font-fugaz-one uppercase lg:text-xs text-[0.6rem] lg:px-3 "
                        >
                        Tout refuser
                        </p>
                    </button>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
            methods: {
                acceptCookies(all) {
                    let preferences = { necessary: true, analytics: all, marketing: all };
                    localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
                    document.getElementById('cookies-element').style.display = 'none';
                },
                checkFormStatus() {
                    if (!localStorage.getItem('cookiePreferences')) {
                        document.getElementById('cookies-element').style.display = 'block';
                        document.getElementById('contact-form').style.display = 'block';
                    }
                }
            },
            mounted() {
                this.checkFormStatus();
            }
        };
</script>