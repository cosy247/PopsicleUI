<template>
    <p class="imgs-title" v-if="title">{{ title }} - {{ imgs.length }}</p>
    <div class="imgs-main">
        <img class="imgs-item" v-for="img in imgs" :src="img" />
    </div>
</template>

<script>
export default {
    name: 'Imgs',
    props: ['params', 'contents'],
    components: {},
    data: () => ({}),
    computed: {
        title() {
            return this.params;
        },
        imgs() {
            return this.contents.filter((img) => img);
        },
    },
    watch: {},
    methods: {},
    created() {},
    mounted() {},
    destroy() {},
};
</script>

<style scoped>
.imgs-title {
    text-align: center;
    font-size: var(--size4);
    font-weight: 900;
}
.imgs-main {
    column-count: 3;
}
.imgs-item {
    display: block;
    border-radius: 5px;
    box-shadow: 0 0 10px #8888;
    margin-bottom: 15px;
}
</style>
