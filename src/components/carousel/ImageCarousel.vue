<script setup lang="ts">
import CapsuleLayout from '../capsule/CapsuleLayout.vue';
import NoWrapCapsuleLayout from '../capsule/NoWrapCapsuleLayout.vue';
</script>

<template>
    <div class="carousel-root">
        <NoWrapCapsuleLayout class="expand-layout">
            <template #oLeft>
                <div class="centralize">
                    <i class="fa-solid fa-caret-left fa-2xl"></i>
                    <!-- &nbsp; -->
                </div>
            </template>
            <template #oRight>
                <div class="centralize">
                    <!-- &nbsp; -->
                    <i class="fa-solid fa-caret-right fa-2xl"></i>
                </div>
            </template>
            Add image carousel here
        </NoWrapCapsuleLayout>
    </div>
</template>

<style scoped lang="scss">
@use "../../assets/global.scss" as glob;

.carousel-root {
    // display: block;
    // position: relative;
    height: 100%;
}

:deep(.expand-layout) {
    height: 100%;
    width: 100%;
}

.centralize {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
}
</style>