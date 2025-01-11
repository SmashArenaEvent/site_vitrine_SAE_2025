<template>
    <div class="rounded-2xl text-Blanc" :class="{'border border-Tonic_Sombre':Style == '0', 'bg-Tonic_Sombre':Style == '1'}">
        <h3>{{ Title }}</h3>
        <p>{{ Text }}</p>
    </div>
</template>
<script setup lang="ts">

    import { defineProps } from 'vue';
    const props = defineProps<{
        Title: string
        Text: string
        Style: string
    }>()
</script>