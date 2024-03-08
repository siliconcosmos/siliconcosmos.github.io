<script lang="ts" setup>
    import { ref } from 'vue';

    const props = defineProps({
        doExpand: Boolean
    })

    const isExpanded = ref(false); 

    function toggleExpand() {
        isExpanded.value = !isExpanded.value;
    }

    onNuxtReady(() => {
        isExpanded.value = props.doExpand;
    });
</script>

<template>
    <div class="expander">
        <div class="summary-toggle sc-color-secondary" @click="toggleExpand">
            <span class="toggle-icon centralize">
                <span class="fa-solid" :class="{ 'fa-chevron-right': !isExpanded, 'fa-chevron-down': isExpanded }"></span>
            </span>
            <h2><slot></slot></h2>
        </div>
        <div class="content" :class="{ expanded: isExpanded }">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use "../../assets/global.scss" as glob;

.summary-toggle > h2 {
    display: inline;
    cursor: pointer;
}

.toggle-icon {
    display: inline-block;
    width: 30px;
    height: 30px;
    text-align: center;
    color: glob.$primary
}

.content {
    height: 0px;
    overflow: hidden;
    visibility: hidden;
    display: none;
    transition: glob.$transition-slow;
}

.expanded {
    display: block;
    visibility: visible;
    // height: 400px;
    height: auto;
}
</style>