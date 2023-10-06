import styled from 'styled-components';

const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  span {
    display: inline-block;
    margin-top: -10px;
  }
`;

const StyledCheckBox = styled.label<{ $ischecked: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border: ${(props) => (props.$ischecked ? 'none' : 'solid 0.1rem #dddddd')};
  background: ${(props) => (props.$ischecked ? '#C9612D' : '#E5E8EC')};
  border-radius: 4px;
  transition: all 150ms;
  cursor: pointer;
  margin: 0 10px 0 0;
`;

const HiddenCheckBox = styled.input<{ $ischecked: boolean }>`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export default { CheckBoxContainer, StyledCheckBox, HiddenCheckBox };
