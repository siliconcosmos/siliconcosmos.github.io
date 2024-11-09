<script setup lang="ts">
</script>

<template>
    <Header>                
        <span class="header-img">
            <NuxtLink to="/quickref"><img src="~/assets/quickref_logotype.svg" /></NuxtLink>
        </span>        
        
        <template #right>
            <slot name="right"></slot>
            <div class="qr-nav">
                <nuxt-link to="/quickref/release-notes">Release Notes</nuxt-link> | <nuxt-link to="/quickref/faq">FAQ</nuxt-link>
            </div>
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

.qr-nav {
    display: none;
    margin-right: glob.$whitespace-xs;
}

@media (min-width: glob.$media-sm) {
    .qr-nav {
        display: inherit;
    }
}
</style>

<style>

</style>