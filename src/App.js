import './App.css';
import shoe1 from'./assets/shoe1.jpg'
import shoe2 from'./assets/shoe2.jpg'

function App() {
  return (
    <div className="App">

      {/* Header  */}
      <header className="App-header">
      Fancy Shoes

        <ul>
          <li>Men</li>
          <li>Women</li>
          <li>Kids</li>
          <li>Sales</li>
        </ul>
      </header>

    {/* Main body  */}
      <main className='grid grid-cols-3 gap-4'>

        {/* Left side  */}
        <section className="left-side col-span-2 grid grid-cols-2 gap-4">
          <img src={shoe1}/>
          <img src={shoe2}/>
        </section>

        {/* Right side  */}
        <section className="right-side">
          <h1>Nike Air Zoom Pegasus 39 Shield</h1>
          <p>Women's Weatherised Road Running Shoes</p>
          £119.96

          {/* Sizes  */}
          <div className="grid grid-cols-4 gap-4">
            <div>UK 2.5</div>
            <div>UK 3</div>
            <div>UK 3.5</div>
            <div>UK 4</div>
            <div>UK 4.5</div>
            <div>UK 5</div>
            <div>UK 5.5</div>
            <div>UK 6</div>
          </div>
          

          <button>Buy</button>
        </section>





      </main>

    </div>
  );
}

export default App;
