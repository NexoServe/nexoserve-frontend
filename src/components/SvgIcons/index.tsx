import Arrow from './Arrow';
import Close from './Close';
import CloseFilled from './CloseFilled';
import CloseFilledWhite from './CloseFilledWhite';
import EmptyCart from './EmptyCart';
import HalfPizza from './HalfPizza';
import Minus from './Minus';
import Plus from './Plus';
import { SvgIconsType } from './types';
import Warning from './Warning';
import WholePizza from './WholePizza';

interface SvgProps extends SvgIconsType {
  name:
    | 'close'
    | 'closeFilled'
    | 'closeFilledWhite'
    | 'arrow'
    | 'emptyCart'
    | 'minus'
    | 'plus'
    | 'halfPizza'
    | 'wholePizza'
    | 'warning';
}

const SvgIcons = (props: SvgProps) => {
  switch (props.name) {
    case 'close':
      return <Close {...props} />;
    case 'closeFilled':
      return <CloseFilled {...props} />;
    case 'closeFilledWhite':
      return <CloseFilledWhite {...props} />;
    case 'arrow':
      return <Arrow {...props} />;
    case 'emptyCart':
      return <EmptyCart {...props} />;
    case 'minus':
      return <Minus {...props} />;
    case 'plus':
      return <Plus {...props} />;
    case 'halfPizza':
      return <HalfPizza {...props} />;
    case 'wholePizza':
      return <WholePizza {...props} />;
    case 'warning':
      return <Warning {...props} />;
    default:
      return null;
  }
};

export default SvgIcons;
