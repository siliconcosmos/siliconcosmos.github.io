<script setup lang="ts">
import Toolbar from './Toolbar.vue';
</script>

<template>
    <div class="footer-bar">

        <div class="main-column footer-grid">
            <div class="left">
                <p>©️ Silicon Cosmos 2023</p>
            </div>
            <div class="mid">
                <slot></slot>
            </div>
            <div class="right">
                <p><a href="https://github.com/siliconcosmos" target="_blank"><i class="fa-brands fa-github"></i> github</a></p>
                <p><a href="https://siliconcosmos.itch.io" target="_blank"><i class="fa-brands fa-itch-io"></i> itch.io</a></p>
            </div>
        </div>

    </div>
</template>

<style scoped lang="scss">
@use "../assets/global.scss" as glob;
@use 'sass:color';

.footer-bar {
    margin-top: glob.$whitespace-md;
    color: scale-color($color: glob.$text, $blackness: 75%);
    text-shadow: 0px 1px 1px #000;
    font-weight: 300;
    background-image: linear-gradient(to bottom, rgba(0,0,0,0), glob.$background-dark);
    // background-color: scale-color($color: glob.$background-dark, $alpha: -50%);

    a {
        color: scale-color($color: glob.$secondary, $saturation: -70%, $lightness: -30%);
        font-weight: 300;
        text-decoration: none;
    }
    
}

.footer-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, 1fr);
    column-gap: glob.$whitespace-sm;
    padding: glob.$whitespace-sm;
    align-items: end;

    .left {
        text-align: center;
        transition: glob.$transition-slow;
    }

    .mid {
        text-align: center;
        transition: glob.$transition-slow;
    }

    .right {
        text-align: center;
        transition: glob.$transition-slow;
    }
}

@media (min-width: glob.$media-md) and (min-height: glob.$media-md) {
    .footer-grid {
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
        padding: glob.$whitespace-md;
        .left {
            text-align: left;
        }
        .mid {
            text-align: center;
        }
        .right {
            text-align: right;
        }
    }
}
@media (min-width: glob.$media-lg) {
    .footer-grid {
        padding: glob.$whitespace-lg;   
    }
}

</style>