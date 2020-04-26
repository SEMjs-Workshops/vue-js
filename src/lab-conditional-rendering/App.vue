<template>
  <div>
    <div v-if="1 !== 1">I should be visible</div>
    <div v-if="'a' === 'a'">I should not be visible</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isInStock: true,
    };
  },
};
</script>
