<template>
    <div class="wr-chat-view flex">
        <div :class="['wr-chat-participants', {'active' : isDrawerOpen}]">
            <div class="wr-chat-header flex flex-full-center flex-sa" v-on:click="toggleDrawer">
                <svg viewBox="0 0 24 24" class="wr-participats-sidebar-close pointer">
                    <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
                </svg>
                <p>{{ chatData.users.length }} chat members</p>
            </div>
            <div class="wr-chat-header brand-bg flex flex-full-center pointer" v-on:click="handleBackClick" ripple="ripple">
                <svg viewBox="0 0 24 24">
                    <path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z" />
                </svg>&nbsp;Load new chat
            </div>
            <div class="wr-chat-participants-list">
                <chatParticipant v-for="(user, key) in chatData.users" :user="user" :colour="colours[userColours[user]]" :index="key" :selfUser="selfUser" :setSelfUser="setSelfUser" ripple="ripple" />
            </div>
        </div>
        <div class="wr-chat-messages">
            <div class="wr-chat-header flex flex-cross-center flex-sb">
            <svg class="wr-participats-sidebar-open pointer" viewBox="0 0 24 24" v-on:click="toggleDrawer">
                <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
            </svg>
            <span class="chat-info flex flex-main-center flex-dc">
               Chat with {{chatTitle}} <small>{{tempData.length}} / {{chatData.messages.length}} messages</small>
            </span>
            <button class="print-view-button pointer flex flex-full-center" v-on:click="openPrintView">
                <svg viewBox="0 0 24 24">
                    <path d="M18,3H6V7H18M19,12A1,1 0 0,1 18,11A1,1 0 0,1 19,10A1,1 0 0,1 20,11A1,1 0 0,1 19,12M16,19H8V14H16M19,8H5A3,3 0 0,0 2,11V17H6V21H18V17H22V11A3,3 0 0,0 19,8Z" />
                </svg>&nbsp;
                Print chat
            </button>
            </div>
            <div class="wr-chat-messages-list" ref="messages">
                <chatMessage v-for="(msg, key) in tempData" :showAuthor="msg === tempData[0] || msg.user !== tempData[key > 0 ? key - 1 : 0].user" :isLastByUser="msg.user !== tempData[key < tempData.length - 1 ? key + 1 : 0].user" :msg="msg" :colour="colours[userColours[msg.user]]" :index="key" :selfUser="selfUser" :isGroupChat="isGroupChat" />
                <infinite-loading :distance="120" :on-infinite="onInfinite" ref="infiniteLoading" spinner="spiral"></infinite-loading>
            </div>
        </div>
         <div :class="['wr-chat-drawer-overlay', {'active' : isDrawerOpen}]"></div>
    </div>
</template>

<script>
    import InfiniteLoading from 'vue-infinite-loading';

    import Helpers from './../../helpers/index';

    import chatParticipant from './chatParticipant.vue';
    import chatMessage from './chatMessage.vue';

    import mdripple from '../../helpers/mdripple.js';
    
    export default {
        name: 'chatView',
        props: ['chatData', 'chatTitle', 'showToast'],
        components: {
            InfiniteLoading,
            chatParticipant,
            chatMessage
        },
        data: function() {
            return {
                userColours: {},          // Assigned user colours (each user has a random colour assigned)
                selfUser: '',
                isGroupChat: this.chatData.users.length > 2,
                tempData: [],             // Used to store lazy loading messages (messages are pushed here progressively)
                scrollMessagesToLoad: 25, // Ammount of messages to load each time we lazy load new messages,
                isDrawerOpen: false,
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
        mounted: function () {
            mdripple();
            window.addEventListener('resize', this.handleResize);
        },
        created: function() {
            this.userColours = this.assignUserColours();
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
                this.showToast(`You are now ${user}`, 'info');
            },
            handleBackClick: function() {
                location.reload(true);
            },
            onInfinite: function() {
                setTimeout( function () {
                    if(this.tempData.length < this.chatData.messages.length) {
                        this.tempData = this.tempData.concat(this.chatData.messages.slice(this.tempData.length, this.tempData.length + this.scrollMessagesToLoad));
                        this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
                    } else {
                        this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete');
                    }
                }.bind(this), 100);
            },
            openPrintView: function() {
                var printWin = window.open("", "_blank");
                printWin.document.write(Helpers.printMgr.generatePrintViewString(this.chatData.messages, this.selfUser, this.chatTitle));
            },
            toggleDrawer: function() {
                this.isDrawerOpen = !this.isDrawerOpen;
            }
        }
    }
</script>
