
function App() {
    return (
        <div className="App">
            <main className="flow">
                <header className="header | region">
                    <h1>devfinder</h1>
                    <button>Light/Dark</button>
                </header>
                <article className="flow">
                    <input
                        type="search"
                        name="username"
                        id="search_username"
                        placeholder="Search Github username.."
                    />
                    <button>Search</button>
                </article>
                <article className="profile | region">
                    <header>
                        <img src="./assets/" alt="" />
                        <h2>The Octocat</h2>
                        <a href="">@octocat</a>
                        <span>Joined 25 Jan 2011</span>
                    </header>

                    <div className="flow">
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Donec odio. Quisque volutpat mattis eros.
                        </p>
                        <div className="stats | grid">
                            <div>
                                <p>Repos</p>
                                <span>8</span>
                            </div>
                            <div>
                                <p>Followers</p>
                                <span>3938</span>
                            </div>
                            <div>
                                <p>Following</p>
                                <span>9</span>
                            </div>
                        </div>

                        <ul className="links | grid">
                            <li>
                                <a href="#location">
                                    <img src="" alt="" />
                                    San Francisco
                                </a>
                            </li>
                            <li>
                                <a href="#social">
                                    <img src="" alt="" />
                                    Not Available
                                </a>
                            </li>
                            <li>
                                <a href="#website">
                                    <img src="" alt="" />
                                    https://github.blog
                                </a>
                            </li>
                            <li>
                                <a href="#work">
                                    <img src="" alt="" />
                                    @github
                                </a>
                            </li>
                        </ul>
                    </div>
                </article>
            </main>
            <footer></footer>
        </div>
    );
}

export default App;
