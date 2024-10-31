<script setup lang="ts">
    import { ref, type Ref } from 'vue';
    import { useSeoMeta } from '@unhead/vue'
    import Footer from '../components/Footer.vue';
    import Body from '../components/Body.vue';
    import Capsule from '../components/capsule/Capsule.vue';
    import Expander from '../components/expander/Expander.vue';
    import QuickRefHeader from '../components/quickref/QuickRefHeader.vue';

    useSeoMeta({
        title: 'QuickRef - FAQ',
        description: 'QuickRef - a free drawing reference timer for artists',
        ogDescription: 'QuickRef - a free drawing reference timer for artists',
        ogTitle: 'QuickRef',
        ogImage: "https://siliconcosmos.com/meta/images/qr_card_thumb.jpg",
        ogUrl: 'https://quickref.app',
        twitterCard: 'summary_large_image',
    });

    const urlHash:Ref<string> = ref("");

    onNuxtReady(async () => {
        const route = useRoute();
        urlHash.value = route.hash.substring(1);

        setTimeout(() => {
            const jumpTo = document.getElementById(urlHash.value);
            jumpTo?.scrollIntoView();
        }, 500);
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
                        <Expander>
                            Q: Is there a mobile version of QuickRef?
                            <template #content>
                                <p>I would like to have a mobile version of QuickRef for iOS and Android in the future, but at this time there is no mobile version. I am focused on the desktop versions for now.</p>
                            </template>
                        </Expander>
                    </Capsule>

                    <Capsule id="windows_install">
                        <Expander :do-expand="urlHash === 'windows_install'">
                            Q: Why can't I install on Windows?
                            <template #content>
                                <p>Windows may warn you that the app is from an unknown publisher. This is because the app is not yet digitally signed and software signing certificates cost $500-$1000 USD. I can't justify that cost for a free app, so for now you may need to dismiss the SmartScreen warning. I'm sorry about this inconvenience! </p>
                                <br>
                                <p>1) Click "More info"</p>
                                <div class="centralize-h img-cell">
                                    <img src="~/assets/quickref/faq/windows-smart-screen-1.png" />
                                </div>
                                <p>2) Click "Run anyway"</p>
                                <div class="centralize-h img-cell">
                                    <img src="~/assets/quickref/faq/windows-smart-screen-2.png" />
                                </div>
                                <br>
                                <p>Windows should now launch the installer and you should be able to install the program.</p>                                    
                            </template>
                        </Expander>
                    </Capsule>

                    <Capsule id="mac_install">
                        <Expander :do-expand="urlHash === 'mac_install'">
                            Q: Why won't the app open on MacOS?
                            <template #content>
                                <p>The app isn't digitally signed on MacOS yet, so MacOS isn't going to let you run the app by default. The first time you run it you will have to follow these steps to get the app to run:</p>
                                <br>
                                <p>1) Run the app and click "cancel" in the popup message</p>                            
                                <div class="centralize-h img-cell">
                                    <img src="~/assets/quickref/faq/mac-unknown-dev-1.png" />
                                </div>
                                <p>2) Open System Settings > Privacy & Security. Scroll down to find a message indicating that running the app was blocked. Click "Open Anyway"</p>
                                <div class="centralize-h img-cell">
                                    <img src="~/assets/quickref/faq/mac-unknown-dev-2.png" />
                                </div>
                                <p>3) Click "Open" in the warning popup</p>
                                <div class="centralize-h img-cell">
                                    <img src="~/assets/quickref/faq/mac-unknown-dev-3.png" />
                                </div>
                                <br>
                                <p>The app should now open properly when you try to launch it.</p>                                
                            </template>
                        </Expander>
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
    margin-bottom: glob.$whitespace-sm;
}

p {
    margin-top: glob.$whitespace-xs;
    margin-bottom: glob.$whitespace-xs;
}

.img-cell {
    transition: glob.$transition-quick;

    img {
        width: 100%;
        height: 100%;
        max-width: 512px;
        max-height: 512px;
        object-fit: contain;
        display: inline-block;
    }
}
</style>