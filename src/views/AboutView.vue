<script lang="ts" setup>
import Header from '../components/Header.vue';
</script>

<template>
  <div class="sc-wrapper">
    <div class="sc-header">
        <Header>
            <h1>About</h1>
            <template #right>
              
            </template>
        </Header>
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
