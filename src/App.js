import './App.css';
import shoe1 from'./assets/shoe1.jpg'
import shoe2 from'./assets/shoe2.jpg'

function App() {
  return (
    <div className="App">

      {/* Header  */}
      <header className="App-header grid grid-cols-3 gap-8 pt-8 pb-5 container mx-auto mb-5 border-b border-gray-100">
      <h1 className='font-bold col-span-2'>Fancy Shoes</h1>

        <ul className='flex right-0'>
          <li>Men</li>
          <li>Women</li>
          <li>Kids</li>
          <li>Sales</li>
        </ul>
      </header>

    {/* Main body  */}
      <main className='md:grid md:grid-cols-3 md:gap-8 container mx-auto mt-8'>

        {/* Left side  */}
        <section className="left-side col-span-2 grid grid-cols-2 gap-4">
          <img src={shoe1} className="hover:scale-105 transition ease-in-out delay-150 rounded"/>
          <img src={shoe2} className="hover:scale-105 transition ease-in-out delay-150 rounded"/>
        </section>

        {/* Right side  */}
        <section className="right-side">
          <h1 className='text-2xl font-bold mb-4'>Nike Air Zoom Pegasus 39 Shield</h1>
          <p className='mb-4'>Women's Weatherised Road Running Shoes</p>
          £119.96

          {/* Sizes  */}
          <div className="grid grid-cols-4 gap-4 mt-10">
            <div>UK 2.5</div>
            <div>UK 3</div>
            <div>UK 3.5</div>
            <div>UK 4</div>
            <div>UK 4.5</div>
            <div>UK 5</div>
            <div>UK 5.5</div>
            <div>UK 6</div>
          </div>
          

          <button className='mt-10'>Buy</button>
        </section>





      </main>

    </div>
  );
}

export default App;
