<template>
    <div class="wr-chat-participant flex flex-cross-center pointer" :class="{'wr-chat-self-participant': this.user.name == this.selfUser}" v-on:click="this.handleClick">
        <span class="wr-chat-participant-picture flex flex-full-center" :style="{backgroundColor: this.colour}">{{ user.letter }}</span>&nbsp;&nbsp;
        <div class="wr-chat-participant-name flex flex-cross-center ta-r" v-html="user.name"></div>
    </div>
</template>

<script>
    export default {
        name: 'chatParticipant',
        props: ['user', 'index', 'selfUser', 'setSelfUser', 'colour'],
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
