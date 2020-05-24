import React from "react";
import styled from "styled-components/macro";

export const Button = ({
  onClick,
  icon,
  buttonText,
  backgroundColor,
  textColor,
  borderProperties,
  width
}) => {
  return (

    < StyledButton
      onClick={onClick}
      background={backgroundColor}
      border={borderProperties}
      width={width}
      color={textColor}
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
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  color: {
    ${props => props.color} : 'white'
  }
  margin: 20px;
`;

const Icon = styled.span`
   padding-right: 8px;
  padding-left: -4px;
`;