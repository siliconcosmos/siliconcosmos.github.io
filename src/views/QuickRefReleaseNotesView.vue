<script setup lang="ts">
import { ref, type Ref } from 'vue';
import { useSeoMeta } from '@unhead/vue'
import * as Vue from 'vue';
import Footer from '../components/Footer.vue';
import Body from '../components/Body.vue';
import Capsule from '../components/capsule/Capsule.vue';
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
                    <div class="centralize page-heading sc-header-shadow">
                        <h1>QuickRef - Release Notes</h1>
                    </div>

                    <Capsule id="v0_8_8" class="notes-tile">
                        <template #header>
                            <h2>// <a href="#v0_8_8" class="sc-color-text">v0.8.8</a></h2>
                        </template>
                        <ul>
                            <li>Feature: Prevent the screen from turning off when the user is in a session. This can be disabled in the settings menu.</li>
                            <li>Feature: Added the ability to regenerate the library thumbnail when editing or adding new libraries</li>
                            <li>Feature: Added a button to the library menu to start a new session with the selected library</li>
                            <li>Feature: Revamp the session configuration page and add an option to limit the number of intervals</li>
                            <li>Feature: Display a finished session message after the last interval</li>
                            <li>Bug: Fixed an issue where session chimes would play during breaks</li>
                            <li>Improvement: Optimised the way large images are loaded to improve UI responsiveness</li>
                            <li>Improvement: Add a message on screen when the session is paused to make it more obvious</li>
                        </ul>
                    </Capsule>

                    <Capsule id="v0_7_11" class="notes-tile">
                        <template #header>
                            <h2>// <a href="#v0_7_11" class="sc-color-text">v0.7.11</a></h2>
                        </template>
                        <ul>
                            <li>Feature: Open Library Folder - added an option on the libraries view to open the source folder of a library</li>
                            <li>Fix: Update status messages should now be translated properly</li>
                            <li>Fix: Minor performance optimization</li>
                        </ul>
                    </Capsule>

                    <Capsule id="v0_7_10" class="notes-tile">
                        <template #header>
                            <h2>// <a href="#v0_7_10" class="sc-color-text">v0.7.10</a></h2>
                        </template>
                        <ul>
                            <li>Feature: Copy Image - Added a menu option to copy the currently displayed image in the session player view, allowing the user to paste into their preferred graphics software.</li>
                            <li>Bug Fix: Fixed an issue where the libraries view would randomly sort incorrectly. It should now always be alphabetical.</li>
                        </ul>
                    </Capsule>

                    <Capsule id="v0_7_9" class="notes-tile">
                        <template #header>
                            <h2>// <a href="#v0_7_9" class="sc-color-text">v0.7.9 - MacOS Support and Auto-Updater</a></h2>
                        </template>
                        <p>This update has been in progress since before Christmas, but it&#39;s finally ready to share! The most exciting changes include MacOS support and a newly added auto-updater! This build of QuickRef involved a
                            nearly complete rewrite of the back-end of the app; switching to a new development framework in order to decrease the size of the app. This rewrite also made it easier to support MacOS and implement the updater!
                            Read below for specific changes:</p>
                        <ul>
                            <li>QuickRef is now available for MacOS!</li>
                            <li>QuickRef now has a built in auto-updater! This should be the last manual update you have to download! <ul>
                                    <li>After this version QuickRef will let you know whenever a new update is available and will be able to automatically download it.</li>
                                </ul>
                            </li>
                            <li>Massive decrease in overall install size! <ul>
                                    <li>On Windows QuickRef is down from almost 330MB installed to just 16MB installed! That&#39;s roughly 5% of its original size!</li>
                                </ul>
                            </li>
                            <li>Improvements to media loading. QuickRef should now handle very large folders of images better.</li>
                            <li>Added a saving indicator when saving or editing libraries.</li>
                        </ul>
                    </Capsule>

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
                        <!-- <p>Virus Total: 
                            <a target="_blank" href="https://www.virustotal.com/gui/file/d47247778ed25cb26bbbedcc662923f3ee662d4f9f5bee5f0e03e8e8ecf6d8de?nocache=1">Windows</a>
                        </p> -->
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
}

.notes-tile {
    word-wrap: break-word;
}

h2 {
    padding-bottom: glob.$whitespace-sm;
}
</style>