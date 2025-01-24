import { CommentProps } from "../../types/types";
import bin from "../../assets/images/bin.svg";
import pencil from "../../assets/images/pencil.svg";
import {
  StyledActions,
  StyledAvatar,
  StyledComment,
  StyledContainer,
  StyledDate,
  StyledHeader,
  StyledName,
  StyledText,
} from "./StyledComment";
import { useComments } from "../../hooks/useComments";

type Props = {
  data: CommentProps;
};

const Comment = ({ data }: Props) => {
  const { deleteComment, editComment } = useComments();

  return (
    <StyledContainer>
      <StyledAvatar>{data.avatar}</StyledAvatar>
      <StyledComment>
        <StyledHeader>
          <StyledName>{data.name}</StyledName>
          <StyledActions>
            <img src={pencil} alt="Edit" onClick={() => editComment(data.id)} />
            <img
              src={bin}
              alt="Delete"
              onClick={() => deleteComment(data.id)}
            />
          </StyledActions>
        </StyledHeader>
        <StyledDate>{data.date}</StyledDate>
        <StyledText>{data.text}</StyledText>
      </StyledComment>
    </StyledContainer>
  );
};

export default Comment;
