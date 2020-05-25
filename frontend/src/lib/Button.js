import React from "react";
import styled from "styled-components/macro";

export const Button = ({
  onClick,
  icon,
  buttonText,
  backgroundColor,
  textColor,
  borderProperties,
  width,
  fontFamily
}) => {
  return (

    < StyledButton
      onClick={onClick}
      background={backgroundColor}
      border={borderProperties}
      width={width}
      color={textColor}
      fontFamily={fontFamily}
    >
      {icon && <Icon>{icon}</Icon>
      }
      {buttonText}
    </StyledButton >
  );
};

const StyledButton = styled.button`
  min-width: 64px;
  min-height: 36px;
  width: ${props => props.width};
  padding: 0 16px 0 16px;
  border-radius: 3px;
  background-color: ${props => props.background};
  border: ${props => props.border};
  color: {
    ${props => props.color} : 'white'
  }
  margin: 20px;
  font-family: ${props => props.fontFamily};
`;

const Icon = styled.span`
   padding-right: 8px;
  padding-left: -4px;
`;