function Comment({comment}) {
  return (
    <li>
      <span>{comment.name} : </span>
      <span>{comment.comment}</span>
    </li>
  );
}
export default Comment;
