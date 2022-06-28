import "./App.css";
import {Navigation} from "./Component/Navbar/nav";
import { LandingPage } from "./Pages/Landing-Page/Landing-Page";
import {Notes} from "./Pages/Notes/notes";
import {Routes, Route} from "react-router-dom";
import { CreateNotes } from "./Pages/CreateNotes/QuillEditor";


function App() {
  return (
    <div className="App">
            <Navigation/>
            <Routes>
              <Route path="/" element={<LandingPage/>} />
              <Route path="createnotes" element={<CreateNotes/>}/>
              <Route path="Notes" element={<Notes/>} />
            </Routes>

    </div>
  );
}

export default App;
