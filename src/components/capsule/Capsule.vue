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
@use "../../assets/global_theme.scss" as glob;

.capsule-border {
    display: inline-block;
    border: 1px solid glob.$border-bright;
    margin: 20px;
    padding: 20px;
    background-color: transparentize($color: glob.$background-dark, $amount: 0.5);
    transition: padding glob.$transition-slow;
}

@media (min-width: glob.$mediaMd) {
    .capsule-border {
        padding: 30px;
    }
}

@media (min-width: glob.$mediaLg) {
    .capsule-border {
        padding: 40px;
    }
}
</style>