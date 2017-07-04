<template>
    <div class="upload-file-wrapper flex flex-full-center flex-dc flex-sa">
        <h1><img src="./assets/wrisot.svg" class="wrisot">&nbsp;waReader</h1>
        <h2 class="ta-c">Upload a WhatsApp  text (.txt) file and view it in a nice, clean, readeable format.</h2>
        <div class="date-interval-picker flex flex-dc flex-full-center">
            <p>Show messages between (optional): </p>
            <div class="date-interval-picker-r flex flex-full-center">
                <div class="date-interval-picker-c">
                    <label class="date-interval-picker-label">Start Date 
                        <span class="date-interval-picker-clear-button pointer" v-on:click="clearStart" v-if="intitalDateTime.time !== null">
                            <svg viewBox="0 0 24 24" class="pointer">
                                <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
                            </svg>
                        </span>
                    </label>
                    <date-picker :date="intitalDateTime" :option="pickerOptions" />
                </div>
                <div class="date-interval-picker-c">
                    <label class="date-interval-picker-label">End Date
                        <span class="date-interval-picker-clear-button pointer" v-on:click="clearEnd" v-if="finalDateTime.time !== null">
                            <svg viewBox="0 0 24 24" class="pointer">
                                <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
                            </svg>
                        </span>
                    </label>
                    <date-picker :date="finalDateTime" :option="pickerOptions" />
                </div>
            </div>
        </div>
        <input type="file" id="file" name="file" class="upload-file-input" accept=".txt">
        <div class="ta-c">
            <label for="file" class="upload-file-label pointer flex-full-center" ripple="ripple">
                <span>Choose file</span>&nbsp;
                <svg viewBox="0 0 24 24">
                    <path d="M9,16V10H5L12,3L19,10H15V16H9M5,20V18H19V20H5Z" />
                </svg>
            </label>
            <p class="upload-file-filename"></p>
        </div>
        <div class="flex flex-full-center">
            <button class="upload-file-button pointer" :disabled="isLoading ? '' : disabled" v-on:click.prevent="getFile" ripple="ripple">
                <span class="flex flex-cross-center">
                    <p v-html="this.buttonText"></p>
                    <div id="upload-file-loader" :class="['loader', {'is-loading': isLoading}]">
                        <svg class="circular" viewBox="25 25 50 50">
                            <circle class="path" cx="50" cy="50" r="20" stroke-width="2" />
                        </svg>
                    </div>
                </span>
            </button>
        </div>
    </div>
</template>

<script>
    import Helpers from './../../helpers/index.js';
    import datePicker from 'vue-datepicker';

    export default {
        name: 'uploadFile',
        props: ['populateData', 'showToast'],
        data: function() {
            return {
                isLoading: false,
                buttonText: 'Submit',
                buttonLoadingText: 'Procesing chat&nbsp;',
                intitalDateTime: {time: null},
                finalDateTime: {time: null},
                pickerOptions: {
                    type: 'day',
                    week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
                    month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                    format: 'YYYY-MM-DD',
                    placeholder: 'Choose a date',
                    color: {
                        header: 'var(--wbrand-colour)',
                        headerText: '#fff'
                    },
                }
            }
        },
        components: {
            datePicker
        },
        mounted: function() {
            var fileInput = document.getElementById("file");
            fileInput.addEventListener('change', () => {
                document.getElementsByClassName('upload-file-filename')[0].innerHTML = fileInput.files[0].name;;
            });
        },
        methods: {
            getFile: function() {
                var fileInput = document.getElementById("file");

                if(fileInput.files.length > 0) {
                    this.isLoading = true;
                    this.buttonText = this.buttonLoadingText;

                    var file = fileInput.files[0],
                        fr = new FileReader();

                    fr.readAsText(file);

                    fr.onload = (event) => {
                        try {
                            var intitalDateTime = this.intitalDateTime.time !== null ? this.intitalDateTime.time : undefined;
                            var finalDateTime = this.finalDateTime.time  !== null ? this.finalDateTime.time : undefined;
                            setTimeout(this.populateData(Helpers.parseMgr.parseTextFile(event.target.result, intitalDateTime, finalDateTime), file.name), 1200);
                        } catch(err) {
                            this.isLoading = false;
                            this.buttonText = 'Submit&nbsp;';
                            if(err == "The text has no lines") {
                                this.showToast('This file is empty', 'error');
                            } else if(err == "The text has no messages") {
                                this.showToast('No valid messages found', 'error');
                            }
                        }
                    }
                } else {
                    // No files selected
                   this.showToast('Please, choose a file', 'error');
                }
            },
            clearStart: function() {
                this.intitalDateTime.time = null;
            },
            clearEnd: function() {
                this.finalDateTime.time = null;
            }
        }
    }
</script>
