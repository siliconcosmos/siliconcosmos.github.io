<!-- <script src='https://storage.ko-fi.com/cdn/scripts/overlay-widget.js'></script> -->
<script setup>
    // kofiWidgetOverlay.draw('siliconcosmos', {
    //     'type': 'floating-chat',
    //     'floating-chat.donateButton.text': 'Donate',
    //     'floating-chat.donateButton.background-color': '#00bfa5',
    //     'floating-chat.donateButton.text-color': '#fff'
    // });
</script>

<template>
    <span class="kofi-link">
        <a href='https://ko-fi.com/G2G7TLZ3E' target='_blank'>
            <img class="kofi-donate-button" height='42' src='~/assets/ko-fi-donate.png' alt='Donate at ko-fi.com' />
            <img class="kofi-donate-icon" height='42' src='~/assets/ko-fi-icon.png' alt='Donate at ko-fi.com' />
        </a>
        <div class="kofi-cta-pop">
            <b style="display: block;">Donate at Ko-fi!</b>
        </div>
    </span>
    
</template>

<style scoped lang="scss">
@use "../assets/global.scss" as glob;

.kofi-link {
    display: inline-block;
    height: 42px;
    transform: translate(0%, 2.5%);
}

.kofi-donate-button {
    display: none;
}

.kofi-cta-pop {
    display: inline-block;
    position: absolute;
    padding: glob.$whitespace-xs;
    
    top: 65px;
    right: 5px;

    // right: 55px;

    min-width: max-content;
    background-color: glob.$background-bright;
    border: 1px solid glob.$border-bright;
    animation: pop 3s linear none;
    opacity: 0;
}
.kofi-cta-pop:before {
    content: "";
    position: absolute;

    bottom: calc(101% - 5px);
    right: 5%;
    transform: rotate(225deg);

    // top: calc(75% / 2);
    // left: calc(100% - 5px);
    // transform: rotate(-45deg);

    height: 10px;
    width: 10px;
    background-color: glob.$background-bright;
    border-bottom:inherit;
    border-right:inherit;
    box-shadow:inherit;
}

@keyframes pop {
     100% {
        opacity: 0;
    }
    95% {
        opacity: 1;
    }
    10% {
        opacity: 1;
    }
    0% {
        opacity: 0;
    }
}

@media (min-width: glob.$media-sm) { 
    .kofi-donate-button {
        display: inherit;
    }
    .kofi-donate-icon {
        display: none;
    }
    .kofi-cta-pop {
        display: none;
    }
}

</style>