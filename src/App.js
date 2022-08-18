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
                        <button className="search-clear-btn clear-btn"></button>
                    </form>
                    <div className="main-project-navigation">
                        <button className="project-btn copy"></button>
                        <button className="project-btn share"></button>
                        <button className="project-btn edit"></button>
                        <button className="project-btn delete"></button>
                    </div>
                </div>
                <div className="main-project-body">
                    <div className="main-tags tags">
                        <div className="tag-wrapper tag-select">
                            <span className="section-tag tag ">Локация</span>
                        </div>
                        <div className="tag-wrapper">
                            <span className="section-tag tag">Образ</span>
                        </div>
                        <div className="tag-wrapper">
                            <span className="section-tag tag ">Поза</span>
                        </div>



                    </div>
                    <div className="tag-children ">
                        <div className="children">
                            <span className="tag-parent-name ">Локация:</span>
                            <div className="tags ">
                                <div className="tag-wrapper">
                                    <span className="tag-name tag">Локация</span>
                                    <button className="tag-delete"></button>
                                </div>

                            </div>
                        </div>

                        <div className="children">
                            <span className="tag-parent-name ">Локация:</span>
                            <div className="tags ">
                                <div className="tag-wrapper">
                                    <span className="tag-name tag">Локация</span>
                                    <button className="tag-delete"></button>
                                </div>

                            </div>
                        </div>
                        <div className="children">
                            <span className="tag-parent-name ">Локация:</span>
                            <div className="tags ">
                                <div className="tag-wrapper">
                                    <span className="tag-name tag">Локация</span>
                                    <button className="tag-delete"></button>
                                </div>

                            </div>
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
