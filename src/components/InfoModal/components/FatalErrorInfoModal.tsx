import Lottie from 'react-lottie';
import { useRecoilState, useRecoilValue } from 'recoil';

import * as error from '../../../lottie/error.json';
import { InfoModalAtom } from '../../../state/InfoModalState';
import { RestaurantDetailsAtom } from '../../../state/RestaurantState';
import ModalHeader from '../../ModalHeader/ModalHeader';
import useStyles from '../css';
import { IFatalErrorInfoModal } from '../types';

const FatalErrorInfoModal = ({ theme }: IFatalErrorInfoModal) => {
  const classes = useStyles();
  const [, setInfoModalState] = useRecoilState(InfoModalAtom);
  const restaurantDetails = useRecoilValue(RestaurantDetailsAtom);
  // const [showMore, setShowMore] = useState(false);

  const onReset = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <>
      <ModalHeader
        text={'Fatal Error'}
        showCloseIcon={false}
        onClick={() => setInfoModalState({ showModal: false })}
        theme={theme}
      />
      <div className={classes.infoModalBody}>
        <Lottie
          options={{
            animationData: error,
            autoplay: true,
          }}
          width={'100%'}
          height={200}
        />

        <div className={classes.infoModalBodyMessage}>
          A fatal error has occurred. There are a few things you can do.
        </div>
        <ol className={classes.infoModalBodyList}>
          <li>Refresh the page and try again.</li>
          <li>
            Click the {`"Reset"`} button. NOTE: This will remove all the items
            on your shopping cart.
            <button
              onClick={() => onReset()}
              className={classes.infoModalBodyResetBtn}
            >
              Reset
            </button>
          </li>
          <li>
            If the error persists, you can call the restaurant at{' '}
            <a href={`tel:${restaurantDetails?.phoneNumbers?.[0]?.number}`}>
              {restaurantDetails?.phoneNumbers?.[0]?.number}
            </a>{' '}
            and place your order over the phone.
          </li>
          {/* <li>
            Or you can click the {`"Show More"`} button below and scroll to
            learn how you can resolve this error.
          </li> */}
        </ol>
        {/* 
        <button
          onClick={() => setShowMore(true)}
          className={classes.infoModalBodyShowMoreBtn}
        >
          Show More
        </button>
        {showMore && (
          <div>
            <div className={classes.infoModalBodyMessage}>
              More ways to resolve this error:
            </div>
            <ol className={classes.infoModalBodyList}>
              <li>
                Click the {`"Reset"`} button. NOTE: This will remove all the
                items on your shopping cart.
                <button
                  onClick={() => onReset()}
                  className={classes.infoModalBodyResetBtn}
                >
                  Reset
                </button>
              </li>
              <li>
                If the error persists, you can call the technology customer
                assistant <a href={`tel:(518)888-0022`}>(518) 888-0022</a>.
              </li>
            </ol>
          </div>
        )} */}
      </div>
    </>
  );
};

export default FatalErrorInfoModal;
