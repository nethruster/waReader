<template>
    <div class="wr-body flex flex-full-center">
      <uploadFile :populateData="populateData" v-if="Object.keys(this.chatData).length === 0" :showToast="showToast" />
      <chatView :chatData="chatData" :chatTitle="chatTitle" v-else :showToast="showToast" />
    </div>
</template>

<script>
    import uploadFile from './uploadFile.vue'
    import chatView from './chatView.vue';
    import mdripple from '../../helpers/mdripple.js';

    export default {
        name: 'wrBody',
        components: {
            uploadFile,
            chatView
        },
        mounted: function () {
            mdripple();
        },
        data: function() {
            return {
                chatData: {},
                chatTitle: ''
            }
        },
        methods: {
            populateData: function(data, chatTitle) {
                this.chatData = data;
                this.chatTitle = /(^WhatsApp Chat with )?(.+)(.txt)/g.exec(chatTitle)[2]; // This is not at all stable, I'll probably remove it
            },
            showToast: function (text, mode) {
                switch (mode) {
                    case 'info':
                        this.$toasted.info(text, {
                            theme: "primary", 
                            position: "bottom-left", 
                            duration : 3000
                        });
                        break;
                   case 'error':
                        this.$toasted.error(text, {
                            theme: "primary", 
                            position: "bottom-left", 
                            duration : 3000
                        });
                        break;
                    default: 
                        this.$toasted.show(text, {
                            theme: "primary", 
                            position: "bottom-left", 
                            duration : 3000
                        });
                }
            },
        }
    }
</script>
