<script lang="ts" setup>
    import { ref } from 'vue';

    const props = defineProps({
        doExpand: Boolean
    });

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
            <slot></slot>
        </div>
        <div class="content" :class="{ expanded: isExpanded }">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use "../../assets/global.scss" as glob;

.summary-toggle {
    cursor: pointer;
}
.summary-toggle > :deep(h1),:deep(h2),:deep(h3),:deep(h4),:deep(h5),:deep(h6) {
    display: inline;
}

.toggle-icon {
    display: inline-block;
    width: 30px;
    height: 30px;
    text-align: center;
    color: glob.$primary
}

.content {
    display: none;
    height: 0px;
}

.expanded {
    display: block;
    height: auto;
}
</style>