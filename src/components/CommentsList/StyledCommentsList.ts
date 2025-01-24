import { styled } from "styled-components";

export const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 80px 24px 24px 24px;
  text-align: center;
`;

export const StyledInfoTitle = styled.h4`
  font-size: 20px;
  font-weight: 700;
  line-height: 23.44px;
  color: #222;
`;

export const StyledInfoText = styled.p`
  line-height: 24px;
  color: rgba(0, 0, 0, 0.6);
`;

export const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  overflow: auto;
`;

export const StyledInputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  border-top: 1px solid #e9e9e9;
`;

export const StyledInput = styled.input`
  height: 36px;
  width: 100%;
  padding: 8px 12px;
  border-radius: 17px;
  border: 1px solid #f5f5f5;
  background-color: #f5f5f5;
  font-size: 15px;
  color: #757575;
  &:focus {
    border-color: #f0f0f0;
    outline: 0;
    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.2);
  }
`;

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  width: 20px;
  min-height: 20px;
  height: 20px;
  padding: 2px;
  border-radius: 50%;
  background-color: #ff8b00;
`;
