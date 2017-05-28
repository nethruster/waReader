<template v-bind:class="{Disapear: isExiting}">
    <div>{{}}</div>
</template>

<script>
    export default {
        name: 'errorToast',
        data: {
            timeOutId: 0,
            isExiting: false
        },
        props: ['lifeTime', 'errorMessage'],
        mounted: function() {
            this.timeOutId = setTimeout(()=>{this.autoDestroy();}, this.lifeTime);
        },
        methods: {
            clickHandler: function(e) {
                e.preventDefault();
                clearInterval(this.timeOutId);
                this.autoDestroy();
            },
            autoDestroy: function() {
                this.isExiting = true;
                setTimeout(() => {this.destroy();}, 300);
            }
        }
    }
</script>
