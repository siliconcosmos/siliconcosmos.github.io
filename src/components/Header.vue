<script setup lang="ts">
import Toolbar from './Toolbar.vue';
import KofiDonate from '~/components/KofiDonate.vue';
</script>

<template>
    <Toolbar>
        <div class="main-column toolbar-main">
            <router-link to="/" class="sc-color-primary">
                <span class="logo-img">
                    <img src="../assets/sc-logo.svg"/>
                </span>
            </router-link>
            
            <div><h1>// </h1>
                <span><slot></slot></span>
            </div>

            <div class="flex-spacer"></div>

            <div><slot name="right"></slot></div>
            <KofiDonate></KofiDonate>
        </div>
    </Toolbar>
</template>

<style scoped lang="scss">
@use "../assets/global.scss" as glob;
.toolbar-main {
    padding: 5px 5px 5px 10px;
    display: flex;
    transition: glob.$transition-quick;
}
.logo-img {
    display: inline-block;
    height: 30px; 
    width: 30px; 
    transform: translate(0%, 26%);
    transition: glob.$transition-quick;
    margin-right: 5px;

    img {
        width: 100%;
        height: 100%;
        // max-width: 256px;
        // max-height: 256px;
        object-fit: contain;
    }
}
.flex-spacer {
    flex: 1 1 auto;
}

@media (min-width: glob.$media-sm) {
    .toolbar-main {
        padding: 20px;
    }
}
@media (min-width: glob.$media-lg) {

}
</style>

<style>
.toolbar-main,
.toolbar-main h1,
.toolbar-main h2,
.toolbar-main h3,
.toolbar-main h4,
.toolbar-main h5,
.toolbar-main h6 {
    display: inline;
    font-weight: 100;
}

@media (max-width: 640px) {
    .toolbar-main h1 {
        font-size: 1.8em;
    }
}
</style>