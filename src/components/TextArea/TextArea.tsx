import useStyles from './css';
import { ITextArea } from './types';

const TextArea = ({ label, ...rest }: ITextArea) => {
  const classes = useStyles();
  return (
    <>
      <label className={classes.textAreaLabel} htmlFor="textarea">
        {label}
      </label>
      <textarea id="textarea" className={classes.textArea} {...rest} />
    </>
  );
};

export default TextArea;
