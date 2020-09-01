<template>
    <div id="input-container">
        <input :type='type' :placeholder="placeholder" required pattern=".*\S.*">
        <label> {{placeholder}} </label>
    </div>
</template>

<script>
export default {
    name: "material-input",
    props: ['placeholder', 'type']
}
</script>

<style lang="scss" scoped>

@import '../assets/styles/colour.scss';

div#input-container {
    
    position: relative;

    // FIX TEXT VERTICAL POSITIONING IN INPUT 

    input {
        font-size: 18pt;
        line-height: 50%;
        background: $primary-colour;
        border: none;
        outline: none;
        margin: 10px;
        padding: 5% 2%;
        box-sizing: border-box;
        box-shadow: inset 0 -2px 0 rgba(0, 0, 0, 0.35);
        transition: ease-in 0.2s;
        width: 70%;
        &::placeholder {
            color: transparent;
        }
        &:focus, &:not(:placeholder-shown) {
            box-shadow: inset 0 -2px 0 $secondary-colour-dark;
            transition: ease-in 0.2s;
            ~ label {
                transform: scale(.75);
                top: 7.5%;
                left: 13.5%;
                font-weight: bold;
                color: $secondary-colour-dark;
            }
        }

    }
    label {
        font-size: 18pt;
        position: absolute;
        left: 17%;
        top: 37%;
        color: #000;
        transition: all 0.2s ease;
        pointer-events: none;
    }
}
</style>