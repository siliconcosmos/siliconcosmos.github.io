<template>
    <div class="capsule-wrapper">
        <div class="capsule-left">
            <slot name="oLeft"></slot>
        </div>

        <div class="trunk capsule-center">
            <div class="trunk-header">
                <slot name="header"></slot>
            </div>
            <div class="trunk-body body">
                <div class="body-left">
                    <slot name="left"></slot>
                </div>

                <div class="body-center">
                    <slot></slot>
                    <slot name="center"></slot>
                </div>

                <div class="body-right">
                    <slot name="right"></slot>
                </div>
            </div>
            <div class="trunk-footer">
                <slot name="footer"></slot>            
            </div>
        </div>

        <div class="capsule-right">
            <slot name="oRight"></slot>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use "../../assets/global.scss" as glob;

.capsule-wrapper {
    height: auto;
    // overflow: auto; // disabled because nuxt broke the box sizing and cause perpetual scrollbars for some reason...
    display: flex;
    flex-direction: column;
    
    .capsule-center {
        flex-grow: 1;
    }
    .capsule-left, .capsule-right {
        flex-shrink: 0;
    }
}

.trunk {
    display: flex;
    flex-direction: column;

    .trunk-body {
        flex-grow: 1;
    }
    .trunk-header, .trunk-footer {
        flex-shrink: 0;
    }
}

.body {
    display: flex;
    flex-direction: column;

    .body-center {
        flex-grow: 1;
    }
    .body-left, .body-right {
        flex-shrink: 0;
    }
}


@media (min-width: glob.$media-md) and (min-height: glob.$media-md) {
    .capsule-wrapper {
        flex-direction: row;
    }
    .body {
        flex-direction: row;
    }
}

@media (min-width: glob.$media-lg) {
    .capsule-wrapper {
        flex-direction: row;
    }
    .body {
        flex-direction: row;
    }
}

// #region [debug colors]
// .capsule-left, .capsule-right {
//     background-color: darkorchid;
// }
// .trunk-header, .trunk-footer {
//     background-color: navy;
// }
// .body-center {
//     background-color: darkolivegreen;
// }
// .body-left, .body-right {
//     background-color: darkcyan;
// }
// #endregion
</style>