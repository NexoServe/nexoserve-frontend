import useStyles from './css';
import { ITextArea } from './types';

const TextArea = ({ label, theme, ...rest }: ITextArea) => {
  const classes = useStyles({
    theme,
  });
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
