import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import {About} from './pages/About/About'
import {Dashboard} from './pages/Dashboard/Dashboard'
import {Exploration} from './pages/Exploration/Exploration'


// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function BasicExample() {
  return (
    <Router>
        <Routes>
          <Route  path="/" element={<Home/>}/>
          <Route  path="/exploration" element={<Exploration/>}/>
          <Route  path="/about" element={<About/>}/>
          <Route  path="/dashboard" element={<Dashboard/>}/>
        </Routes>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

