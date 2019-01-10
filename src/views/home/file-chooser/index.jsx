import { h, Component } from 'preact';
import { connect } from 'unistore/preact'
import { bind } from 'decko'

import FileInput from '../../../components/inputs/file';

import { getParsedChatObject } from '../../../scripts/parse-chat'
import {actions } from '../../../store/store'

const style = require('./styles.scss');

export default connect("chat", actions)(class FileChooser extends Component {
  constructor(props) {
    super(props)

    this.handleFileChange = this.handleFileChange.bind(this)
  }

  handleFileChange (event) {
    let file = event.target.files[0]
    let fr = new FileReader()

    fr.readAsText(file);

    fr.onload = (event) => {
      let fileContents = event.target.result
      getParsedChatObject(fileContents).then(result => {
      })
    }
  }

  render() {
    return (
      <form className={`text-center ${style.uploadForm}`}>
        <FileInput
          id="file-chooser"
          label="Select A File"
          customClass={style.inputButton}
          onChangeExecute={this.handleFileChange}
        />
      </form>
    );
  }
})
