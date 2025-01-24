export type NavigationItemProps = {
  name: string;
  icon: React.ReactNode;
  badge?: boolean;
};

export type SidebarProps = {
  setActiveMenuItem: (menuItem: string) => void;
  activeMenuItem: string;
};

export type CommentProps = {
  id: number;
  name: string;
  avatar: string;
  text: string;
  date: string;
};

export type CommentsContextType = {
  handleComment: () => void;
  deleteComment: (id: number) => void;
  comments: CommentProps[];
  currentComment: CommentProps;
  setCurrentComment: React.Dispatch<React.SetStateAction<CommentProps>>;
  editComment: (id: number) => void;
  loading: boolean;
};
