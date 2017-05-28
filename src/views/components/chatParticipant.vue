<template>
   <div class="wr-chat-participant flex flex-cross-center">
    <span class="wr-chat-participant-picture flex flex-full-center" v-bind:style="{backgroundColor: this.colour}">{{user.charAt(0).toUpperCase()}}</span>&nbsp;&nbsp;
    <div v-html="user"></div>
   </div>
</template>

<script>
    export default {
        name: 'chatParticipant',
        props: ['user', 'index', 'userColours', 'colours'],
        data: function() {
            return {
                colour: this.getUserColour()
            }
        },
        methods: {
            getUserColour: function() {
                return this.colours[this.userColours[this.index]];
            }
        }
    }
</script>
