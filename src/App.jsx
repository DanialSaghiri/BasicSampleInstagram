import "./index.css";
import ListPost from "./pages/ListPost";
import Comments from "./pages/Comments";
import { Routes, Route } from "react-router-dom";

import datas from "./data";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ListPost datas={datas} />} />
      <Route path="/comments/:id?" element={<Comments datas={datas} />} />
    </Routes>
  );
}
export default App;
