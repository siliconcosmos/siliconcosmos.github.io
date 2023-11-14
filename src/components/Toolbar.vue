<script setup lang="ts">

</script>

<template>
    <div class="toolbar-root">
        <div class="main-column toolbar-main">
            <div style="margin-top: 25px; margin-right:10px; "><i class="fa-solid fa-microchip fa-2xl"> </i> </div>
            <div><h1>// </h1>
                <span><slot></slot></span>
            </div>
            <div class="flex-spacer"></div>

            <div><slot name="right"></slot></div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use "../assets/global_theme.scss" as glob;
.toolbar-root {
    // background-color: glob.$background-dark;
    background-color: transparentize($color: glob.$background-dark, $amount: 0.5);
    border: 1px solid glob.$border-dim;
    box-shadow: glob.$background-dark 0px 0px 30pt;
    position: sticky;
    // z-index: 9000;
}
.toolbar-main {
    padding: 20px;
    display: flex;
}
.flex-spacer {
    flex: 1 1 auto;
}
</style>

<style>
.toolbar-main h1,
.toolbar-main h2,
.toolbar-main h3,
.toolbar-main h4,
.toolbar-main h5,
.toolbar-main h6 {
    display: inline;
    font-weight: 100;
}
</style>