import Arrow from './Arrow';
import Close from './Close';
import CloseFilled from './CloseFilled';
import { SvgIconsType } from './types';

interface SvgProps extends SvgIconsType {
  name: 'close' | 'closeFilled' | 'arrow';
}

const SvgIcons = (props: SvgProps) => {
  switch (props.name) {
    case 'close':
      return <Close {...props} />;
    case 'closeFilled':
      return <CloseFilled {...props} />;
    case 'arrow':
      return <Arrow {...props} />;
    default:
      return null;
  }
};

export default SvgIcons;
