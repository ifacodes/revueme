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
    height: 50px;
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
            align-items: center;
            padding: 0 20px;
            margin: 0 50px;
            &:hover {
                background: oldlace;
            }
        }
    }
}


</style>