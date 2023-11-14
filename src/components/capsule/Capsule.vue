<script setup lang="ts">
import CapsuleLayout from './CapsuleLayout.vue';
</script>

<template>
    <div >
        <div class="capsule-border">
            <CapsuleLayout>
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
                
                <template #cLeft>
                    <slot name="cLeft"></slot>
                </template>
                <template #cRight>
                    <slot name="cRight"></slot>
                </template>

                <slot></slot>
                
            </CapsuleLayout>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use "../../assets/global.scss" as glob;

.capsule-wrapper {        
    text-align: justify;
}

.capsule-border {
    // display: inline-block;
    border: 1px solid glob.$border-dim;
    margin: glob.$whitespace-md glob.$whitespace-md 0 glob.$whitespace-md;
    padding: glob.$whitespace-sm;
    background-color: transparentize($color: glob.$background-dark, $amount: 0.5);
    transition: padding glob.$transition-slow;
}

@media (min-width: glob.$media-md) {
    .capsule-border {
        padding: glob.$whitespace-md;
    }
}

@media (min-width: glob.$media-lg) {
    .capsule-border {
        padding: glob.$whitespace-lg;
    }
}
</style>