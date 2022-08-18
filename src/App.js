import "./App.css";

function App() {
    return (
        <div className="App">
            <header className="header">
                <section className="navigation">
                    <div className="logo">Logo</div>
                    <nav className="header-navigation">
                        <p className="header-user-name">Иван Иванов</p>
                        <img className="header-user-image" alt={''}></img>
                    </nav>
                </section>
            </header>
            <main className="main-page">
                <div className="main-header-wrapper">
                    <h1 className="main-title">Название проекта</h1>
                    <form className="main-search-form">
                        <input className="search-input" placeholder="Найти"/>
                        <button className="search-clear-btn"></button>
                    </form>
                    <div className="main-project-navigation">
                        <button className="project-btn copy"></button>
                        <button className="project-btn share"></button>
                        <button className="project-btn edit"></button>
                        <button className="project-btn delete"></button>
                    </div>
                </div>
                <div className="main-project-body">
                    <div className="tags">
                        <span className="section-tag tag tag-select">Локация</span>
                        <button className="tag-delete">x</button>
                        <span className="section-tag tag ">Образ</span>
                        <button className="tag-delete">x</button>
                        <span className="section-tag tag ">Поза</span>
                        <button className="tag-delete">x</button>
                    </div>
                    <div className="tag-children ">
                        <span className="tag-parent-name ">Локация:</span>

                        <div className="tags">
                            <span className="tag-name tag">Локация</span>
                            <button className="tag-delete">x</button>
                        </div>
                    </div>
                    <div className="project-items">
                        <span className="project-items-count">2</span>
                        <p className="project-items-identification">Фото</p>
                    </div>
                    <div className="project-items-images">
                        <div className="project-item">
                            <img alt={''}/>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default App;
