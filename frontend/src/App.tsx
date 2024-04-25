import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Blog } from "./pages/Blog";
import { Signin } from "./pages/Signin";
import { Signup } from "./pages/Signup";
import { Blogs } from "./pages/Blogs";
import { Publish } from "./pages/Publish";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/blog/:id" element={<Blog />}></Route>
          <Route path="/blogs" element={<Blogs />}></Route>
          <Route path="/publish" element={<Publish />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

// TODO: add a skeleton page, making the editor much better, cacheing all of these so we don't see loader again and again, log out option, the signup page should redirect to dasboard if the user is logged in
