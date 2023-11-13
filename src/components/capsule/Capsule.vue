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
.capsule-border {
    display: inline-block;
    border: 1px solid #606060;
    margin: 20px;
    padding: 10px;
    // background-color: #111;
    // background-color: rgba(17, 17, 17, .2);
    background-color: transparentize($color: #111, $amount: 0.5);
}
</style>