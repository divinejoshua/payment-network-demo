import './App.css';
import shoe1 from'./assets/shoe1.jpg'
import shoe2 from'./assets/shoe2.jpg'

function App() {

  const [overlay, setoverlay] = useState(initialState);
  return (
    <div className="App">

      {/* Header  */}
      <header className="App-header grid grid-cols-3 gap-8 pt-8 pb-5 container mx-auto mb-5 border-b border-gray-100  pl-5 pr-5">
      <h1 className='font-bold col-span-2'>Fancy Shoes</h1>

        <ul className='flex cursor-pointer hidden sm:flex'>
          <li className='pr-4 hover:transition ease-in-out delay-150 hover:text-green-500'>Men</li>
          <li className='pr-4 hover:transition ease-in-out delay-150 hover:text-green-500'>Women</li>
          <li className='pr-4 hover:transition ease-in-out delay-150 hover:text-green-500'>Kids</li>
          <li className='pr-4 hover:transition ease-in-out delay-150 hover:text-green-500'>Sales</li>
        </ul>
      </header>

    {/* Main body  */}
      <main className='md:grid md:grid-cols-3 md:gap-8 container mx-auto mt-8  pl-5 pr-5'>

        {/* Left side  */}
        <section className="left-side col-span-2 grid grid-cols-2 gap-6">
          <img src={shoe1} className="hover:scale-105 transition ease-in-out delay-150 rounded"/>
          <img src={shoe2} className="hover:scale-105 transition ease-in-out delay-150 rounded"/>
        </section>

        {/* Right side  */}
        <section className="right-side">
          <h1 className='text-2xl font-bold mb-4'>Nike Air Zoom Pegasus 39 Shield</h1>
          <p className='mb-4'>Women's Weatherised Road Running Shoes</p>
          £119.96

          {/* Sizes  */}
          <div className="grid grid-cols-3 lg:grid-cols-4 gap-4 mt-10 place-content-center cursor-pointer">
            <div className='text-center border rounded pt-2 pb-2 hover:transition ease-in-out delay-150 hover:border-black'>UK 2.5</div>
            <div className='text-center border rounded pt-2 pb-2 hover:transition ease-in-out delay-150 hover:border-black'>UK 3</div>
            <div className='text-center border rounded pt-2 pb-2 bg-black text-white'>UK 3.5</div>
            <div className='text-center border rounded pt-2 pb-2 hover:transition ease-in-out delay-150 hover:border-black'>UK 4</div>
            <div className='text-center border rounded pt-2 pb-2 hover:transition ease-in-out delay-150 hover:border-black'>UK 4.5</div>
            <div className='text-center border rounded pt-2 pb-2 hover:transition ease-in-out delay-150 hover:border-black'>UK 5</div>
            <div className='text-center border rounded pt-2 pb-2 hover:transition ease-in-out delay-150 hover:border-black'>UK 5.5</div>
            <div className='text-center border rounded pt-2 pb-2 hover:transition ease-in-out delay-150 hover:border-black'>UK 6</div>
          </div>
          
          {/* Payment button  */}
          <button onclick={() => buyButton()} className='mt-10 w-full border pt-4 pb-4 rounded-full bg-black text-white hover:scale-105 transition ease-in-out delay-75 font-bold'>Buy</button>
       
        </section>


      {/* Overlays */}
      <section id="overlay" onclick="off()">
        <div id="text">Overlay Text</div>
      </section>

      </main>

    </div>
  );
}

export default App;
