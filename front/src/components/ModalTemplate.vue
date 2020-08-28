<template>
    <transition id="fade">
        <div v-if="show" class="modal">
            <div @click="closeModal()" class="modal_outside"/>

            <header>
                <slot name="header"></slot>
            </header>

            <main>
                <slot name="main"></slot>
            </main>

            <footer>
                <slot name="footer"></slot>
            </footer>

            <button type="button" @click="closeModal()" class="modal_close"/>

        </div>
    </transition>
</template>

<script>
export default {
    name: "template-modal",
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