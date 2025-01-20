interface CommentBoxProps {
  maxLength?: number;
  value?: string;
  imageUrl?: string;
  placeholder?: string;
  onSubmit: (value: string) => void;
  onInputChange?: (value: string) => void;
  containerHeight?: number;
  containerWidth?: number;
}
export default CommentBoxProps;
