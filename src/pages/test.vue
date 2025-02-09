<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <!--Sans zoom texte-->
    <nav class="col-span-12 flex flex-col lg:flex-row mt-6 lg:mt-12 relative z-10 -mx-5 lg:-mx-[50px] h-[416px] lg:h-auto">
        <div class="bg-center bg-cover bg-[url('/src/components/img/WallPaperJoueur.webp')] case_1 transition-all duration-1000 relative" loading="lazy">
            <div class="h-full lg:h-[608px] w-full bg-Noir_Vert hover:bg-transparent transition-all duration-1000 px-5 lg:px-[50px] flex flex-col justify-center">
                <h3 class="font-fugaz-one uppercase text-xl lg:text-5xl text-Tonic h-7 lg:h-16">
                    Comme joueur
                </h3>
                <p class="lg:text-xl mt-1">et participe au tournoi !</p>
                <a class="mt-6 lg:mt-20 mr-[13px] bg-Noir w-fit -skew-x-[25deg]" href="https://form.jotform.com/SmashArenaEvent/Inscription-Tournoi" onclick="window.scrollTo(0, 0);">
                    <button class="bg-Tonic h-12 lg:h-20 hover:opacity-60">
                        <p class="text-Noir font-fugaz-one uppercase text-xs lg:text-xl px-6 lg:px-9 skew-x-[25deg]">
                            Je m’inscris
                        </p>
                    </button>
                </a>
            </div>
        </div>
        <div class="bg-center bg-cover bg-[url('/src/components/img/WallPaperBenevole.webp')] case_2 transition-all duration-1000 relative" loading="lazy">
            <div class="h-full lg:h-[608px] w-full bg-Noir_Vert hover:bg-transparent transition-all duration-1000 px-5 lg:px-[50px] flex flex-col justify-center items-end">
                <h3 class="font-fugaz-one uppercase text-xl lg:text-5xl text-Tonic h-7 lg:h-16">
                    Comme Bénévole
                </h3>
                <p class="lg:text-xl mt-1">et viens nous aider à gérer l’évènement !</p>
                <a class="mt-6 lg:mt-20 mr-[13px] bg-Noir w-fit -skew-x-[25deg]" href="https://form.jotform.com/SmashArenaEvent/Inscription-Benevolat" onclick="window.scrollTo(0, 0);">
                    <button class="bg-Tonic h-12 lg:h-20 hover:opacity-60">
                        <p class="text-Noir font-fugaz-one uppercase text-xs lg:text-xl px-6 lg:px-9 skew-x-[25deg]">
                            Je m’inscris
                        </p>
                    </button>
                </a>
            </div>
        </div>
    </nav>
    <!--Avec zoom texte-->
    <nav class="col-span-12 flex flex-col lg:flex-row mt-6 lg:mt-12 relative z-10 -mx-5 lg:-mx-[50px] h-[416px] lg:h-auto">
        <div class="bg-center bg-cover bg-[url('/src/components/img/WallPaperJoueur.webp')] case_1 transition-all duration-1000 relative" loading="lazy">
            <div class="h-full lg:h-[608px] w-full bg-Noir_Vert hover:bg-transparent transition-all duration-1000 px-5 hover:pl-10 lg:px-[50px] hover:lg:pl-[100px] flex flex-col justify-center">
                <h3 class="font-fugaz-one uppercase text-xl lg:text-5xl text-Tonic h-7 lg:h-16">
                    Comme joueur
                </h3>
                <p class="lg:text-xl mt-1">et participe au tournoi !</p>
                <a class="mt-6 lg:mt-20 mr-[13px] bg-Noir w-fit -skew-x-[25deg]" href="https://form.jotform.com/SmashArenaEvent/Inscription-Tournoi" onclick="window.scrollTo(0, 0);">
                    <button class="bg-Tonic h-12 lg:h-20 hover:opacity-60">
                        <p class="text-Noir font-fugaz-one uppercase text-xs lg:text-xl px-6 lg:px-9 skew-x-[25deg]">
                            Je m’inscris
                        </p>
                    </button>
                </a>
            </div>
        </div>
        <div class="bg-center bg-cover bg-[url('/src/components/img/WallPaperBenevole.webp')] case_2 transition-all duration-1000 relative" loading="lazy">
            <div class="h-full lg:h-[608px] w-full bg-Noir_Vert hover:bg-transparent transition-all duration-1000 px-5 hover:pr-10 lg:px-[50px] hover:lg:pr-[100px] flex flex-col justify-center items-end ">
                <h3 class="font-fugaz-one uppercase text-xl lg:text-5xl text-Tonic h-7 lg:h-16">
                    Comme Bénévole
                </h3>
                <p class="lg:text-xl mt-1">et viens nous aider à gérer l’évènement !</p>
                <a class="mt-6 lg:mt-20 mr-[13px] bg-Noir w-fit -skew-x-[25deg]" href="https://form.jotform.com/SmashArenaEvent/Inscription-Benevolat" onclick="window.scrollTo(0, 0);">
                    <button class="bg-Tonic h-12 lg:h-20 hover:opacity-60">
                        <p class="text-Noir font-fugaz-one uppercase text-xs lg:text-xl px-6 lg:px-9 skew-x-[25deg]">
                            Je m’inscris
                        </p>
                    </button>
                </a>
            </div>
        </div>
    </nav>
</template>
<style>
    .case_1 {
        flex: 5;
    }
    .case_1:hover {
        flex: 7;
    }
    .case_2 {
        flex: 5;
    }
    .case_2:hover {
        flex: 7;
    }
</style>
<script setup lang="ts">
</script>