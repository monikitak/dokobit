import { styled } from "styled-components";

export const StyledSidebar = styled.div`
  grid-column: 2/3;
  grid-row: 1/4;
  border-left: 1px solid #e9e9e9;
`;

const activeStyles = `
  background-color: #fff3e0;
  font-weight: 700;
  color: #ff8b00;
  svg {
    color: #ff8b00;
  }
`;

export const StyledItem = styled.div<{ $isActive: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
  min-height: 80px;
  padding: 8px;
  font-size: 12px;
  line-height: 14.06px;
  text-align: center;
  cursor: pointer;
  svg {
    color: #9d9d9d;
  }
  &:hover {
    ${activeStyles}
  }
  ${({ $isActive }) => $isActive && activeStyles}
`;

export const StyledIconWrapper = styled.div`
  position: relative;
`;

export const StyledBadge = styled.div`
  position: absolute;
  top: -5px;
  right: -5px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 13px;
  height: 13px;
  padding: 2px;
  border-radius: 50%;
  background-color: #ff8b00;
  font-size: 8px;
  font-weight: 700;
  color: #fff;
  line-height: 9.38px;
`;
