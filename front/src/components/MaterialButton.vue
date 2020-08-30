<template>
    <div>
        <button>{{buttonText}}</button>
    </div>
</template>

<script>
export default {
    name: "material-button",
    props: ['buttonText']
}
</script>

<style lang="scss" scoped>

@import "../assets/styles/colour.scss";

button {
    background: $secondary-colour-dark;
    color: $primary-colour-light;

    font-size: 14pt;
    font-weight: bold;

    border:none;
    border-radius: 8px;
    outline:none;

    width: 70%;
    padding: 4% 0;
    margin: 5% auto;

    box-shadow: 0px 3px 3px -1px #C6BEC1;

    &:hover {

        background: $secondary-colour;
        transition: ease-in 0.2s;

    }
}


</style>