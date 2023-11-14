<script setup lang="ts">
import { ref, type Ref } from 'vue';
import TheWelcome from '../components/TheWelcome.vue';
import Capsule from '../components/capsule/Capsule.vue';
import CapsuleLayout from '../components/capsule/CapsuleLayout.vue';

let counter:Ref<number> = ref(0);

function increment() {
    counter.value++;
}
</script>

<template>
    <div class="sc-wrapper">
        <div class="sc-header">
            <div class="main-column">
                <h1>// silicon cosmos</h1>
                <nav>
                    <RouterLink to="/">Home</RouterLink> | 
                    <RouterLink to="/about">About</RouterLink>
                </nav>
            </div>
        </div>
        
        <div class="sc-content">
            <div class="main-column">
                <Capsule>
                    <template #header>
                        <h2>// quickref</h2>
                    </template>
                    <template #footer>
                        <div style="text-align:right;"><a>read more...</a></div>
                    </template>
                    <template #cLeft>
                        <img src="../assets/quickref_logo.svg" class="capsule-img" />
                    </template>
                    I'm baby put a bird on it vaporware succulents enamel pin yes plz. Helvetica ennui offal vice flannel gochujang humblebrag blue bottle ethical <a>drinking vinegar tilde bespoke</a> twee shaman raclette. Poutine selvage street art squid, tote bag beard listicle plaid kale chips. Pug yr cliche, vegan church-key coloring book hexagon. Tattooed waistcoat pork belly big mood. Franzen bespoke jawn jianbing woke, skateboard bitters hell of. Mukbang cornhole green juice jawn slow-carb tousled vibecession dreamcatcher.
                </Capsule>

                <Capsule>
                    <template #header>
                        <h3>// moodial timer</h3>
                    </template>
                    <template #footer>
                        <div style="text-align:left;"><a>read more...</a></div>
                    </template>
                    <template #cRight>                
                        <img src="../assets/moon.svg" class="capsule-img moon-yellow"/>                
                    </template>
                    Moondial timer is a tiny stopwatch, chronometer, and countdown timer library with millisecond precision built in TypeScript.
                </Capsule>

                <!-- <CapsuleLayout>
                    <template #header>
                        <h3>/* moodial</h3>
                    </template>
                    <template #footer>
                        moodial */
                    </template>
                    <template #left>
                        Left
                    </template>
                    <template #right>
                        Right
                    </template>
                    <template #cLeft>
                        cLeft
                    </template>
                    <template #cRight>
                        cRight!!!!!!!!!!!!!!!!!!
                    </template>

                    <div style="text-align: center;">
                        some text and stuff! 
                        <button @click="increment()">clicky: {{ counter }}</button>
                    </div>
                </CapsuleLayout> -->
            </div>
        </div>
        
        <div class="sc-footer">
            <p>Home page works!</p>
        </div>

    </div>
</template>

<style scoped lang="scss">
.capsule-img {
    width: 256px;
    height: 256px;
}
.moon-yellow {
    filter: brightness(0) saturate(100%) invert(99%) sepia(57%) saturate(1438%) hue-rotate(18deg) brightness(98%) contrast(106%);
}
</style>