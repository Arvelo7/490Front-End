
import './App.css';

function App() {
  return (
    <div className="App">
      <div className = "nav-bar">
        <div className="the-name">DISPUTO</div>
        <div className="options"> 
          <p>HOME</p>
          <p>BBPRESS</p> 
          <p>BLOG</p>
          <p>SHOP</p>
          <p>PAGES</p>
        </div>
        <button className='regi'>LOGIN</button>
      </div>

    <body>
        <div class="home-search">
          <p className='intro'>WELCOME TO DISPUTO FORUM</p>
          <p className='bottom-intro'>The most Popular Forum on the Internet!</p>
          <div className='searchBar'>
            <input placeholder="Enter a Keyword..."></input>
            <button className='searchButt'>Search</button>
          </div>       
        </div>

        <div className ="upper-bottom">
          <div className= "box1">WINDOWS</div>
          <div className= "box2">MAC</div>
        </div>
        <div className='lower-bottom'>
          <div className= "box3">UBUNTU</div>
         
        </div>
    </body>



    </div>
  );
}

export default App;
