import Comment from "../Comment";
import arrow from "../../assets/images/arrow.svg";
import balloon from "../../assets/images/balloon.png";
import {
  StyledButton,
  StyledInfo,
  StyledInfoText,
  StyledInfoTitle,
  StyledInput,
  StyledInputWrapper,
  StyledList,
} from "./StyledCommentsList";
import { useComments } from "../../hooks/useComments";

const CommentsList = () => {
  const {
    currentComment,
    handleComment,
    comments,
    setCurrentComment,
    loading,
  } = useComments();

  if (loading) {
    return null;
  }

  return (
    <>
      {!comments.length ? (
        <StyledInfo>
          <img src={balloon} alt="balloon" />
          <StyledInfoTitle>No comments yet</StyledInfoTitle>
          <StyledInfoText>Be the first to add a comment</StyledInfoText>
        </StyledInfo>
      ) : (
        <StyledList>
          {comments.map((data) => (
            <Comment key={data.id} data={data} />
          ))}
        </StyledList>
      )}
      <StyledInputWrapper>
        <StyledInput
          type="text"
          value={currentComment.text}
          onChange={(e) =>
            setCurrentComment({ ...currentComment, text: e.target.value })
          }
          placeholder="Type a comment"
        />
        <StyledButton
          onClick={handleComment}
          disabled={!currentComment.text}
          tabIndex={0}
          type="submit"
        >
          <img src={arrow} alt="Submit" />
        </StyledButton>
      </StyledInputWrapper>
    </>
  );
};

export default CommentsList;
