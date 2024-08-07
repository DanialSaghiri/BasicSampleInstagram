
import Post from "../components/Post";


function ListPost({datas }) {
  return (
    <>
      <ul className="container listPost">
      {datas.map((data) => {
        return (
            <Post key={data.id} data={data} comment={true} />
        );
      })}
      </ul>
    </>
  );
}
export default ListPost;
