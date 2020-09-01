<template>
    <div class="bar-wrapper">
        <nav class="fixed-nav-bar">
            <ul>
                <li v-for="link in navLinks" :key="link.name">
                    {{ link.name }} 
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    name: "fixed-bar",
    props: {
        navLinks: {
            type: Array
        }
    }
}
</script>

<style lang="scss" scoped>

@import '../assets/styles/colour.scss';

.fixed-nav-bar {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    width: 100%;
    height: 7%;
    background: #000;
    color: #fff;

    ul {

        margin: 0;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-items: stretch;
        align-content: stretch;
        list-style: none;
        height:100%;

        li {
            display: flex;
            justify-content: center;
            align-items: center;

            min-width: 10%;
            padding: 0 20px;
            margin: 0 50px;

            font-size: 16pt;
            font-weight: 600;

            &:hover {
                background: oldlace;
                color: #000;
            }

        }
    }

}


</style>