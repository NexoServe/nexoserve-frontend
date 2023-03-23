import Close from './Close';
import CloseFilled from './CloseFilled';
import { SvgIconsType } from './types';

interface SvgProps extends SvgIconsType {
  name: 'close' | 'closeFilled';
}

const SvgIcons = (props: SvgProps) => {
  switch (props.name) {
    case 'close':
      return <Close {...props} />;
    case 'closeFilled':
      return <CloseFilled {...props} />;
    default:
      return null;
  }
};

export default SvgIcons;
