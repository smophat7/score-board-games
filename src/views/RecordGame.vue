<template>
  <div>
    <h1>Record a Game</h1>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "RecordGame",
};
</script>

<style scoped>
h1 {
  text-align: center;
}

@media (min-width: 768px) {
  h1 {
    text-align: left;
  }
}
</style>