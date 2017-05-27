<template>
    <div id="main-wrapper" class="flex flex-dc flex-cross-center">
        <wrHeader />
        <wrBody />
    </div>
</template>

<script>
    import wrHeader from './components/wrHeader.vue'
    import wrBody from './components/wrBody.vue'

    export default {
        name: 'Home',
        components: {
            wrHeader,
            wrBody
        }
    }
</script>