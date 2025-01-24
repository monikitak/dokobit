import { createContext, useContext, useEffect, useState } from "react";
import { CommentProps, CommentsContextType } from "../types/types";
import useLocalStorage from "./useLocalStorage";

const CommentsContext = createContext<CommentsContextType | undefined>(
  undefined
);

const defaultComment: CommentProps = {
  id: Date.now(),
  name: "Vardenis Pavardenis",
  text: "",
  date: new Date().toISOString().slice(0, 16).replace("T", " "),
  avatar: "VP",
};

export const CommentsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [comments, setComments] = useState<CommentProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentComment, setCurrentComment] =
    useState<CommentProps>(defaultComment);
  const { saveToLocalStorage, getFromLocalStorage } = useLocalStorage();

  useEffect(() => {
    try {
      const commentsData = getFromLocalStorage("comments");
      if (commentsData) {
        setComments(getFromLocalStorage("comments"));
      }
    } catch (error) {
      console.error("LocalStorage error:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleComment = () => {
    if (currentComment.text.trim()) {
      const isExistingComment = comments.find(
        (comment) => comment.id === currentComment.id
      );
      if (isExistingComment) {
        const updatedComments = comments.map((comment) =>
          comment.id === currentComment.id
            ? { ...currentComment, text: currentComment.text.trim() }
            : comment
        );
        setComments(updatedComments);
        saveToLocalStorage("comments", updatedComments);
      } else {
        const newCommentObj = {
          ...currentComment,
          id: Date.now(),
          date: new Date().toISOString().slice(0, 16).replace("T", " "),
        };
        const updatedComments = [...comments, newCommentObj];
        setComments(updatedComments);
        saveToLocalStorage("comments", updatedComments);
      }

      setCurrentComment(defaultComment);
    }
  };

  const deleteComment = (id: number) => {
    const updatedComments = comments.filter((comment) => comment.id !== id);
    setComments(updatedComments);
    saveToLocalStorage("comments", updatedComments);
    console.log(comments);
  };

  const editComment = (id: number) => {
    const selectedComment = comments.find((comment) => comment.id === id);
    console.log("selectedComment", selectedComment);
    if (selectedComment) {
      setCurrentComment(selectedComment);
    }
  };

  const comm = {
    handleComment,
    deleteComment,
    comments,
    currentComment,
    setCurrentComment,
    editComment,
    loading,
  };
  return (
    <CommentsContext.Provider value={comm}>{children}</CommentsContext.Provider>
  );
};

export const useComments = () => {
  const context = useContext(CommentsContext);
  if (!context) {
    throw new Error("useComments must be used within an AuthProvider");
  }
  return context;
};
