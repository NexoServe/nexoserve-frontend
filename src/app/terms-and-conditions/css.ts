import { tss } from 'tss-react';

import { base } from '../../../css/base';
import queries from '../../../css/queries';
import { ThemeType } from '../../../generated/graphql';

const useStyles = tss
  .withParams<{ theme: ThemeType }>()
  .create(({ theme }) => ({
    termsContainer: {
      maxWidth: base(90),
      margin: '0 auto',
      paddingBottom: base(5),
    },

    termsUpdateDate: {
      paddingTop: base(5),
      textDecoration: 'italic',
    },

    termsHeading: {
      paddingTop: base(5),
      fontSize: '30px',
      lineHeight: '36px',
      textAlign: 'center',
      marginBottom: base(5),

      [queries.l]: {
        fontSize: '40px',
        lineHeight: '40px',
        paddingBottom: base(2),
      },
    },

    termsSection: {
      marginTop: base(4),
    },

    termsSectionTitle: {
      fontSize: '22px',
      lineHeight: '24px',
      fontWeight: '600',
      marginBottom: base(2),
      marginTop: base(2),
    },

    termsLink: {
      color: theme.primary,
    },

    termsSubTitle: {
      fontSize: '18px',
      lineHeight: '22px',
      fontWeight: '600',
      marginBottom: base(2),
      marginTop: base(2),
    },

    termsSubSection: {
      fontSize: '16px',
      lineHeight: '26px',
      opacity: 0.9,
      marginBottom: base(2),
    },

    termsList: {
      marginTop: base(2),
      paddingLeft: base(4),
      marginBottom: base(2),

      '& li': {
        lineHeight: '26px',
      },
    },
  }));

export default useStyles;
