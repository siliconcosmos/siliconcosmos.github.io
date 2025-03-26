<script setup lang="ts">
import CapsuleLayout from './CapsuleLayout.vue';
</script>

<template>
    <div>
        <div class="capsule-root">
            <CapsuleLayout class="fill-wide">
                <template #header>
                    <slot name="header"></slot>
                </template>
                <template #footer>
                    <slot name="footer"></slot>
                </template>
                <template #left>
                    <slot name="left"></slot>
                </template>
                <template #right>
                    <slot name="right"></slot>
                </template>
                
                <template #oLeft>
                    <slot name="oLeft"></slot>
                </template>
                <template #oRight>
                    <slot name="oRight"></slot>
                </template>

                <slot></slot>
                
            </CapsuleLayout>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use "../../assets/global.scss" as glob;

:deep(.fill-wide) {
    width: 100%;
    // height: 100%; //TODO: why does this work on image carousel but not here. On this capsule it causes it to expand to viewport height...
}

.capsule-root {
    // display: inline-block;
    border: 1px solid glob.$border-dim;
    margin: glob.$whitespace-sm;
    // margin: glob.$whitespace-sm glob.$whitespace-sm 0 glob.$whitespace-sm;
    padding: glob.$whitespace-sm;
    background-color: transparentize($color: glob.$background-dark, $amount: 0.5);
    backdrop-filter: blur(1px);
    transition: padding glob.$transition-slow;
}

@media (min-width: glob.$media-md) {
    .capsule-root {
        padding: glob.$whitespace-md;
        margin: glob.$whitespace-md;
        // margin: glob.$whitespace-md glob.$whitespace-md 0 glob.$whitespace-md;
    }
}

@media (min-width: glob.$media-lg) {
    .capsule-root {
        padding: glob.$whitespace-lg;
        margin: glob.$whitespace-lg;
        // margin: glob.$whitespace-lg glob.$whitespace-lg 0 glob.$whitespace-lg;
    }
}
</style>