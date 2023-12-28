import { useRecoilState } from 'recoil';

import { base } from '../../../../css/base';
import colors from '../../../../css/colors';
import { FoodModalCustomInstructionsAtom } from '../../../state/FoodModalState';

import useStyles from './css';

const FoodModalCustomInstructions = () => {
  const styles = useStyles();

  const [customInstructions, setCustomInstructions] = useRecoilState(
    FoodModalCustomInstructionsAtom,
  );

  return (
    <div className={styles.foodModalBodyChildBorder}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <label
          style={{
            fontSize: '18px',
            marginBottom: base(2),
          }}
          htmlFor="textarea"
        >
          Custom Instructions
        </label>
        <textarea
          style={{
            backgroundColor: colors.secondary,
            maxWidth: '100%',
            minWidth: '100%',
            minHeight: '125px',
            maxHeight: '125px',
            padding: base(2),
            outline: 'none',
            border: '1px solid rgba(0, 0, 0, 0.1)',
            borderRadius: base(1),
          }}
          value={customInstructions}
          onChange={(e) => setCustomInstructions(e.target.value)}
          id="textarea"
          maxLength={200}
          placeholder="Max 200 characters"
        />
      </div>
    </div>
  );
};

export default FoodModalCustomInstructions;
