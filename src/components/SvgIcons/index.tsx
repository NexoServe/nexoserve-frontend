import Arrow from './Arrow';
import Close from './Close';
import CloseFilled from './CloseFilled';
import EmptyCart from './EmptyCart';
import { SvgIconsType } from './types';

interface SvgProps extends SvgIconsType {
  name: 'close' | 'closeFilled' | 'arrow' | 'emptyCart';
}

const SvgIcons = (props: SvgProps) => {
  switch (props.name) {
    case 'close':
      return <Close {...props} />;
    case 'closeFilled':
      return <CloseFilled {...props} />;
    case 'arrow':
      return <Arrow {...props} />;
    case 'emptyCart':
      return <EmptyCart {...props} />;
    default:
      return null;
  }
};

export default SvgIcons;
