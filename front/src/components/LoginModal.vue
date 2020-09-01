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
                    <a id="forgot-password"> Forgot your Password? </a>
                    <material-button buttonText="Login"/>
                    <a id="sign-up"> Don't have an account? <b>Sign Up!</b> </a>
                </slot>
            </footer>
        </modal>
    </div>

</template>


<script>

import MaterialInput from './MaterialInputBox.vue'
import MaterialButton from './MaterialButton.vue'

export default {
    name: "login-modal",
    components: {
        MaterialInput,
        MaterialButton
    },
    props: [ 'width', 'height' ],
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
    } 
}
</script>

<style lang="scss" scoped>

@import '../assets/styles/colour.scss';

.modal-container {

        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: space-around;
        align-items: stretch;
        align-content: space-around;

    header {
        text-align: left;
        padding: 10% 15% 0;
        ::v-deep h2 {
            font-size: 22pt;
            font-weight: 700;
            margin-bottom: 0;
        }
        ::v-deep h4 {
            color: $primary-colour-dark;
            font-weight: 700;
            margin-top: 5%;
        }
    }

    main {
        padding: 5% 0;
         display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: stretch;
        align-content: space-around;
    }

    footer {

        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: stretch;
        align-content: space-around;
        transition: ease-in 0.2s;

        a {

            &#forgot-password {
                line-height: 100%;
                margin: -2% 15% auto 0;
                
                text-align: right;
            }

            &#sign-up {
                margin: 2% auto;
            }

            &:hover {
                cursor: pointer;
                transition: ease-in 0.2s;
                text-decoration: underline;
            }

        }
    }
}

</style>