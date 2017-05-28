<template>
    <div class="wr-chat-view flex">
        <div class="wr-chat-participants">
            <chatParticipant v-for="(user, key) in chatData.users" :user="user" :userColours="userColours" :colours="colours" :index="key" />
        </div>
        <div class="wr-chat-messages">
            <chatMessage v-for="(msg, key) in chatData.messages" :chatData="chatData" :msg="msg" :userColours="userColours" :colours="colours" :index="key" />
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
                    userColoursArr[this.chatData.users[user]] = Math.floor((Math.random() * coloursLength) + 1);
                }

                return userColoursArr;
            }
        }
    }
</script>
