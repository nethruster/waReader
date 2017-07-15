<template>
    <div class="wr-chat-view flex">
        <div :class="['wr-chat-participants', {'active' : isDrawerOpen}]">
            <div class="wr-chat-header flex flex-full-center flex-sb">
                <svg viewBox="0 0 24 24" class="wr-participants-sidebar-close pointer" v-on:click="toggleDrawer"  v-if="isDrawerOpen">
                    <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
                </svg>
                <div class="wr-chat-participant wr-chat-header-self-participant flex flex-cross-center" v-if="Object.keys(this.selfUser).length !== 0">
                    <span class="wr-chat-participant-picture flex flex-full-center">
                        <svg viewBox="0 0 24 24">
                            <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />
                        </svg>
                    </span>&nbsp;&nbsp;
                    <p class="flex flex-cross-center ta-r" v-html="this.selfUser"></p>
                </div>
                 <div class="flex flex-full-center" v-if="Object.keys(this.selfUser).length !== 0">
                    {{ chatData.users.length }} &nbsp;
                    <svg viewBox="0 0 24 24">
                        <path d="M16,13C15.71,13 15.38,13 15.03,13.05C16.19,13.89 17,15 17,16.5V19H23V16.5C23,14.17 18.33,13 16,13M8,13C5.67,13 1,14.17 1,16.5V19H15V16.5C15,14.17 10.33,13 8,13M8,11A3,3 0 0,0 11,8A3,3 0 0,0 8,5A3,3 0 0,0 5,8A3,3 0 0,0 8,11M16,11A3,3 0 0,0 19,8A3,3 0 0,0 16,5A3,3 0 0,0 13,8A3,3 0 0,0 16,11Z" />
                    </svg>
                </div>
                <p v-if="Object.keys(this.selfUser).length === 0">{{ chatData.users.length }} chat members</p>
            </div>
            <div class="wr-chat-header brand-bg flex flex-full-center pointer" v-on:click="handleBackClick" ripple="ripple">
                <svg viewBox="0 0 24 24">
                    <path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z" />
                </svg>&nbsp;Load new chat
            </div>
            <div class="wr-chat-participants-list">
                <chat-participant v-for="(user, key) in chatData.users" :user="user" :index="key" :selfUser="selfUser" :setSelfUser="setSelfUser" :colour="Helpers.gVars.COLOURS[userColours[user.name]]" ripple="ripple" />
            </div>
        </div>
        <div class="wr-chat-messages">
            <div class="wr-chat-header flex flex-cross-center flex-sb">
            <span class="wr-participants-sidebar-open wr-chat-participant-picture wr-chat-header-picture flex flex-full-center">
                <svg viewBox="0 0 24 24" v-on:click="toggleDrawer">
                    <path d="M16,13C15.71,13 15.38,13 15.03,13.05C16.19,13.89 17,15 17,16.5V19H23V16.5C23,14.17 18.33,13 16,13M8,13C5.67,13 1,14.17 1,16.5V19H15V16.5C15,14.17 10.33,13 8,13M8,11A3,3 0 0,0 11,8A3,3 0 0,0 8,5A3,3 0 0,0 5,8A3,3 0 0,0 8,11M16,11A3,3 0 0,0 19,8A3,3 0 0,0 16,5A3,3 0 0,0 13,8A3,3 0 0,0 16,11Z" />
                </svg>
            </span>&nbsp;&nbsp;
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
                <chat-message v-for="(msg, key) in tempData" :showAuthor="msg === tempData[0] || msg.user.name !== tempData[key > 0 ? key - 1 : 0].user.name" :isLastByUser="msg.user.name !== tempData[key < tempData.length - 1 ? key + 1 : 0].user.name" :msg="msg" :colour="Helpers.gVars.COLOURS[userColours[msg.user.name]]" :index="key" :selfUser="selfUser" :isGroupChat="isGroupChat" />
                <infinite-loading :distance="200" :on-infinite="onInfinite" ref="infiniteLoading" spinner="spiral"></infinite-loading>
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
                Helpers,
            }
        },
        mounted: function () {
            mdripple();
        },
        created: function() {
            this.userColours = this.assignUserColours();
            window.addEventListener('resize', () => {
                if(window.innerWidth > 950) {
                    this.isDrawerOpen = false;
                }
            })
        },
        methods: {
            assignUserColours: function() {
                var userColoursArr = {},
                    coloursLength = this.Helpers.gVars.COLOURS.length;

                for(let user in this.chatData.users) {
                    userColoursArr[this.chatData.users[user].name] = Math.floor(Math.random() * coloursLength);
                }

                return userColoursArr;
            },
            setSelfUser: function(userName) {
                this.selfUser = userName;
                this.showToast(`You are now ${userName || 'a stranger'}`, 'info');
            },
            handleBackClick: function() {
                location.reload(false);
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
                printWin.document.write(this.Helpers.printMgr.generatePrintViewString(this.chatData.messages, this.selfUser, this.chatTitle, this.userColours));
            },
            toggleDrawer: function() {
                this.isDrawerOpen = !this.isDrawerOpen;
            }
        }
    }
</script>
