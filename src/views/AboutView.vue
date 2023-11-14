<script lang="ts" setup>
import Toolbar from '../components/Toolbar.vue';
</script>

<template>
  <div class="sc-wrapper">
    <div class="sc-header">
        <Toolbar>
            <h1>silicon cosmos</h1>
            <template #right>
              
            </template>
        </Toolbar>
    </div>
    <div class="sc-content">
      <div class="about">
        <h1>This is an about page</h1>
      </div>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
