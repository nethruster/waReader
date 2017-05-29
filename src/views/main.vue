<template>
    <div id="main-wrapper" class="flex flex-dc flex-full-center">
        <wrBody />
        <transition id="toast-wrapper"></transition>
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
