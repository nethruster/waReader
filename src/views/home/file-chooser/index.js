import { h, Component } from 'preact';
import { connect } from 'unistore/preact';
import { bind } from 'decko';
import SnackBar from 'react-material-snackbar-custom-classname';

import FileInput from '../../../components/inputs/file';

import { getParsedChatObject } from '../../../scripts/parse-chat';
import { actions } from '../../../store/store';
import IconButton from '../../../components/icon-button';

const style = require('./styles.scss');

export default connect(
  'chat',
  actions
)(
  class FileChooser extends Component {
    constructor(props) {
      super(props);

      this.state = {
        showToast: false,
        toastContent: ''
      };

      this.toastTimeout = 300000;
    }

    componentDidMount() {
      this.routerHistory = this.context.router.history;
    }

    showToast(content) {
      setTimeout(() => {
        this.setState({ showToast: false });
      }, this.toastTimeout);

      this.setState({
        showToast: true,
        toastContent: content
      });
    }

    @bind
    handleFileChange(event) {
      const file = event.target.files[0];

      if (file.size / 1024 / 1024 > 1) {
        this.showToast('The chat is too large');

        return;
      }

      const fr = new FileReader();

      fr.readAsText(file);

      fr.onload = event => {
        const fileContents = event.target.result;

        if (!fileContents.trim()) {
          this.showToast('The file is empty');
          return;
        }

        getParsedChatObject(fileContents)
          .then(result => {
            if (Object.keys(result).length <= 0) {
              this.showToast('The file content is invalid');
              return;
            }
            this.props.setChatData(result);
            this.routerHistory.push('/chat');
          })
          .catch(err => {
            console.log(err);
          });
      };
    }

    resetInput(event) {
      event.target.value = null; // reset input data to allow detection for the same file
    }

    @bind
    closeToast(event) {
      event.preventDefault();
      this.setState({
        showToast: false
      });
    }

    render() {
      return (
        <form class={`text-center ${style.uploadForm}`}>
          <SnackBar
            show={this.state.showToast} //Boolean  - Required and Default - `false`
            timer={this.toastTimeout} //Number   - Optional and Default - `4000` (4 secs)
            customClass={style.toast}
          >
            <p>{this.state.toastContent}</p>

            <IconButton
              onClickExecute={this.closeToast}
              icon="close"
              color="var(--color-accent)"
            />
          </SnackBar>
          <FileInput
            id="file-chooser"
            label="Select A File"
            customClass={style.inputButton}
            onChangeExecute={this.handleFileChange}
            onClickExecute={this.resetInput}
          />
        </form>
      );
    }
  }
);
