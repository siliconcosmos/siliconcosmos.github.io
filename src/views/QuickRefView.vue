<script setup lang="ts">
import { ref, type Ref } from 'vue';
import Toolbar from '../components/Toolbar.vue';
import Capsule from '../components/capsule/Capsule.vue';

</script>

<template>
    <div class="sc-wrapper">
        <div class="sc-header">
            <Toolbar>
                <h1>quickref</h1>
                <template #right>
                    <nav>
                        <RouterLink class="sc-color-primary" to="/">Home</RouterLink> | 
                        <RouterLink to="/about">About</RouterLink>
                    </nav>
                </template>
            </Toolbar>
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
                        <div class="capsule-img" style="margin-right: 20px;">
                            <img src="../assets/quickref_logo.svg" />
                        </div>
                    </template>
                    <div >
                        
                    </div>
                </Capsule>

            </div>
        </div>
        
        <div class="sc-footer">
        </div>

    </div>
</template>

<style scoped lang="scss">
@use "../assets/global.scss" as glob;

</style>