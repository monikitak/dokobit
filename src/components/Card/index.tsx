import { useState } from "react";
import CommentsList from "../CommentsList";
import Sidebar from "../Sidebar";
import { StyledCard, StyledContainer, StyledHeader } from "./StyledCard";
import Overview from "../Overview";

const Card = () => {
  const [activeMenuItem, setActiveMenuItem] = useState("Overview");

  const renderComponent = () => {
    switch (activeMenuItem) {
      case "Overview":
        return <Overview />;
      case "Comments":
        return <CommentsList />;
      default:
        return "Not found";
    }
  };

  return (
    <StyledContainer>
      <StyledCard>
        <StyledHeader>
          <h1>{activeMenuItem}</h1>
        </StyledHeader>
        {renderComponent()}
        <Sidebar
          setActiveMenuItem={setActiveMenuItem}
          activeMenuItem={activeMenuItem}
        />
      </StyledCard>
    </StyledContainer>
  );
};

export default Card;
