import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import Comment from "../components/Comment";
import Post from "../components/Post";


import classes from "./Comments.module.css";

function Comments({ datas }) {
  useEffect(() => {
    setData();
    // eslint-disable-next-line
  }, []);
  const parameterData = useParams();
  
  const [post, setPost] = useState(datas[0]);
  const [author, setAuthor] = useState("");
  const [comment, setComment] = useState("");
  

  const setData = () => {
    const data = datas.find((data) => `${data.id}` === parameterData.id);
    setPost(data);
  };


 
  const formSub = (e) => {
    e.preventDefault();
    const authorTrim = author.trim();
    const commentTrim = comment.trim();
    if (authorTrim && commentTrim) {
      const commnt = {
        name: author,
        comment: comment,
      };
      post.comments.push(commnt);
      setAuthor("");
      setComment("");
    }
  };


  return (
    <div className={classes.sections}>
      <section className={classes.post}>
        <Post data={post} comment={false} />
      </section>
      <section className={classes.comments}>
        <h2>All comments</h2>
        <ul className={classes.comment}>
          {post.comments.map((comment, index) => {
            return (
              <Comment key={index} comment={comment}/>
            );
          })}
        </ul>
      <form onSubmit={formSub}>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="author"
        />
      </form>
      <form onSubmit={formSub}>
        <input
          type="text"
          placeholder="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </form>
        <button>
          <Link to="/">Back</Link>
        </button>
      </section>
    </div>
  );
}
export default Comments;
