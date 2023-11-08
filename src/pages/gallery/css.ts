import { createUseStyles } from 'react-jss';

import { base } from '../../../css/base';
import queries from '../../../css/queries';

const useStyles = createUseStyles({
  galleryHero: {
    width: '100%',
    height: '60vh',
    backgroundImage: `linear-gradient(180deg, hsla(0, 0%, 100%, 0.9), hsla(0, 0%, 100%, 0.7)), url("https://us-east-menu-images.s3.amazonaws.com/igli_7_put_pizza_on_the_right_4dc04a34-8daf-4f76-85c0-0c904cfe5fbd+(2)+(1).png")`,
    borderBottomLeftRadius: '100px',
    borderBottomRightRadius: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  galleryHeroTitle: {
    fontSize: '50px',
    fontWeight: '600',
  },
  galleryContainer: {
    paddingTop: base(5),

    [queries.l]: {
      paddingBottom: base(5),
    },
  },

  galleryImageWrapper: {
    margin: base(1),
  },

  galleryImage: {
    borderRadius: base(2),
  },
});

export default useStyles;
