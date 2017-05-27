<template>
    <div class="wr-body flex flex-full-center">
      <uploadFile />
    </div>
</template>

<script>
    import uploadFile from './uploadFile.vue'

    export default {
        name: 'wrBody',
        components: {
            uploadFile
        }
    }
</script>