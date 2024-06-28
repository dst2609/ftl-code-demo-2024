import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AboutPage from "./Components/About"
import EmptyPage from "./Components/Empty"
import ProfilePage from "./Components/Profile";
import HomePage from "./Components/Home";
import ProjectsPage from "./Components/Projects";
import SearchPage from "./Components/Search";
import TeamPage from "./Components/Team";

const App = () => {
  return (
    <div>
        <BrowserRouter>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/ABOUT">About</Link>
              </li>
              <li>
                <Link to="/search">Search</Link>
              </li>
              <li>
                <Link to="/team">Team</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="ABOUT" caseSensitive={true} element={<AboutPage />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="team" element={<TeamPage />}>
              <Route index element={<ProjectsPage />} />
              <Route path="profile/:userId" element={<ProfilePage />} />
              <Route path="*" element={<EmptyPage />} />
            </Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
