<script setup lang="ts">

</script>

<template>
    <div class="toolbar-root">
        <slot></slot>
    </div>
</template>

<style scoped lang="scss">
@use "../assets/global.scss" as glob;
.toolbar-root {
    // background-color: glob.$background-dark;
    background-color: transparentize($color: glob.$background-dark, $amount: 0.5);
    backdrop-filter: blur(1.25px);
    border-bottom: 1px solid glob.$border-dim;
    box-shadow: glob.$background-dark 0px 0px 30pt;
    position: sticky;
    z-index: 9001;
}
</style>