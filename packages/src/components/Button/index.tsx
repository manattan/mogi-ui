import React from "react";
import styled from "styled-components";

interface StyledProps {
  fontSize: number;
}

export type ButtonProps = Partial<StyledProps> & {
  label: string;
};

const ButtonContainer = styled.button.withConfig<StyledProps>({})`
  font-size: ${(props) => props.fontSize}px;
  color: ${(props) => props.theme.main.color};
  padding: 0;
  line-height: 1;
`;

const Button: React.FC<ButtonProps> = ({ label, fontSize = 16 }) => {
  return <ButtonContainer fontSize={fontSize}>{label}</ButtonContainer>;
};

export default Button;
