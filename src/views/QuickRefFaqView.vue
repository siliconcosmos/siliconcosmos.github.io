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
                            <h2>Q: Is this a trick? Why is this free?</h2>
                            <template #content>
                                <p>I am not a big tech company. I have no interest in tracking you or harvesting your data. I just want to help people learn to draw faster. QuickRef is free, because that will allow it to be used by the largest number of people. Many great softwares are free, such as Krita or Blender. QuickRef is not open-source like them, but it is still free like them. No strings attached. No tracking. You are not a product to me.</p>

                                <p>If you choose to purchase QuickRef through itch.io, thank you very much. That's very much appreciated.
                                However, I only ask that if you enjoy using QuickRef, please let me know! I wont know if you don't tell me directly 😊</p>
                            </template>
                        </Expander>
                    </Capsule>

                    <Capsule>
                        <Expander>
                            <h2>Q: Is there a mobile version of QuickRef?</h2>
                            <template #content>
                                <p>I would like to have a mobile version of QuickRef for iOS and Android in the future, but at this time there is no mobile version. I am focused on the desktop versions for now.</p>
                            </template>
                        </Expander>
                    </Capsule>

                    <Capsule>
                        <Expander>
                            <h2>Q: Why doesn't scrolling work with my tablet stylus?</h2>
                            <template #content>
                                <p>On MacOS, tap-and-drag scrolling is not supported, because MacOS does not support simulated touch actions. Instead, your pen tip is treated like a mouse cursor. You can click-and-drag on the scroll bar to scroll the view.</p>

                                <p>On Windows, some tablets support the Windows Ink API. With Windows Ink enabled, you can use tap-and-drag scrolling to scroll the view like you would on a smart phone. However, because the pen tip is tracked like a finger and not like a mouse, right-click menus will not work normally. Use the kebab menus (three vertical dots) to get around this. </p>
                                
                                <p>With Windows Ink disabled, tap-and-drag gestures will not work, but right-click menus will. If your tablet does not support Windows Ink—or you prefer not to use it—there is a toggle in the settings menu to make the scrollbars wider. That should make it easier to scroll the view. </p>
                            </template>
                        </Expander>
                    </Capsule>

                    <Capsule id="tablet_scrolling">
                        <Expander :do-expand="urlHash === 'tablet_scrolling'">
                            <h2>Q: Why are changes to settings not always remembered?</h2>
                            <template #content>
                                <p>Any changes to settings made through the toolbar at the top are considered temporary. They will take effect until you close QuickRef. If you want your changes to persist, use the Settings page. Any changes made through the Settings page will be saved and loaded the next time you use QuickRef.</p>
                            </template>
                        </Expander>
                    </Capsule>

                    <Capsule id="windows_install">
                        <Expander :do-expand="urlHash === 'windows_install'">
                            <h2>Q: Why can't I install on Windows?</h2>
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
                            <h2>Q: Why won't the app open on MacOS?</h2>
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
    font-size: 1em;
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

@media (min-width: glob.$media-sm) {
    h2 {
        font-size: 1.1em;
    }
}

@media (min-width: glob.$media-md) {
    h2 {
        font-size: 1.2em;
    }
}

@media (min-width: glob.$media-lg) {
    h2 {
        font-size: 1.25em;
    }
}
</style>