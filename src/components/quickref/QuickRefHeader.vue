<script setup lang="ts">
</script>

<template>
    <Header>                
        <span class="header-img">
            <NuxtLink to="/quickref"><img src="~/assets/quickref_logotype.svg" /></NuxtLink>
        </span>        
        
        <template #right>
        </template>
    </Header>
</template>

<style scoped lang="scss">
@use "~/assets/global.scss" as glob;

.header-img {
    display: inline-block;
    height: 30px; 
    width: 100px; 
    transform: translate(0%, 8%);
    transition: glob.$transition-quick;
}
</style>

<style>

</style>