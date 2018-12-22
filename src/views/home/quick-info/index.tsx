import { h } from 'preact';

import QuickInfoContent from './content';

const style = require('./styles.scss');

export default function QuickInfo() {
    return (
        <div className={style.quickinfoWrapper}>
            <QuickInfoContent
                icon="secure"
                title="Does this respect my privacy?"
                text="Your messages/chats never leave your computer, all of it is
          manipulated and processed in your browser, our servers don't even
          expect it."
            />
            <QuickInfoContent
                icon="group"
                title="Who maintains this project?"
                text="Glad you ask! We're Nethruster, we are a group of developers and we like to help people by making
          great, modern and secure software."
            />
        </div>
    );
}
