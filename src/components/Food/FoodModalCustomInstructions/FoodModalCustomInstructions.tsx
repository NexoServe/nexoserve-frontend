import { useRecoilState } from 'recoil';

import { base } from '../../../../css/base';
import { FoodModalCustomInstructionsAtom } from '../../../state/FoodModalState';

import useStyles from './css';
import { IFoodModalCustomInstructions } from './types';

const FoodModalCustomInstructions = ({
  theme,
}: IFoodModalCustomInstructions) => {
  const styles = useStyles({
    theme,
  });

  const [customInstructions, setCustomInstructions] = useRecoilState(
    FoodModalCustomInstructionsAtom,
  );

  return (
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
          color: theme.primary,
        }}
        htmlFor="textarea"
      >
        Custom Instructions
      </label>
      <textarea
        className={styles.foodModalCustomInstructionsTextarea}
        value={customInstructions}
        onChange={(e) => setCustomInstructions(e.target.value)}
        id="textarea"
        maxLength={200}
        placeholder="Max 200 characters"
      />
    </div>
  );
};

export default FoodModalCustomInstructions;
