import useStyles from './css';

const TextArea = () => {
  const classes = useStyles();
  return (
    <>
      <label className={classes.textAreaLabel} htmlFor="textarea">
        Delivery Details
      </label>
      <textarea
        placeholder="Enter delivery details here. (Max 140 characters)"
        maxLength={140}
        id="textarea"
        className={classes.textArea}
      />
    </>
  );
};

export default TextArea;
