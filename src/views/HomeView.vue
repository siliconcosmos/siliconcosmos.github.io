<script setup lang="ts">
import { ref, type Ref } from 'vue';
import { useSeoMeta } from '@unhead/vue'
import Header from '../components/Header.vue';
import Body from '../components/Body.vue';
import Capsule from '../components/capsule/Capsule.vue';

useSeoMeta({
    title: 'silicon cosmos',
    description: 'Silicon Cosmos is creating software to make your experience learning to draw better',
    ogDescription: 'Silicon Cosmos is creating software to make your experience learning to draw better'
});
</script>

<template>
    <div class="sc-wrapper">
        <div class="sc-header">
            <Header>
                <h1>silicon cosmos</h1>
                <template #right>
                    <!-- <nav>
                        <RouterLink to="/">Home</RouterLink> | 
                        <RouterLink to="/about">About</RouterLink>
                    </nav> -->
                </template>
            </Header>
        </div>
        
        <div class="sc-content">
            <Body>
                <div class="main-column">
            
                    <Capsule>
                        <template #header>
                            <!-- <h2>// <router-link class="sc-color-text" to="/quickref">quickref</router-link></h2> -->
                            <!-- <h2>// <nuxt-link class="sc-color-text" to="/quickref">quickref</nuxt-link></h2> -->
                            <h2>// <NuxtLink class="sc-color-text" to="/quickref">quickref</NuxtLink></h2>
                            <!-- <NuxtLink to="/">Home page</NuxtLink> -->
                        </template>
                        <template #footer>
                            <div style="text-align:right;">
                                <router-link to="/quickref">learn more...</router-link>
                                <!-- <nuxt-link to="x/quickref">learn more...</nuxt-link> -->
                            </div>
                        </template>
                        <template #oLeft>
                            <div class="centralize">
                                <div class="project-img quickref-img">
                                    <!-- link removed becasue nuxt broke my css image scaling -->
                                    <nuxt-link class="no-decoration" to="/quickref">
                                        <img src="~/assets/quickref_logo.svg"/>
                                    </nuxt-link>
                                    <!-- <img src="~/assets/quickref_logo.svg"/> -->
                                </div>
                            </div>
                        </template>
                        <div >
                            <p>QuickRef is a timer-based drawing reference tool for gesture drawing and sketching.
                            Use it to do long form timed practice, warm up sessions, or focused gesture practice. 
                            Unlike other similar tools, QuickRef is specifically designed for using your <i>own</i> reference images on <i>your</i> computer.</p>
                            <br><p>No static libraries, no mandatory subscription, no internet connection.</p>
                        </div>
                    </Capsule>

                    <Capsule>
                        <template #header>
                            <h2>// <a class="sc-color-text" href="https://moondial.siliconcosmos.com">moodial timer</a></h2>
                        </template>
                        <template #footer>
                            <div style="text-align:left;">
                                <a href="https://github.com/siliconcosmos/moondial" target="_blank"><i class="fa-brands fa-github"></i> github</a>
                                |
                                <a href="https://www.npmjs.com/package/moondial" target="_blank"><i class="fa-brands fa-npm"></i> install</a>
                                | 
                                <a href="https://moondial.siliconcosmos.com">learn more...</a>
                            </div>
                        </template>
                        <template #oRight>
                            <div class="centralize">
                                <div class="project-img moondial-img">
                                    <!-- link removed becasue nuxt broke my css image scaling -->
                                    <a class="no-decoration" href="https://moondial.siliconcosmos.com">
                                        <img src="../assets/moon.svg" class="moon-yellow"/>
                                    </a>
                                    <!-- <img src="../assets/moon.svg" class="moon-yellow"/> -->
                                </div>
                            </div>
                        </template>
                        Moondial timer is a tiny stopwatch, chronometer, and countdown timer library with support for millisecond precision built in TypeScript. 
                        Originally built as part of QuickRef, moondial provides high precision event-based clocks with a simple API.
                    </Capsule>
                </div>

            </Body>
        </div>
            
        <div class="sc-footer">
        </div>

    </div>
</template>

<style scoped lang="scss">
@use "~/assets/global.scss" as glob;

.moon-yellow {
    filter: brightness(0) saturate(100%) invert(99%) sepia(57%) saturate(1438%) hue-rotate(18deg) brightness(98%) contrast(106%);
}

.project-img {
    width: 128px;
    height: 128px;
    transition: glob.$transition-quick;

    a > img {
        width: 100%;
        height: 100%;
        max-width: 256px;
        max-height: 256px;
        object-fit: contain;
        display: inline-block;
    }
}
.centralize {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
}
.no-decoration {
    text-decoration: none;
}

@media (min-width: glob.$media-sm) {
    .project-img {
        width: 192px;
        height: 192px;
    }
    .quickref-img {
        margin-right: glob.$whitespace-sm;
    }
    .moondial-img {
        margin-left: glob.$whitespace-sm;
    }
}
@media (min-width: glob.$media-lg) {
    .project-img {
        width: 256px;
        height: 256px;
    }
}
</style>