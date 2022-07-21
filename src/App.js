import "./App.css";
import {Navigation} from "./Component/Navbar/nav";
import { LandingPage } from "./Pages/Landing-Page/Landing-Page";
import {Notes} from "./Pages/Notes/notes";
import {Routes, Route} from "react-router-dom";
import { CreateNotes } from "./Pages/CreateNotes/QuillEditor";
import {Archieve} from "./Pages/Archieve/archieve"
import { TrashPage } from "./Pages/TrashPage/TrashPage";
import {Login} from "./Pages/Auth/LogIN/Login"
import {SignUp} from "./Pages/Auth/SignUP/SignUp"


function App() {
  return (
    <div className="App">
            <Navigation/>
            <Routes>
              <Route path="/" element={<LandingPage/>} />
              <Route path="/createnotes" element={<CreateNotes/>}/>
              <Route path="/Notes" element={<Notes/>} />
              <Route path="/archieve" element={<Archieve/>} />
              <Route path="/trash" element={<TrashPage/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/signup" element={<SignUp/>} />
            </Routes>

    </div>
  );
}

export default App;
