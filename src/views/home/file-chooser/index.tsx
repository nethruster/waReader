import { h } from 'preact';

import FileInput from '../../../components/inputs/file';

const style = require('./styles.scss');

export default function FileChooser() {
    return (
        <form className={`text-center ${style.uploadForm}`}>
            <FileInput
                id="file-chooser"
                label="Select A File"
                customClass={style.inputButton}
            />
        </form>
    );
}
