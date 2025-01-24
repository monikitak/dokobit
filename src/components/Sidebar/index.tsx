import { NavigationItemProps, SidebarProps } from "../../types/types";
import {
  StyledBadge,
  StyledIconWrapper,
  StyledItem,
  StyledSidebar,
} from "./StyledSidebar";
import NoteIcon from "../Icons/NoteIcon";
import CommentIcon from "../Icons/CommentIcon";
import { useComments } from "../../hooks/useComments";

const navigation: NavigationItemProps[] = [
  { name: "Overview", icon: <NoteIcon /> },
  { name: "Comments", icon: <CommentIcon />, badge: true },
];

const Sidebar = ({ setActiveMenuItem, activeMenuItem }: SidebarProps) => {
  const { comments } = useComments();

  return (
    <StyledSidebar>
      {navigation.map((item, index) => (
        <StyledItem
          key={index}
          onClick={() => setActiveMenuItem(item.name)}
          $isActive={activeMenuItem === item.name}
        >
          <StyledIconWrapper>
            {item.icon}
            {item.badge && comments.length > 0 && (
              <StyledBadge>{comments.length}</StyledBadge>
            )}
          </StyledIconWrapper>
          {item.name}
        </StyledItem>
      ))}
    </StyledSidebar>
  );
};

export default Sidebar;
