<template>
    <div class="upload-file-wrapper flex-dc flex flex-full-center">
            <h2 class="ta-c">Upload a Whatpsapp Text (.txt) file and view it in a nice, clean readeable format.</h2>
            <div class="date-interval-picker flex flex-full-center">
                <p>Show messages between (optional): </p>
                <div class="date-interval-picker-c">
                    <label class="date-interval-picker-label">Start Date</label>
                    <DatePicker :date="intitalDateTime" :option="pickerOptions" />
                </div>
                <div class="date-interval-picker-c">
                    <label class="date-interval-picker-label">End Date</label>
                    <DatePicker :date="finalDateTime" :option="pickerOptions" />
                </div>
            </div>
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
    import DatePicker from 'vue-datepicker'
    export default {
        name: 'uploadFile',
        props: ['populateData', 'showToast'],
        data: function() {
            return {
                isLoading: false,
                buttonText: 'Submit',
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
            DatePicker
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
            }
        }
    }
</script>
