<script setup lang="ts">
import { ref, type Ref } from 'vue';
import { useSeoMeta } from '@unhead/vue'
import * as Vue from 'vue';
import Footer from '../components/Footer.vue';
import Body from '../components/Body.vue';
import Capsule from '../components/capsule/Capsule.vue';
import Expander from '../components/expander/Expander.vue';
import QuickRefHeader from '../components/quickref/QuickRefHeader.vue';

useSeoMeta({
    title: 'QuickRef - FAQ',
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
                        <h1>QuickRef - FAQ</h1>                        
                    </div>

                    <Capsule>
                        <!-- <template #header> -->
                            <Expander>
                                Q: Is water wet?
                                <template #content>
                                    this some body
                                    <p>text</p>
                                    <p>text</p>
                                    <p>text</p>
                                    <p>text</p>
                                    <p>text</p>
                                    <p>text</p>
                                    <p>text</p>
                                    <p>text</p>
                                    <p>text</p>
                                    <p>text</p>
                                    <p>text</p>
                                    <p>text</p>
                                    <p>text</p>
                                    <p>text</p>
                                    <p>text</p>
                                    <p>text</p>
                                </template>
                            </Expander>
                        <!-- </template> -->
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
    // text-shadow: #000 0px 5px 10px;
}

.notes-tile {
    word-wrap: break-word;
}

h2 {
    padding-bottom: glob.$whitespace-sm;
}
</style>