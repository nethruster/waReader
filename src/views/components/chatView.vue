<template>
    <div class="wr-chat-view flex">
        <div class="wr-chat-participants">
            <div class="wr-chat-header flex flex-full-center">
                {{ chatData.users.length }} chat members
            </div>
            <div class="wr-chat-header brand-bg flex flex-full-center pointer" v-on:click="handleBackClick" ripple="ripple">
                <svg viewBox="0 0 24 24">
                    <path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z" />
                </svg>&nbsp;Load new chat
            </div>
            <div class="wr-chat-participants-list">
                <chatParticipant v-for="(user, key) in chatData.users" :user="user" :colour="colours[userColours[user]]" :index="key" :selfUser="selfUser" :setSelfUser="setSelfUser" ripple="ripple" />
            </div>
        </div>
        <div class="wr-chat-messages">
            <div class="wr-chat-header flex flex-cross-center">
               Chat with {{chatTitle}}
            </div>
            <div class="wr-chat-messages-list" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="400" v-if="messageSearchQuery == ''">
                <chatMessage v-for="(msg, key) in tempData" :showAuthor="msg.user != tempData[key > 0 ? key - 1 : 0].user || msg == tempData[0]" :isLastByUser="msg.user != tempData[key < tempData.length - 1 ? key + 1 : 0].user ? true : false" :msg="msg" :colour="colours[userColours[msg.user]]" :index="key" :selfUser="selfUser" :isGroupChat="isGroupChat" />
            </div>
        </div>
    </div>
</template>

<script>
    import Helpers from './../../helpers/index';

    import chatParticipant from './chatParticipant.vue';
    import chatMessage from './chatMessage.vue';

    import mdripple from '../../helpers/mdripple.js';
    
    export default {
        name: 'chatView',
        props: ['chatData', 'chatTitle'],
        components: {
            chatParticipant,
            chatMessage
        },
        mounted: function () {
            mdripple();
        },
        data: function() {
            return {
                userColours: {},          // Assigned user colours (each user has a random colour assigned)
                selfUser: '',
                isGroupChat: this.chatData.messages.length > 2 ? true : false,
                tempData: [],             // Used to store lazy loading messages (messages are pushed here progressively)
                filteredMessages: [],
                messageCount: 0,          // Message counter for lazy loading control,
                scrollMessagesToLoad: 30, // Ammount of messages to load each time we lazy load new messages,
                busy: false,
                messageSearchQuery: '',
                colours: [
                    '#35cd96',
                    '#6bcbef',
                    '#e542a3',
                    '#91ab01',
                    '#ffa97a',
                    '#1f7aec',
                    '#dfb610',
                    '#029d00',
                    '#8b7add',
                    '#fe7c7f',
                    '#ba33dc',
                    '#59d368',
                    '#b04632',
                    '#fd85d4',
                    '#8393ca',
                    '#ff8f2c',
                    '#a3e2cb',
                    '#b4876e',
                    '#c90379',
                    '#ef4b4f'
                ]
            }
        },
        created: function() {
            this.userColours = this.assignUserColours();
        },
        methods: {
            assignUserColours: function() {
                var userColoursArr = {},
                    coloursLength = this.colours.length;

                for(let user in this.chatData.users) {
                    userColoursArr[this.chatData.users[user]] = Math.floor(Math.random() * coloursLength);
                }

                return userColoursArr;
            },
            setSelfUser: function(user) {
                this.selfUser = user;
            },
            handleBackClick: function() {
                location.reload(true);
            },
            loadMore: function() {
                this.busy = true;

                setTimeout(() => {
                    for (let i = 0; i < this.scrollMessagesToLoad && this.messageCount < this.chatData.messages.length; i++) {
                        this.tempData.push(this.chatData.messages[this.messageCount]);
                        this.messageCount++;
                    }
                    
                    this.busy = false;
                }, 100);
            }
        }
    }
</script>
