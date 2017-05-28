<template>
    <div class="upload-file-wrapper flex-dc flex flex-full-center">
        <p>Upload a Whatpsapp Text (.txt) file and view it in a nice, clean readeable format.</p>
        <input type="file" id="file" name="file" class="upload-file-input">
        <label for="file" class="upload-file-label pointer flex-full-center">
            <span>Choose file</span>&nbsp;
            <svg viewBox="0 0 24 24">
                <path d="M9,16V10H5L12,3L19,10H15V16H9M5,20V18H19V20H5Z" />
            </svg>
        </label>
        <button class="upload-file-button pointer" v-on:click="getFile">
            <span>Submit</span>
        </button>
    </div>
</template>

<script>
    import Helpers from './../../helpers/index.js';

    export default {
        name: 'uploadFile',
        props: ['populateData'],
        methods: {
            getFile: function() {
                var fileInput = document.getElementById("file"),
                    file = fileInput.files[0],
                    fr = new FileReader();

                fr.onload = (event) => {
                    try {
                        this.populateData(Helpers.parseTextFile(event.target.result)); 
                    } catch(err) {
                        if(err === "The text has no lines") {

                        } else if(err === "The text has no menssages") {

                        } else {
                            
                        }
                    }
                }

                fr.readAsText(file);
            }
        }
    }
</script>
