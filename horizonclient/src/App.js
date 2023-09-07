import { Routes, Route } from "react-router-dom";
import "./App.css";
import LayoutPage from "./LayoutPage";
import Home from "./pages/Home";
import UserProfile from "./pages/UserProfile";
import PostDetail from "./pages/PostDetail";
import Explore from "./pages/Explore";
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";
import SearchResults from "./pages/SearchResults";
import Settings from "./pages/Settings";
import Privacy from "./pages/Privacy";
import TermsOfService from "./pages/TermsOfService";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LayoutPage />}>
        <Route index element={<Home />} />
        <Route path="user-profile" element={<UserProfile />} />
        <Route path="post" element={<PostDetail />} />
        <Route path="explore" element={<Explore />} />
        <Route path="create-post" element={<CreatePost />} />
        <Route path="edit-post" element={<EditPost />} />
        <Route path="search" element={<SearchResults />} />
        <Route path="settings" element={<Settings />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="terms-of-service" element={<TermsOfService />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
