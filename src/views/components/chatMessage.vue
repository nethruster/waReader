<template>
   <div :class="['wr-chat-message', 'flex', 'flex-cross-center', {'wr-chat-self': msg.user.name == selfUser}]">
        <div class="wr-chat-bubble" :class="{'lastByUser': isLastByUser}" v-if="Object.keys(msg.user).length !== 0">
            <span class="wr-chat-message-author" :style="{color: this.colour}" v-if="isGroupChat && showAuthor">{{msg.user.name}}</span>
            <div class="wr-chat-message-text" v-html="msg.msg"></div>
            <p class="wr-chat-message-datetime">{{ msg.datetime.format("DD/MM/YYYY HH:mm") }}</p>
        </div>
        <div class="wr-chat-sys-message" v-else>
            <p v-html="msg.msg"></p>
        </div>
   </div>
</template>

<script>
    export default {
        name: 'chatMessage',
        props: ['msg', 'index', 'selfUser', 'isGroupChat', 'showAuthor', 'isLastByUser',  'colour'],
    }
</script>
