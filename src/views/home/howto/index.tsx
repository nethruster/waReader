import { h } from 'preact';

const style = require('./styles.scss');

export default function HowTo() {
    return (
        <div class={style.wrapper}>
          <h4 class={`text-center ${style.howtoTitle}`}>How to use waReader?</h4>
          <p>
            In order to use our this tool you need to export your WhatsApp chat to a text file. 
            <br /><br />
            Here's a step by step tutorial of how to export your chat:
          </p>
          <div class={`flex flex-main-center ${style.chooserWrapper}`}>
              <span class={`text-center ${style.chooserTab} ${style.active}`}>Android</span>
              <span class={`text-center ${style.chooserTab}`}>iOS</span>
          </div>
          <div>
            <ol class={`${style.instrucctionList}`}>
              <li><p class={style.instructionText}>Go to WhatsApp in your mobile phone and select the desired group.</p></li>
              <li class={style.inlineImgInstruction}><p class={style.instructionText}>Press the context menuin the top right corner.</p><img height="42" width="28" src="./assets/img/whatsapp-menu-button.png"  /></li>
              <li class={style.imgInstruction}><p class={style.instructionText}>In the context menu, select the "More" item.</p><img width="160" height="235" src="./assets/img/whatsapp-more-menu.png" /></li>
              <li class={style.imgInstruction}><p class={style.instructionText}>In the new menu, choose "Export Chat".</p><img width="160" height="195" src="./assets/img/whatsapp-export-menu.png" /></li>
              <li class={style.imgInstruction}><p class={style.instructionText}>You should get a popup where you need to choose between exporting with or without media.</p><img width="300" height="118" src="./assets/img/whatsapp-media-modal.png" /></li>
              <li><p class={style.instructionText}>That's the data you'll need for this app. The only ".txt" file is the one you'll want to use.</p></li>
            </ol>
          </div>
        </div>
    );
}
