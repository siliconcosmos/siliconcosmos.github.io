<script setup lang="ts">
import { ref, type Ref } from 'vue';
import { useSeoMeta } from '@unhead/vue'
import * as Vue from 'vue';
import Footer from '../components/Footer.vue';
import Body from '../components/Body.vue';
import Capsule from '../components/capsule/Capsule.vue';
import CapsuleLayout from '../components/capsule/CapsuleLayout.vue';
import QuickRefHeader from '../components/quickref/QuickRefHeader.vue';

useSeoMeta({
    title: 'QuickRef - Release Notes',
    description: 'QuickRef - a free drawing reference tool for artists',
    ogDescription: 'QuickRef - a free drawing reference tool for artists',
    ogTitle: 'QuickRef',
    ogImage: "https://siliconcosmos.com/meta/images/qr_card_thumb.jpg",
    ogUrl: 'https://quickref.app',
    twitterCard: 'summary_large_image',
});
</script>

<template>
    <div class="sc-wrapper">
        <div class="sc-header">
            <QuickRefHeader>
            </QuickRefHeader>
        </div>

        <div class="sc-content">

            <Body>
                <div class="main-column">
                    <div class="centralize page-heading">
                        <h1>QuickRef - Release Notes</h1>                        
                    </div>

                    <Capsule id="v0_6_1" class="notes-tile">
                        <template #header>
                            <h2>// <a href="#v0_6_1" class="sc-color-text">v0.6.1 - Feature Update</a></h2>
                        </template>

                        <p>The following changes have been made in this update:</p>
                        <ul>
                            <li>Fixed misaligned delete icons when libraries have long name text</li>
                            <li>Added a new settings panel for controlling application settings. 
                                <ul>
                                    <li>This replaces the old preferences dialog.</li>
                                </ul>
                            </li>
                            <li>Added an optional progress bar to the session player view
                                <ul>
                                    <li>The progress bar will visually display how much time is left on the countdown at the bottom of the window</li>
                                    <li>Enabled from the settings panel</li>
                                </ul>
                            </li>
                            <li>Added options for a chime sound to play at the beginning, middle, or end of each interval<ul>
                                    <li>Volume of the chime can also be controlled</li>
                                </ul>
                            </li>
                            <li>Added sliders to change the opacity of the toolbars during a session
                                <ul>
                                    <li>The toolbar background can be configured separately from the text and buttons</li>
                                    <li>The toolbars will still become fully opaque when hovered over.</li>
                                </ul>
                            </li>
                            <li>It is now possible to sensibly edit a library&#39;s name and folder path without having to delete it
                                <ul>
                                    <li>No support for regenerating thumbnails at this time. If you want to regenerate the preview image you will need to delete the library and re-create it.</li>
                                </ul>
                            </li>
                        </ul>
                        <p>Virus Total: 
                            <a target="_blank" href="https://www.virustotal.com/gui/file/d47247778ed25cb26bbbedcc662923f3ee662d4f9f5bee5f0e03e8e8ecf6d8de?nocache=1">Windows</a>
                        </p>
                    </Capsule>

                    <Capsule id="v0_5_7" class="notes-tile">
                        <template #header>
                            <h2>// <a href="#v0_5_7" class="sc-color-text">v0.5.7 - Initial Public Release</a></h2>
                        </template>
                        <p>This is the initial release version of QuickRef. The app is stable enough for general use, but is still considered to be in beta.</p>
                    </Capsule>

                </div>
                <template #toes>
                    <Footer></Footer>
                </template>
            </Body>
        </div>

    </div>
</template>

<style scoped lang="scss">
@use "../assets/global.scss" as glob;

.page-heading {
    padding-top: glob.$whitespace-md;
    text-shadow: #000 0px 5px 10px;
}

.notes-tile {
    word-wrap: break-word;
}

h2 {
    padding-bottom: glob.$whitespace-sm;
}
</style>