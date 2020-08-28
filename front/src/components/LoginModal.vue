<template>

    <modal name="modal-login">
        Login Modal Test
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