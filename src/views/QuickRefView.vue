<script setup lang="ts">
import { useSeoMeta } from '@unhead/vue';
import Body from '../components/Body.vue';
import Capsule from '../components/capsule/Capsule.vue';
import CapsuleLayout from '../components/capsule/CapsuleLayout.vue';
import Footer from '../components/Footer.vue';
import QuickRefHeader from '../components/quickref/QuickRefHeader.vue';

useSeoMeta({
    title: 'QuickRef - a free drawing reference timer for artists',
    description: 'Practice gesture drawing at speed with your own reference images!',
    ogDescription: 'Practice gesture drawing at speed with your own reference images!',
    ogTitle: 'QuickRef',
    ogImage: "https://siliconcosmos.com/meta/images/qr_card_thumb.jpg",
    ogImageAlt: "Eye-catch image for the QuickRef drawing reference application",
    ogUrl: 'https://quickref.app',
    twitterCard: 'summary_large_image',
    creator: "Silicon Cosmos Studios"
});

</script>

<template>
    <div class="sc-wrapper">
        <div class="sc-header">
            <QuickRefHeader>
                <template #right>
                    <!-- test -->
                </template>
            </QuickRefHeader>
        </div>

        <div class="sc-content">

            <Body>
                <div class="main-column">

                    <CapsuleLayout class="eyecatch">
                        <template #left>
                            <div class="eyecatch-text centralize">
                                <h1 class="sc-color-primary">Practice drawing at speed with your own reference images!</h1>
                            </div>
                        </template>

                        <template #center>
                            <div class="eyecatch-carousel centralize">
                                <NuxtImg src="/quickref/landing/quickref_mac_start.png" preset="screenshot"/>
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
                        <div class="key-grid">
                            <div class="tile-img">
                                <NuxtImg src="/quickref/landing/quickref_session_paused.png" preset="screenshot" alt="screenshot of a QuickRef session that is paused" />
                            </div>
                            <div class="tile-img">
                                <NuxtImg src="/quickref/landing/quickref_session_basic.png" preset="screenshot" alt="screenshot of a QuickRef session"/>
                            </div>
                            <div class="tile-img">
                                <NuxtImg src="/quickref/landing/quickref_session_menu.png" preset="screenshot" alt="screenshot of a QuickRef session that shows an open kebab menu"/>
                            </div>
                        </div>
                    </CapsuleLayout>

                    <Capsule>
                        <template #header>
                            <h1 class="centralize-h tile-heading">Create Reference Libraries</h1>
                        </template>
                        <template #left>
                            <div style="width:100%" class="centralize">
                                <div class="tile-img">
                                    <NuxtImg src="/quickref/landing/quickref_mac_libraries.png" preset="screenshot" />
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
                            <h1 class="centralize-h tile-heading">Configure Your Session</h1>
                        </template>
                        <template #left>
                            <div style="width:100%" class="centralize">
                                <div class="tile-img">
                                    <NuxtImg src="/quickref/landing/quickref_mac_session_config.png" preset="screenshot" />
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
                            <h1 class="centralize-h tile-heading">Practice Offline</h1>
                        </template>
                        <template #left>
                            <div style="width:100%" class="centralize">
                                <div class="tile-img">
                                    <NuxtImg src="/quickref/landing/quickref_clipstudio.jpg" preset="screenshot" />
                                </div>
                            </div>
                        </template>
                        <template #default>
                            <div class="centralize tile-body">
                                <p>
                                    With QuickRef you can take your practice offline.
                                    Use it in fullscreen mode with a regular sketchbook or pin the window overtop of your favourite drawing program.
                                    Use it for gesture drawing or longer figure studies, with full control over the images you study with!
                                </p>
                            </div>
                        </template>
                    </Capsule>

                    <Capsule>
                        <template #header>
                            <h1 class="centralize-h tile-heading">Customize</h1>
                        </template>
                        <template #left>
                            <div style="width:100%" class="centralize">
                                <div class="tile-img">
                                    <NuxtImg src="/quickref/landing/quickref_settings.png" preset="screenshot" />
                                </div>
                            </div>
                        </template>
                        <template #default>
                            <div class="centralize tile-body">
                                <div>
                                    <p>
                                        QuickRef offers many configuration settings to make the right practice experience for you.
                                        <ul>
                                            <li>Show a timer progress bar</li>
                                            <li>Play chimes to alert you when intervals change</li>
                                            <li>Change the visibility of toolbars</li>
                                            <li>And more!</li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                        </template>
                    </Capsule>

                    <Capsule id="download">
                        <template #header>
                            <h1 class="centralize-h tile-heading">Download</h1>
                        </template>
                        <template #footerr>
                            <!-- direct downloads coming soon... -->
                        </template>
                        <template #footer>
                            <div class="centralize-h">
                                <iframe frameborder="0" src="https://itch.io/embed/2362802?bg_color=222222&amp;fg_color=eeeeee&amp;link_color=b7ffe3&amp;border_color=363636" width="552" height="167">
                                    <a href="https://siliconcosmos.itch.io/quickref">QuickRef by Silicon Cosmos</a>
                                </iframe>
                            </div>
                        </template>

                        <!-- <div class="centralize tile-body"> -->
                        <div class="centralize" style="padding-bottom: 30px">
                            <div>
                                <p>QuickRef is available FREE for Windows and MacOS through itch.io</p>
                                <br />
                                <p>You can use it in these languages: English, Français, Español, Deutsch, Русский</p>
                                <br>
                                <p><nuxt-link to="/quickref/release-notes">Release Notes</nuxt-link> | <nuxt-link to="/quickref/faq">FAQ</nuxt-link></p>
                            </div>
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
    padding: 0px glob.$whitespace-sm 0px glob.$whitespace-sm;
}
.eyecatch-text {
    padding: glob.$whitespace-sm; 
    display: flex; 
    text-align: center; 
    justify-items: center;
    transition: all glob.$transition-slow;
    font-size: small;

    text-shadow: #000 0px 5px 10px;
}
.eyecatch-carousel {
    text-align: center;

    img {
        box-shadow: #111 0px 5px 20px; 
    }
}
.tagline-2 {
    // height: 175px;
    padding: glob.$whitespace-sm;
    text-shadow: #000 0px 5px 10px;
}
.cta-button {
    height: 50px;
    margin-bottom: glob.$whitespace-sm;
}

.key-capsule {
    width: 100%;
    padding: glob.$whitespace-sm;
    // padding: glob.$whitespace-sm glob.$whitespace-sm 0 glob.$whitespace-sm;
}

.key-grid {
    display: grid;
    column-gap: glob.$whitespace-sm;
    row-gap: glob.$whitespace-sm;
    place-items: center center;

    div img {
        box-shadow: #111 0px 5px 20px; 
    }
}

.tile-heading {
    font-size: 1.25em;
    padding-bottom: 15px;
}
.tile-body {
    padding-top: glob.$whitespace-sm;
    text-align: left;
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
    object-fit: contain;
}

@media (min-width: glob.$media-sm) {
    .tile-heading {
        font-size: 1.5em;
    }
}

@media (min-width: glob.$media-md) {
    .eyecatch {
        padding: glob.$whitespace-sm;
        padding-bottom: 0px;
    }
    .eyecatch-text {
        max-width: 450px; 
        padding: glob.$whitespace-lg;
        font-size: large;
    }
    .tagline-2 {
        // height: 100px;
        padding: glob.$whitespace-md;
    }
    .key-grid {
        grid-template-columns: 1fr 1fr 1fr;
    }
    .tile-heading {
        font-size: 1.75em;
    }
    .tile-body {
        padding-top: unset;
        padding-left: glob.$whitespace-md;
        line-height: 2em;
    }
}
@media (min-width: glob.$media-lg) {
    .eyecatch-text {
        max-width: 600px; 
        font-size: x-large;
    }
    .tile-heading {
        font-size: 2em;
    }
    .tile-body {
        padding-left: glob.$whitespace-lg;
    }
}

</style>