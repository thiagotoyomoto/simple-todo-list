import React, { useState, useEffect, useRef } from 'react';
import { Icon } from '@iconify/react';

import { Container } from './styles';

import checkIcon from '@iconify/icons-mdi/check-bold';

export interface PropsType {
  icon?: object;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  children?: React.ReactNode;
}

const Checkbox: React.FC<PropsType> = ({
  icon = checkIcon,
  checked = false,
  onChange = () => {},
}) => {
  const itFirstRun = useRef(true);
  const [isChecked, setChecked] = useState<boolean>(checked);

  useEffect(() => {
    if (itFirstRun.current) {
      itFirstRun.current = false;
      return;
    }

    onChange(isChecked);
  }, [isChecked]);

  function handleClick() {
    setChecked(!isChecked);
  }

  return (
    <Container onClick={handleClick}>
      {isChecked && <Icon icon={icon} width={18} />}
    </Container>
  );
};

export default Checkbox;
