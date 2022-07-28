import styled from 'styled-components';
import { Form, Field } from 'formik';

export const FormBox = styled(Form)`
  display: flex;
  flex-direction: column;
  padding: ${p => p.theme.space[4]}px;
  border: ${p => p.theme.borders.normal};
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-top: ${p => p.theme.space[3]}px;
  color: ${p => p.theme.colors.text};
`;
export const Input = styled(Field)`
  width: 300px;
  margin-top: ${p => p.theme.space[2]}px;
  padding: ${p => p.theme.space[2]}px;
  font-size: ${p => p.theme.fontSizes.m};
  border-radius: ${p => p.theme.radii.normal};
  border: ${p => p.theme.borders.normal};
  outline: none;
  :hover,
  :focus {
    border: ${p => p.theme.borders.focus};
  }
`;

export const SubmitBtn = styled.button`
  width: max-content;
  margin-top: ${p => p.theme.space[4]}px;
  padding: ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.radii.normal};
  border: none;
  outline: none;
  box-shadow: ${p => p.theme.shadows.lineShadow};
  :hover {
    transform: scale(1.05);
    background-color: ${p => p.theme.colors.blue};
    border: none;
    outline: none;
    cursor: pointer;
  }
`;

export const ErrText = styled.p`
  color: ${p => p.theme.colors.red};
  padding: 0px;
  margin: 0px;
  font-size: ${p => p.theme.fontSizes.s};
`;
