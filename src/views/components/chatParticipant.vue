<template>
    <div :class="['wr-chat-participant', 'flex-cross-center', 'pointer', {'wr-chat-self-participant': this.user.name == this.selfUser}]" v-on:click="this.handleClick">
        <span class="wr-chat-participant-picture flex flex-full-center" :style="{backgroundColor: this.colour}">{{ user.letter }}</span>&nbsp;&nbsp;
        <div class="wr-chat-participant-name" v-html="user.name"></div>
    </div>
</template>

<script>
    export default {
        name: 'chatParticipant',
        props: ['user', 'index', 'colour', 'selfUser', 'setSelfUser'],
        methods: {
            handleClick: function() {
                if(this.selfUser != this.user.name) {
                    this.setSelfUser(this.user.name);
                } else {
                    this.setSelfUser('');
                }
            }
        }
    }
</script>
