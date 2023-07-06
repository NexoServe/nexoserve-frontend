import Divider from '../Divider/Divider';
import SvgIcons from '../SvgIcons';

import useStyles from './css';
import { IModalHeader } from './types';

const ModalHeader = ({ text, onClick, showCloseIcon = true }: IModalHeader) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.modalHeader}>
        <h2 className={classes.modalHeaderTitle}>{text}</h2>
        {showCloseIcon && (
          <button
            className={`${classes.modalHeaderCloseButton}`}
            onClick={onClick}
            type="button"
          >
            <SvgIcons name="close" />
          </button>
        )}
      </div>
      <Divider />
    </>
  );
};

export default ModalHeader;
