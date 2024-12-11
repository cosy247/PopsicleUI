<template>
  <div class="PCard" :class="classList">
    <slot />
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  shadowWhen: {
    validator(value, props) {
      return ['hover', 'always', 'never'].includes(value);
    },
    default: 'always',
  },
});

const classList = computed(() => {
  const classList = [props.shadowWhen];
  return classList;
});
</script>

<style scoped>
.PCard {
  border-radius: 5px;
  padding: 20px 30px;
  border: #eee solid 1px;
}
.PCard.always {
  box-shadow: 0 0 5px #8883;
}
.PCard.hover:hover {
  box-shadow: 0 0 5px #8883;
	transition: 0.2s;
}
</style>
