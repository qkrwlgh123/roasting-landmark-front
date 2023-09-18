import { useState } from 'react';
import Style from './checkBox.style';
import CheckIcon from '../../../../assets/images/check_icon.png';

const CheckBox = ({
  dayObject,
  handleChangeHolidayList,
  isChecked,
}: {
  dayObject: { order: number; day: string };
  handleChangeHolidayList: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isChecked: boolean;
}) => {
  return (
    <Style.CheckBoxContainer>
      <Style.HiddenCheckBox
        id={dayObject.day}
        onChange={handleChangeHolidayList}
        type="checkbox"
        value={dayObject.day}
        ischecked={isChecked}
      />
      <Style.StyledCheckBox htmlFor={dayObject.day} ischecked={isChecked}>
        <img src={CheckIcon} alt="check_icon" />
      </Style.StyledCheckBox>
      <span>{dayObject.day}</span>
    </Style.CheckBoxContainer>
  );
};

export default CheckBox;
