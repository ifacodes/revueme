<template>
    <transition id="fade">
        <div v-if="show" class="modal">
            <div @click="closeModal()" class="modal_outside"/>

            <button type="button" @click="closeModal()" class="modal_close"/>

        </div>
    </transition>
</template>

<script>
export default {
    name: "login-modal",
    data() {
        return {
            show: false
        }
    },
    methods: {
        closeModal() {
            show: false
        },
        openModal() {
            show: true
        }
    }
}
</script>

<style scoped>

</style>