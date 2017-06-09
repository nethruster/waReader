<template>
    <div class="error-toast">{{errorMessage}}</div>
</template>

<script>
    export default {
        name: 'errorToast',
        data: function() {
            timeOutId: 0,
            isExiting: false
        },
        props: ['lifeTime', 'errorMessage'],
        mounted: function() {
            this.timeOutId = setTimeout(()=>{this.destroy();}, this.lifeTime);
        },
        methods: {
            clickHandler: function(e) {
                e.preventDefault();
                clearInterval(this.timeOutId);
                this.destroy();
            }
        }
    }
</script>
