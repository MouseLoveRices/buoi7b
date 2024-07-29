import ListPage from "./components/pages/ListPage";
import MainPage from "./components/pages/MainPage";
import StudentPage from "./components/pages/StudentPage";
import UserPage from "./components/pages/UserPage";

function App() {
  return (
    <div className="App">
        <MainPage/>
        <UserPage/>
        <StudentPage/>
        <ListPage/>
    </div>
  );
}

export default App;
