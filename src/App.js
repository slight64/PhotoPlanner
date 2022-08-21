import "./App.css";
import Header from "./Components/header";
import ProjectHeader from "./Components/project-header";
import MainTags from "./Components/main-tags";
import ChildrenTags from "./Components/children-tags";
import ProjectSection from "./Components/project-section";

function App() {
    return (
        <div className="App">
            <Header/>
            <main className="main-page">
                <ProjectHeader/>
                <div className="main-project-body">
                    <MainTags/>
                    <ChildrenTags/>
                    <ProjectSection/>
                </div>
            </main>
        </div>
    );
}

export default App;
