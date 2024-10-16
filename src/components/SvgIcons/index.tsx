import Arrow from './Arrow';
import Car from './Car';
import Clock from './Clock';
import Close from './Close';
import CloseFilled from './CloseFilled';
import CloseFilledWhite from './CloseFilledWhite';
import Delivery from './Delivery';
import EmptyCart from './EmptyCart';
import Facebook from './Facebook';
import HalfPizza from './HalfPizza';
import Info from './Info';
import Instagram from './Instagram';
import Minus from './Minus';
import Phone from './Phone';
import PickUp from './PickUp';
import Plus from './Plus';
import { SvgIconsType } from './types';
import Warning from './Warning';
import WholePizza from './WholePizza';
import X from './X';

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
    | 'warning'
    | 'car'
    | 'clock'
    | 'info'
    | 'pickUp'
    | 'delivery'
    | 'x'
    | 'facebook'
    | 'instagram'
    | 'phone';
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
    case 'car':
      return <Car {...props} />;
    case 'clock':
      return <Clock {...props} />;
    case 'info':
      return <Info {...props} />;
    case 'pickUp':
      return <PickUp {...props} />;
    case 'delivery':
      return <Delivery {...props} />;
    case 'x':
      return <X {...props} />;
    case 'facebook':
      return <Facebook {...props} />;
    case 'instagram':
      return <Instagram {...props} />;
    case 'phone':
      return <Phone {...props} />;
    default:
      return null;
  }
};

export default SvgIcons;
