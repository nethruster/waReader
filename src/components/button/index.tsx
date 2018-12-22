import { h } from 'preact';

const style = require('./styles.scss');

interface ButtonProps {
    text: string;
    type: string;
    onClickExecute?(): void;
    customClass?: string;
    disabled?: boolean;
}

export default function Button({
    text = 'A Button',
    type = 'default',
    onClickExecute = () => {},
    customClass,
    disabled
}: ButtonProps) {
    return (
        <button
            title={text}
            aria-label={text}
            type={type}
            className={`${style.button} ${customClass ? customClass : ''}`}
            onClick={onClickExecute}
            disabled={disabled}
        >
            <span>{text}</span>
        </button>
    );
}
