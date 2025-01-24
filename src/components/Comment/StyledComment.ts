import { styled } from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  gap: 8px;
`;

export const StyledAvatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 30px;
  min-width: 30px;
  height: 30px;
  width: 30px;
  margin-top: 8px;
  font-size: 12px;
  font-weight: 500;
  color: #fff;
  border-radius: 50%;
  background-color: #7e57c2;
`;

export const StyledComment = styled.div`
  position: relative;
  width: 100%;
  padding: 8px;
  border-radius: 8px;
  &:hover {
    background-color: #f5f5f5;
    img {
      display: block;
    }
  }
`;

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  min-height: 18px;
`;

export const StyledName = styled.h5`
  margin-right: auto;
  padding-right: 56px;
  font-size: 14px;
  font-weight: 500;
  color: #1a1a1a;
  line-height: 16.41px;
`;

export const StyledActions = styled.div`
  position: absolute;
  top: 8px;
  right: 10px;
  display: flex;
  gap: 12px;
  img {
    cursor: pointer;
    @media (min-width: 576px) {
      display: none;
    }
  }
`;

export const StyledDate = styled.p`
  margin-top: 3px;
  margin-bottom: 4px;
  font-size: 12px;
  color: #757575;
  line-height: 14.06px;
`;

export const StyledText = styled.p`
  font-size: 14px;
  color: #1a1a1a;
  line-height: 16.41px;
`;
