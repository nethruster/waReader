<template>
    <div id="main-wrapper" class="flex flex-dc flex-full-center">
        <wrBody />
        <transition><!-- Toast element is supposed to go here, TODO: add the element with id: 'toast-wrapper' --></transition>
    </div>
</template>

<script>
    import wrBody from './components/wrBody.vue';

    export default {
        name: 'Home',
        components: {
            wrBody
        }
    }
</script>
