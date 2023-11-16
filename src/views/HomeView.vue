<script setup lang="ts">
import { ref, type Ref } from 'vue';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import Body from '../components/Body.vue';
import Capsule from '../components/capsule/Capsule.vue';

let counter:Ref<number> = ref(0);

function increment() {
    counter.value++;
}
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
                            <h2>// quickref</h2>
                        </template>
                        <template #footer>
                            <div style="text-align:right;">
                                <router-link to="/+/quickref">read more...</router-link>
                            </div>
                        </template>
                        <template #cLeft>
                            <div style="width: 100%; text-align: center;">
                                <div class="project-img quickref-img">
                                    <img src="../assets/quickref_logo.svg" />
                                </div>
                            </div>
                        </template>
                        <div >
                            I'm baby put a bird on it vaporware succulents enamel pin yes plz. Helvetica ennui offal vice flannel gochujang humblebrag blue bottle ethical <a>drinking vinegar tilde bespoke</a> twee shaman raclette. Poutine selvage street art squid, tote bag beard listicle plaid kale chips. Pug yr cliche, vegan church-key coloring book hexagon. Tattooed waistcoat pork belly big mood. Franzen bespoke jawn jianbing woke, skateboard bitters hell of. Mukbang cornhole green juice jawn slow-carb tousled vibecession dreamcatcher.
                        </div>
                    </Capsule>

                    <Capsule>
                        <template #header>
                            <h2>// moodial timer</h2>
                        </template>
                        <template #footer>
                            <div style="text-align:left;"><a>read more...</a></div>
                        </template>
                        <template #cRight>
                            <div class="project-img moondial-img">
                                <img src="../assets/moon.svg" class="moon-yellow"/>
                            </div>
                        </template>
                        Moondial timer is a tiny stopwatch, chronometer, and countdown timer library with millisecond precision built in TypeScript.
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

.moon-yellow {
    filter: brightness(0) saturate(100%) invert(99%) sepia(57%) saturate(1438%) hue-rotate(18deg) brightness(98%) contrast(106%);
}

.project-img {
    width: 128px;
    height: 128px;
    transition: glob.$transition-quick;

    img {
        width: 100%;
        height: 100%;
        max-width: 256px;
        max-height: 256px;
        object-fit: contain;
    }
}

@media (min-width: glob.$media-md) and (min-height: glob.$media-md) {
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