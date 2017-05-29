<template>
   <div class="wr-chat-message flex flex-cross-center">
        <div class="wr-chat-bubble" v-if="!msg.user == ''" :class="{'lastByUser': chatData.messages[index < chatData.messages.length ? index + 1 : chatData.messages.length].user != msg.user == true}">
            <span class="wr-chat-message-author" v-if="chatData.users.length > 2 && chatData.messages[index > 0 ? index - 1 : 1].user != msg.user" :style="{color: this.colour}">{{msg.user}}</span>
            <p class="wr-chat-message-text" v-html="msg.msg"></p>
        </div>
        <div class="wr-chat-sys-message" v-else>
            <p class="wr-chat-message-text" v-html="msg.msg"></p>
        </div>
   </div>
</template>

<script>
    export default {
        name: 'chatMessage',
        props: ['chatData', 'msg', 'index', 'userColours', 'colours'],
        data: function() {
            return {
                colour: this.getUserColour()
            }
        },
        methods: {
            getUserColour: function() {
                return this.colours[this.userColours[this.msg.user]];
            }
        }
    }
</script>
