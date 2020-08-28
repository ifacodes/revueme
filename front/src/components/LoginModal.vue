<template>

    <modal name="modal-login">
        <header>
            <slot name="header"/>
        </header>
        <main>
            <slot name="main">
                Login Modal Test
            </slot>
        </main>
        <footer>
            <slot name="footer"/>
        </footer>
    </modal>
    
</template>

<script>
export default {
    name: "login-modal",
    methods: {
        show() {
            this.$modal.show('modal-login');
        },
        hide() {
            this.$modal.hide('modal-login');
        }
    },
    mount() {
        this.hide()
    }
}
</script>

<style lang="scss" scoped>

</style>