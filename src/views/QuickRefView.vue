<script setup lang="ts">
import { ref, type Ref } from 'vue';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import Capsule from '../components/capsule/Capsule.vue';
import CapsuleLayout from '../components/capsule/CapsuleLayout.vue';

</script>

<template>
    <div class="sc-wrapper">
        <div class="sc-header">
            <Header>                
                <span class="capsule-img" style="margin-right: 5px; width:25px; display: inline-block;">
                    <img src="../assets/quickref_logo.svg" />
                </span>
                <h1>quickref</h1>
                
                <template #right>
                    <nav>
                        <RouterLink class="sc-color-primary" to="/">Home</RouterLink> | 
                        <RouterLink to="/about">About</RouterLink>
                    </nav>
                </template>
            </Header>
        </div>
        
        <div class="sc-content">
            <div class="main-column">

                <CapsuleLayout class="eyecatch">
                    <template #left>
                        <div class="eyecatch-text">
                            <h2 class="sc-color-text">Gesture drawing with your own reference images!</h2>
                        </div>
                    </template>

                    <template #center>
                        <div class="eyecatch-carousel">
                            Add image carousel here
                        </div>
                    </template>
                </CapsuleLayout>

                <Capsule class="eyecatch">
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
            <Footer></Footer>
        </div>
        
        <div class="sc-footer">
        </div>

    </div>
</template>

<style scoped lang="scss">
@use "../assets/global.scss" as glob;

.eyecatch {
    width: 100%;
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
    background-color: darkgray;
    min-width: 400px;
    min-height: 400px;
    width: auto; 
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