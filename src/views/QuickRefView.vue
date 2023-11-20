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
                </template>
            </Header>
        </div>
        
        <div class="sc-content">
            <Body>
                <div class="main-column">

                    <CapsuleLayout class="eyecatch">
                        <template #left>
                            <div class="eyecatch-text centralize">
                                <h1 class="sc-color-text">Practice gesture drawing with your own reference images!</h1>
                            </div>
                        </template>

                        <template #center>
                            <div class="eyecatch-carousel">
                                <div class="tile-im">
                                    <img src="@assets/quickref_images/QuickRef_6mACsYjRMX.png" />
                                </div>
                                <!-- <ImageCarousel /> -->
                                <!-- <ImageCarousel :images="carouselImages" /> -->
                            </div>
                        </template>
                    </CapsuleLayout>

                    <div class="centralize tagline-2">
                        <h2 class="sc-color-text">No static libraries, no mandatory subscription, no internet connection. </h2>
                    </div>

                    <div class="centralize cta-button">
                        <a class="sc-button sc-color-secondary" href="#download">Download Now!</a> 
                    </div>

                    <CapsuleLayout class="key-capsule">
                        <div class="key-grid" >
                            <div class="tile-img">
                                <img src="@assets/quickref_images/QuickRef_cMh9PbHMQQ.png" />
                            </div>
                            <div class="tile-img">
                                <img src="@assets/quickref_images/QuickRef_4iiwCeRs6I.png" />
                            </div>
                            <div class="tile-img">
                                <img src="@assets/quickref_images/QuickRef_cZHrrhnyko.png" />
                            </div>
                        </div>
                    </CapsuleLayout>
                        
                    <Capsule>
                        <template #header>
                            <h1 class="centralize tile-heading">Create reference libraries</h1>
                        </template>
                        <template #left>
                            <div style="width:100%" class="centralize">
                                <div class="tile-img">
                                    <img src="@assets/quickref_images/QuickRef_3F4ZOCbev6.png" />
                                </div>
                            </div>
                        </template>
                        <div class="centralize tile-body">
                            <p>
                                QuickRef allows you to use the images you already have. 
                                No need to upload or download anything. 
                                Organize the photos with the file manager that's already on your computer. 
                                Simply place some photos into a folder on your computer and create a library in QuickRef. 
                            </p>
                        </div>
                    </Capsule>
                    
                    <Capsule>
                        <template #header>
                            <h1 class="centralize tile-heading">Configure your session</h1>
                        </template>
                        <template #left>
                            <div style="width:100%" class="centralize">
                                <div class="tile-img">
                                    <img src="@assets/quickref_images/QuickRef_CIxOVuYi4I.png" />
                                </div>
                            </div>
                        </template>
                        <div class="centralize tile-body">
                            <p>
                                Similar to other tools online, a session in QuickRef is made up of intervals.

                                Simply select a reference library, decide how long you want each image to display and
                                how much time to rest between intervals. 

                                Then start the session!
                            </p>
                        </div>
                    </Capsule>

                    <Capsule>
                        <template #header>
                            <h1 class="centralize tile-heading">Practice Offline</h1>
                        </template>
                        <template #left>
                            <div style="width:100%" class="centralize">
                                <div class="tile-img">
                                    <img src="@assets/quickref_images/CLIPStudioPaint_wKbskyNCLX.jpg" />
                                </div>
                            </div>
                        </template>
                        <template #default>
                            <div class="centralize tile-body">
                                <p>
                                    With QuickRef you can take your practice offline.
                                    Use it in fullscreen mode with a regular sketchbook or pin the window overtop of your favourite drawing program.
                                </p>
                            </div>
                        </template>
                        
                    </Capsule>

                    <Capsule id="download">
                        <template #header>
                            <h1 class="centralize tile-heading">Download</h1>
                        </template>
                        <template #footerr>
                            <!-- direct downloads coming soon... -->
                        </template>
                        <template #footer>
                            <div class="centralize">                                
                                <iframe frameborder="0" src="https://itch.io/embed/2362802?bg_color=222222&amp;fg_color=eeeeee&amp;link_color=b7ffe3&amp;border_color=363636" width="552" height="167"><a href="https://siliconcosmos.itch.io/quickref">QuickRef by Silicon Cosmos</a></iframe>
                            </div>
                        </template>

                        <div class="centralize tile-body">
                            <p>
                                QuickRef is available FREE for your windows laptop or desktop through itch.io
                            </p>
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
    padding: glob.$whitespace-sm; 
    display: flex; 
    text-align: center; 
    justify-items: center;
    transition: all glob.$transition-slow;
    font-size: small;
}
.eyecatch-carousel {
    text-align: center; 
}
.tagline-2 {
    height: 200px;
    padding: glob.$whitespace-sm;
}
.cta-button {
    height: 50px;
    margin-bottom: glob.$whitespace-sm;
}

.key-capsule {
    width: 100%;
    padding: glob.$whitespace-sm glob.$whitespace-sm 0 glob.$whitespace-sm;
}

.key-grid {
    display: grid;
    column-gap: glob.$whitespace-sm;
    row-gap: glob.$whitespace-sm;
    place-items: center center;
}

.tile-heading {
    padding-bottom: 15px;
}
.tile-body {
    padding: glob.$whitespace-sm;
}
.tile-img {
    display: inline-block;
    max-height: 350px; 
    max-width: 350px;
    transition: glob.$transition-quick;
}

.header-img {
    display: inline-block;
    height: 30px; 
    width: 100px; 
    transform: translate(0%, 8%);
    transition: glob.$transition-quick;
}

img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

@media (min-width: glob.$media-md) and (min-height: glob.$media-md) {
    .eyecatch-text {
        max-width: 450px; 
        padding: glob.$whitespace-lg;
        font-size: large;
    }
    .tagline-2 {
        height: 100px;
        padding: glob.$whitespace-md;
    }
    .key-grid {
        grid-template-columns: 1fr 1fr 1fr;
    }
}
@media (min-width: glob.$media-lg) {
    .eyecatch-text {
        max-width: 600px; 
        font-size: x-large;
    }
}

</style>