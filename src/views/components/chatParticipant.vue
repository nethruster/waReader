<template>
    <div :class="['wr-chat-participant', 'flex-cross-center', 'pointer', {'wr-chat-self-participant': this.user == this.selfUser == true}]" v-on:click="this.handleClick" >
        <span class="wr-chat-participant-picture flex flex-full-center" :style="{backgroundColor: this.colour}">{{ getUserLetter() }}</span>&nbsp;&nbsp;
        <div class="wr-chat-participant-name" v-html="user"></div>
    </div>
</template>

<script>
    export default {
        name: 'chatParticipant',
        props: ['user', 'index', 'userColours', 'colours', 'selfUser', 'setSelfUser'],
        data: function() {
            return {
                colour: this.getUserColour()
            }
        },
        methods: {
            getUserColour: function() {
                return this.colours[this.userColours[this.user]];
            },
            getUserLetter: function() {
                if(!this.user.includes('+')) {
                    return this.user.charAt(0).toUpperCase();
                } else {
                    return "&";
                }
                
            },
            handleClick: function() {
                if(this.selfUser != this.user) {
                    this.setSelfUser(this.user);
                }
            }
        }
    }
</script>
