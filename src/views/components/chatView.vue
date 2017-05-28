<template>
    <div class="wr-chat-view flex">
        <div class="wr-chat-participants">
            <chatParticipant v-for="(user, key) in chatData.users" :user="user" :userColours="userColours" :colours="colours" :index="key"/>
        </div>
        <div class="wr-chat-messages">
            <!-- <div v-for="msg in chatData.messages">
               <span v-html="parseChatLine(msg.msg)"></span>
            </div> -->
        </div>
    </div>
</template>

<script>
    import Helpers from './../../helpers/index';

    import chatParticipant from './chatParticipant.vue';
    
    export default {
        name: 'chatView',
        props: ['chatData'],
        components: {
            chatParticipant
        },
        data: function() {
            return {
                parseChatLine: Helpers.parseChatLine,
                userColours: this.assignUserColours(),
                colours: []
            }
        },
        methods: {
            assignUserColours: function() {
                var userColoursArr = [];
                for(let user in this.chatData.users) {
                        userColoursArr[user] = Math.floor((Math.random() * 20) + 1);
                    }
                return userColoursArr;
                }
            }
    }
</script>
