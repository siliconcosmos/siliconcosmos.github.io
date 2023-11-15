<script setup lang="ts">
import Toolbar from './Toolbar.vue';
</script>

<template>
    <Toolbar>
        <div class="main-column toolbar-main">
            <div style="margin-top: 23px; margin-right:10px;">
                <router-link to="/" class="sc-color-primary">
                    <i class="fa-solid fa-microchip fa-2xl"></i>
                </router-link>
            </div>
            
            <div><h1>// </h1>
                <span><slot></slot></span>
            </div>

            <div class="flex-spacer"></div>

            <div><slot name="right"></slot></div>
        </div>
    </Toolbar>
</template>

<style scoped lang="scss">
@use "../assets/global.scss" as glob;
.toolbar-main {
    padding: 5px;
    display: flex;
    transition: glob.$transition-quick;
}
.flex-spacer {
    flex: 1 1 auto;
}

@media (min-width: glob.$media-md) and (min-height: glob.$media-md) {
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