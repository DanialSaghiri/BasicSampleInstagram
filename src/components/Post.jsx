import { useState } from "react";
import { Link } from "react-router-dom";
function Post({ data, comment }) {
  const [like, setLike] = useState(false);
  const likeHandler = () => {
    setLike(!like);
  };
  return (
    <>
      <li className={comment ? "post":"postcom"}>
        <h2>{data?.name}</h2>
        <img src={data.image} alt="" />
        <div className="info">
          <button onClick={likeHandler}>
            {like ? data.like + 1 : data.like}
            <i className={`${like ? "heart" : null} bx bxs-heart`}></i>
          </button>
          {comment && (
            <button>
              <Link to={`/comments/${data.id}`}>
                {data?.comments.length}
                <i className="bx bx-message-rounded-add"></i>
              </Link>
            </button>
          )}
        </div>
        <p>{data?.caption}</p>
      </li>
    </>
  );
}
export default Post;
