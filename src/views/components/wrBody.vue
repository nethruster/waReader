<template>
    <div class="wr-body flex flex-full-center" :class="{'wr-body-chat': chatLoaded}">
        <div class="wr-home-panel flex flex-dc" v-if="Object.keys(this.chatData).length === 0">
            <uploadFile :populateData="populateData" :showToast="showToast" :dateFormat="dateFormat" :handleDTClick="handleDTClick" />
            <div class="info-section flex flex-dc flex-full-center">
                <div class="info-section-hero-items flex flex-main-center flex-sa">
                    <div class="info-section-hero-item">
                        <div class="ta-c">
                            <svg viewBox="0 0 24 24" class="info-section-hero-icon">
                                <path d="M9,13A3,3 0 0,0 12,16A3,3 0 0,0 15,13A3,3 0 0,0 12,10A3,3 0 0,0 9,13M20,19.59V8L14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18C18.45,22 18.85,21.85 19.19,21.6L14.76,17.17C13.96,17.69 13,18 12,18A5,5 0 0,1 7,13A5,5 0 0,1 12,8A5,5 0 0,1 17,13C17,14 16.69,14.96 16.17,15.75L20,19.59Z" />
                            </svg>
                            <h4 class="info-section-hero-item-title ta-c">WhatsApp  text file? WTF?</h4>
                    </div>
                    <p class="info-hero-item-description">WhatsApp allows you to <a href="https://faq.whatsapp.com/en/wp/22548236" rel="noopener" target="_blank">backup</a> and/or <a href="https://faq.whatsapp.com/en/s60/21055276" rel="noopener" target="_blank">export</a> your conversations, click on either of those to know how. The file this tool needs is the txt file mentioned in those guides.
                    </p>
                    </div>
                    <div class="info-section-hero-item">
                        <div class="ta-c">
                            <svg viewBox="0 0 24 24" class="info-section-hero-icon">
                                <path d="M12,12H19C18.47,16.11 15.72,19.78 12,20.92V12H5V6.3L12,3.19M12,1L3,5V11C3,16.55 6.84,21.73 12,23C17.16,21.73 21,16.55 21,11V5L12,1Z" />
                            </svg>
                            <h4 class="info-section-hero-item-title ta-c">Does it respect my privacy?</h4>
                        </div>
                        <p class="info-hero-item-description">Your messages/chats never leave your computer, all of it is manipulated and processed in your browser, our servers don't even expect it.</p>
                    </div>
                    <div class="info-section-hero-item">
                        <div class="ta-c">
                            <svg viewBox="0 0 24 24" class="info-section-hero-icon">
                                <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />
                            </svg>
                            <h4 class="info-section-hero-item-title ta-c">Who maintains the project?</h4>
                        </div>
                        <p class="info-hero-item-description">Glad you ask! We're <a href="https://nethruster.com" rel="noopener" target="_blank">Nethruster</a>, we are a group of developers and we like to help people by making great, modern and secure software.</p>
                    </div>
                </div>
                <div class="info-section-more-items flex flex-dc flex-full-center">
                    <h4>Got more doubts or questions?</h4>
                    <div class="info-section-more-items-buttons flex flex-full-center">
                        <a href="https://github.com/nethruster/waReader" class="button-link" rel="noopener" target="_blank"><div class="upload-file-label pointer flex-full-center">Inspect the source code</div></a>
                        <a href="https://nethruster.com/contact" class="button-link" rel="noopener" target="_blank"><div class="upload-file-label pointer flex-full-center">Send us a message</div></a>
                    </div>
                </div>
            </div>
        </div>

        <chatView :chatData="chatData" :chatTitle="chatTitle" :showToast="showToast" :dateFormat="dateFormat" v-else />
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
                chatTitle: '',
                chatLoaded: false,
                dateFormat: 'DD/MM/YYYY'
            }
        },
        methods: {
            populateData: function(data, chatTitle) {
                this.chatData = data;
                this.chatTitle = /(^WhatsApp Chat with )?(.+)(.txt)/g.exec(chatTitle)[2]; // This is not at all stable, I'll probably remove it
                this.chatLoaded = true;
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
            handleDTClick: function(e) {
                let input = document.getElementById(e.target.dataset.input);
                if(!input.checked) {
                    this.dateFormat = input.value;
                }
            }
        }
    }
</script>
