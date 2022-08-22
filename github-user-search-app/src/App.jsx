import './App.css'

function App() {

  return (
    <div className="App">
      <header>
        <h1>devfinder</h1>
        <button>Light/Dark</button>
      </header>
      <main>
        <article>
          <input type="search" name="username" id="search_username" placeholder="Search Github username.."/>
          <button>Search</button>
        </article>
        <article>
          <img src="./assets/" alt="" />
          <div>
            <h2>The Octocat</h2>
            <a href="">@octocat</a>
            <span>Joined 25 Jan 2011</span>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.</p>
            <div className="stats">
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

            <ul>
              <li><a href="#location"><img src="" alt="" />San Francisco</a></li>
              <li><a href="#social"><img src="" alt="" />Not Available</a></li>
              <li><a href="#website"><img src="" alt="" />https://github.blog</a></li>
              <li><a href="#work"><img src="" alt="" />@github</a></li>
            </ul>

          </div>
        </article>
      </main>
      <footer></footer>
    </div>

  )
}

export default App
