<template>
    <div class="root">
        <slot></slot>
        <div class="content">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script setup></script>

<style scoped>
.root {
    position: relative;
    width: fit-content;
}
.content {
    position: absolute;
    opacity: 0;
    pointer-events: none;
    transition: 0.2s;
	padding-top: 5px;
    z-index: 999;
}
.root:hover > .content {
    opacity: 1;
    pointer-events: all;
}
</style>
