<template>
    <div class="wr-body flex flex-full-center">
      <uploadFile :populateData="populateData" v-if="Object.keys(this.chatData).length === 0" />
      <chatView :chatData="chatData" />
    </div>
</template>

<script>
    import uploadFile from './uploadFile.vue'
    import chatView from './chatView.vue';

    export default {
        name: 'wrBody',
        components: {
            uploadFile,
            chatView
        },
        data: function() {
            return {
                chatData: {}
            }
        },
        methods: {
            populateData: function(data) {
                this.chatData = data;
            }
        }
    }
</script>
