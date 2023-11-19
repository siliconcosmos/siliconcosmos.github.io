<script setup lang="ts">
import { ref, type Ref } from 'vue';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import Body from '../components/Body.vue';
import Capsule from '../components/capsule/Capsule.vue';
import ImageCarousel from '../components/carousel/ImageCarousel.vue';
import CapsuleLayout from '../components/capsule/CapsuleLayout.vue';

const carouselImages = ref([
    '/src/assets/quickref_images/QuickRef_6mACsYjRMX.png', 
    // '/src/assets/quickref_images/QuickRef_cMh9PbHMQQ.png', 
    // '/src/assets/quickref_images/QuickRef_3F4ZOCbev6.png', 
    // '/src/assets/quickref_images/QuickRef_CIxOVuYi4I.png', 
    // '/src/assets/quickref_images/CLIPStudioPaint_wKbskyNCLX.jpg'
]);
// const carouselImages = ref([
//     '@assets/quickref_images/QuickRef_6mACsYjRMX.png', 
//     '@assets/quickref_images/QuickRef_cMh9PbHMQQ.png', 
//     '@assets/quickref_images/QuickRef_3F4ZOCbev6.png', 
//     '@assets/quickref_images/QuickRef_CIxOVuYi4I.png', 
//     '@assets/quickref_images/CLIPStudioPaint_wKbskyNCLX.jpg'
// ]); 

</script>

<template>
    <div class="sc-wrapper">
        <div class="sc-header">
            <Header>                
                <span class="header-img">
                    <img src="../assets/quickref_logotype.svg" />
                </span>
                <!-- <h1>quickref</h1> -->
                
                <template #right>
                    <!-- <nav>
                        <RouterLink class="sc-color-primary" to="/">Home</RouterLink> | 
                        <RouterLink to="/about">About</RouterLink>
                    </nav> -->
                </template>
            </Header>
        </div>
        
        <div class="sc-content">
            <Body>
                <div class="main-column">

                    <CapsuleLayout class="eyecatch">
                        <template #left>
                            <div class="eyecatch-text centralize">
                                <h2 class="sc-color-text">Gesture drawing with your own reference images!</h2>
                            </div>
                        </template>

                        <template #center>
                            <div class="eyecatch-carousel">
                                <!-- <ImageCarousel /> -->
                                <ImageCarousel :images="carouselImages" />
                            </div>
                        </template>
                    </CapsuleLayout>

                    <Capsule >
                        <template #header>
                            <h2>Download</h2>
                        </template>
                        <template #footer>
                            direct downloads coming soon...
                        </template>
                        <template #right>                        
                            <iframe frameborder="0" src="https://itch.io/embed/2362802?linkback=true&amp;bg_color=222222&amp;fg_color=eeeeee&amp;link_color=b7ffe3&amp;border_color=363636" width="325" height="167"><a href="https://siliconcosmos.itch.io/quickref">QuickRef by Silicon Cosmos</a></iframe>
                        </template>
                        <div >
                            Available for your windows laptop or desktop 
                        </div>
                    </Capsule>

                </div>
                <template #toes>
                    <Footer></Footer>
                </template>
            </Body>
        </div>
        
        <div class="sc-footer">
        </div>

    </div>
</template>

<style scoped lang="scss">
@use "../assets/global.scss" as glob;

.eyecatch {
    width: 100%;
    padding: 20px;
}
.eyecatch-text {
    padding: 40px; 
    display: flex; 
    text-align: center; 
    justify-items: center;
    transition: all glob.$transition-slow;
}
.eyecatch-carousel {
    text-align: center; 
    // background-color: #414141;
    background-color: scale-color($color: glob.$background-dark, $alpha: -50%);
    min-width: 325px;
    min-height: 350px;
    // width: auto; 
    // height: 100%;
    border: 1px solid glob.$border-dim;
}
.header-img {
    display: inline-block;
    height: 30px; 
    width: 100px; 
    transform: translate(0%, 8%);
    transition: glob.$transition-quick;

    img {
        width: 100%;
        height: 100%;
        max-width: 256px;
        max-height: 256px;
        object-fit: contain;
    }
}

@media (min-width: glob.$media-md) {
    .eyecatch-text {
        max-width: 300px; 
    }
}
@media (min-width: glob.$media-lg) {
    .eyecatch-text {
        max-width: 500px; 
    }
}

</style>