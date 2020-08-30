<template>
    <div class="modal-container">
        <modal @opened="log" 
                :adaptive="true" 
                styles="border-radius: 12px" 
                name="modal-login"
                :width="width"
                :height="height">

            <header>
                <slot name="header"/>
            </header>
            <main>
                <slot name="main">
                <material-input type="email" placeholder="Username"/>
                <material-input type="password" placeholder="Password"/>
                </slot>
            </main>
            <footer>
                <slot name="footer">

                </slot>
            </footer>
        </modal>
    </div>

</template>


<script>

import MaterialInput from './MaterialInputBox.vue'

export default {
    name: "login-modal",
    components: {
        MaterialInput
    },
    props: {
        width: Number,
        height: Number,
    },
    methods: {
        show() {
            this.$modal.show('modal-login');
        },
        hide() {
            this.$modal.hide('modal-login');
        },
        log() {
            console.log(this.MaterialInput);
        }
    },
    mount() {
        this.hide()
    },
    computed: {
        modalWidth(){
            return { '--modal-width': this.width }
        },
        modalHeight(){
            return { '--modal-height': this.height }
        }
    }
    
}
</script>

<style lang="scss">

$modal-width: var(--modal-width);
$modal-height: var(--modal-height);

header {
    text-align: left;
    padding: 0 10pt;
    h1 {
        font-size: 24pt;
        font-weight: 700;
    }
    h2 {
        font-weight: bold;
    }
}

main {
    padding: 10px 0;
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: space-around;
	align-items: center;
	align-content: stretch;
    input[type=email], input[type=password]{
        box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.35);
        transition: ease-in 0.2s;
        &:focus {
            box-shadow: inset 0 -1px 0 rgba(132, 77, 204, 0.726);
            transition: ease-in 0.2s;
        }
    }
}

</style>