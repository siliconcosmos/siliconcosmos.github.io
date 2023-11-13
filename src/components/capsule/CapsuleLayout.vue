<template>
    <div class="capsule-wrapper">
        <div class="capsule-left">
            <slot name="cLeft"></slot>
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
            <slot name="cRight"></slot>
        </div>
    </div>
</template>

<style scoped lang="scss">
.capsule-wrapper {
    overflow: auto;
    display: inline-flex;
    flex-direction: row;
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
    flex-direction: row;

    .body-center {
        flex-grow: 1;
    }
    .body-left, .body-right {
        flex-shrink: 0;
    }
}

// #region [debug colors]
// .capsule-left, .capsule-right {
//     flex-shrink: 0;
//     background-color: darkorchid;
// }
// .trunk-header, .trunk-footer {
//     flex-shrink: 0;
//     background-color: navy;
// }
// .body-center {
//     flex-grow: 1;
//     background-color: darkolivegreen;
// }
// .body-left, .body-right {
//     flex-shrink: 0;
//     background-color: darkcyan;
// }
// #endregion
</style>