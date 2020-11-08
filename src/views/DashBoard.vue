<template>
  <div class="dashboard">
    <div class="row m-0">
      <div class="secondary-nav-large-side col-2">
        <SecondaryNavLargeSide/>
      </div>
      <div class="col dashboard-content">
        <!-- Routerview for child view (Group, Personal, Shelf, etc.) -->
        <router-view/>
      </div>
    </div>
    <SecondaryNavSmallBottom/>
  </div>
</template>

<script>
  import SecondaryNavSmallBottom from '@/components/SecondaryNavSmallBottom.vue';
  import SecondaryNavLargeSide from '@/components/SecondaryNavLargeSide.vue';
  
  export default {
    name: 'DashBoard',
    components: {
      SecondaryNavLargeSide,
      SecondaryNavSmallBottom
    }
  }
</script>


<style scoped>
.secondary-nav-large-side {
  display: none;
  background-color: var(--p-dark);
  text-align: center;
}

.dashboard-content {
  min-height: calc(100vh - 70px);
  padding: 5px;
}

@media (min-width: 768px) {
  .secondary-nav-large-side {
    display: inline;
  }

  .dashboard-content {
    padding: 30px;
  }
}
</style>