import { StyledContainer, StyledText, StyledTitle } from "./StyledOverview";

const Overview = () => {
  return (
    <StyledContainer>
      <StyledTitle>Document owner</StyledTitle>
      <StyledText>Vardenis Pavardenis</StyledText>
      <StyledTitle>Creation date</StyledTitle>
      <StyledText>2020.03.10 12:00</StyledText>
      <StyledTitle>Deadline</StyledTitle>
      <StyledText>2020.03.21 14:00</StyledText>
    </StyledContainer>
  );
};

export default Overview;
