<template>
    <div class="dome">
        <slot />
    </div>
    <code class="language-js" v-html="content"></code>
</template>

<script setup>
const { contents } = defineProps(['contents']);
const content = contents.join('\n') + 'let a = 1';
</script>

<style scoped>
.dome {
}
</style>
