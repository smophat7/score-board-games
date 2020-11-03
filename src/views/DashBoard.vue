<template>
  <div class="dashboard">
    <SecondaryNav/>
    <!-- Routerview for child view (Group, Personal, Collection, etc.) -->
    <router-view/>
  </div>
</template>

<script>
  import SecondaryNav from '@/components/SecondaryNav.vue';
  
  export default {
    name: 'DashBoard',
    components: {
      SecondaryNav
    }
  }
</script>