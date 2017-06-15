<template>
    <div class="upload-file-wrapper flex-dc flex flex-full-center">
        <p>Upload a Whatpsapp Text (.txt) file and view it in a nice, clean readeable format.</p>
        <input type="file" id="file" name="file" class="upload-file-input" accept=".txt">
        <label for="file" class="upload-file-label pointer flex-full-center" ripple="ripple">
            <span>Choose file</span>&nbsp;
            <svg viewBox="0 0 24 24">
                <path d="M9,16V10H5L12,3L19,10H15V16H9M5,20V18H19V20H5Z" />
            </svg>
        </label>
        <div class="flex flex-full-center">
        <button class="upload-file-button pointer" :disabled="isLoading ? '' : disabled" v-on:click.prevent="getFile" ripple="ripple">
            <span class="flex flex-cross-center">
                <p v-html="this.buttonText"></p>
                <div id="upload-file-loader" :class="['loader', {'is-loading': isLoading}]">
                    <svg class="circular" viewBox="25 25 50 50">
                    <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/>
                    </svg>
                </div>
            </span>
        </button>
        </div>
    </div>
</template>

<script>
    import Helpers from './../../helpers/index.js';

    export default {
        name: 'uploadFile',
        props: ['populateData', 'showToast'],
        data: function() {
            return {
                isLoading: false,
                buttonText: 'Submit'
            }
        },
        methods: {
            getFile: function() {
                var fileInput = document.getElementById("file");

                if(fileInput.files.length > 0) {
                    this.isLoading = true;
                    this.buttonText = 'Procesing chat&nbsp;';
                    
                    var file = fileInput.files[0],
                        fr = new FileReader();

                    fr.readAsText(file);

                    fr.onload = (event) => {
                        try {
                            setTimeout(this.populateData(Helpers.parseTextFile(event.target.result), file.name), 1200);
                        } catch(err) {
                            this.isLoading = false;
                            this.buttonText = 'Submit&nbsp;';
                            if(err == "The text has no lines") {
                                this.showToast('This file is empty', 'error');
                            } else if(err == "The text has no messages") {
                                this.showToast('This file is invalid', 'error');
                            }
                        }
                    }
                } else {
                    // No files selected
                   this.showToast('Please, choose a file', 'error');
                }
            }
        }
    }
</script>
