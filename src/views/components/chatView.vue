<template>
    <div class="wr-chat-view flex">
        <div class="wr-chat-participants">
            <div class="wr-chat-header flex flex-full-center">
                {{ chatData.users.length }} chat members
            </div>
            <div class="wr-chat-header brand-bg flex flex-full-center pointer" v-on:click="handleBackCLick">
                <svg viewBox="0 0 24 24">
                    <path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z" />
                </svg>&nbsp;Load new chat
            </div>
            <div class="wr-chat-participants-list">
                <chatParticipant v-for="(user, key) in chatData.users" :user="user" :userColours="userColours" :colours="colours" :index="key" :selfUser="selfUser" :setSelfUser="setSelfUser" />
            </div>
        </div>
        <div class="wr-chat-messages">
            <div class="wr-chat-header flex flex-cross-center">
                Chat messages
            </div>
            <div class="wr-chat-messages-list">
                <chatMessage v-for="(msg, key) in chatData.messages" :chatData="chatData" :msg="msg" :userColours="userColours" :colours="colours" :index="key" :selfUser="selfUser" />
            </div>
        </div>
    </div>
</template>

<script>
    import Helpers from './../../helpers/index';

    import chatParticipant from './chatParticipant.vue';
    import chatMessage from './chatMessage.vue';
    
    export default {
        name: 'chatView',
        props: ['chatData'],
        components: {
            chatParticipant,
            chatMessage
        },
        data: function() {
            return {
                parseChatLine: Helpers.parseChatLine,
                userColours: {},
                selfUser: '',
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
             if(this.chatData.users.length === 2) {
                this.setSelfUser(this.chatData.users[0]);
            }
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
            handleBackCLick: function() {
                location.reload(true);
            }
        }
    }
</script>
