<template>
   <div :class="['wr-chat-message', 'flex', 'flex-cross-center', {'wr-chat-self': msg.user == selfUser == true}]">
        <div class="wr-chat-bubble" v-if="!(msg.user === '')" :class="{'lastByUser': msg.user != chatData.messages[index < chatData.messages.length - 1 ? index + 1 : 0].user == true}">
            <span class="wr-chat-message-author" v-if="chatData.users.length > 2 && chatData.messages[index > 0 ? index - 1 : 1].user != msg.user" :style="{color: this.colour}">{{msg.user}}</span>
            <div class="wr-chat-message-text" v-html="msg.msg"></div>
            <p class="wr-chat-message-datetime">{{ msg.datetime }}</p>
        </div>
        <div class="wr-chat-sys-message" v-else>
            <p v-html="msg.msg"></p>
        </div>
   </div>
</template>

<script>
    export default {
        name: 'chatMessage',
        props: ['chatData', 'msg', 'index', 'userColours', 'colours', 'selfUser'],
        created: function() {
            this.colour = this.getUserColour();
        },
        data: function() {
            return {
                colour: '',
            }
        },
        methods: {
            getUserColour: function() {
                return this.colours[this.userColours[this.msg.user]];
            }
        }
    }
</script>
