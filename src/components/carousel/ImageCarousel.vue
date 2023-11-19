<script setup lang="ts">
import CapsuleLayout from '../capsule/CapsuleLayout.vue';
import NoWrapCapsuleLayout from '../capsule/NoWrapCapsuleLayout.vue';

// export interface ImageCarouselProps {
//     images: string[]
// }
type ImageCarouselProps = {
    images: string[]
}

const props = defineProps<ImageCarouselProps>();
// const props = defineProps<{ images:string[] }>();
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
            <!-- Add image carousel here -->
            <div class="centralize">

                <div v-for="img in images" :key="img" class="carousel-img">
                    <img :src="img" />
                </div>
            </div>
            <!-- <div class="carousel-img">
                <img :src="img" v-for="img in images" :key="img"/>
            </div> -->
            <!-- <img src="@assets/quickref_images/QuickRef_6mACsYjRMX.png" /> -->
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

.carousel-img {
    // display: block;
    // // height: 100%;
    // // width: 100%;
    min-height: 200px;
    min-width: 200px;
    // transform: translate(0%, 8%);
    // transition: glob.$transition-quick;

    // img {
    //     width: 100%;
    //     height: 100%;
    //     object-fit: contain;
    // }

    text-align: center;
    margin:auto;
    // max-width: 100vw;
    // max-height: 100vh;
    max-width: 100%;
    max-height: inherit;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
}
</style>