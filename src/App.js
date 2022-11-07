import { click } from '@testing-library/user-event/dist/click';
import { useState } from 'react';
import './App.css';
import shoe1 from'./assets/shoe1.jpg'
import shoe2 from'./assets/shoe2.jpg'

function App() {

  // overlay 
  const [paymentMethod, setpaymentMethod] = useState(1);

  // on click on buy button 
  const buyButton = () => {
    document.getElementById("overlay").style.display = "block";

  }

  // Close overlay 
  const closeOverlay = () => {
    document.getElementById("overlay").style.display = "none";
    setpaymentMethod(1)
  }




  return (
    <div className="App mb-20">

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
          <button onClick={() => buyButton()} className='mt-10 w-full border pt-4 pb-4 rounded-full bg-black text-white hover:scale-105 transition ease-in-out delay-75 font-bold'>Buy</button>
       
        </section>


      {/* Overlays */}
      <section id="overlay" className=''>
        <div id="box" className='transition ease-in-out delay-150 '>
          <div className='overlay-container rounded-xl p-7 pb-9'>
              
      

              {/* If paymentMethod is card  */}
            { paymentMethod == 1 &&<div className=''>
            Fancy Shoe payment <span className='float-right hover:underline' onClick={() => closeOverlay()}>X</span>


          <div className='or-div'>
            <div className='or-span mx-auto'>
              OR
            </div>
          </div>


            <div onClick={() => setpaymentMethod(2)} className='mt-10 mb-5 pl-5 border rounded pt-3 pb-3 hover:transition ease-in-out delay-150 hover:border-blue-500'> <i className="fa fa-mobile-phone mr-5 text-xl"></i> Pay with Mobile bank</div>


              <div className="card-form grid grid-cols-2 gap-4 pt-7 ">

                      {/* Fullname */}
                      <div className="mb-4 col-span-2">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold text-gray-700 text-sm font-bold mb-2">
                          Fullname
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Name on card"/>
                      </div>

                    {/* Card number */}
                      <div className="mb-4 col-span-2">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold text-gray-700 text-sm font-bold mb-2">
                          Card number
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" placeholder="0000 0000 0000 0000"/>
                      </div>


                    {/* Exp date  */}
                      <div className="">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold text-gray-700 text-sm font-bold mb-2">
                          Exp Date
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="month" placeholder="" defaultValue="2023-05"/>
                      </div>

                      {/* CVV  */}
                      <div className="">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold text-gray-700 text-sm font-bold mb-2">
                          CVV
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" placeholder="XXX"/>
                      </div>

                    <button onClick={() => closeOverlay()} className='mt-5 col-span-2 w-full border pt-3 pb-3 rounded-full bg-black text-white hover:scale-105 transition ease-in-out delay-75 font-bold'>
                      Pay &nbsp;£119.96
                    </button>
                    

                  </div>

                  
              </div>
              }


              {/* If paymentMethod is Mobile bank network  */}
            { paymentMethod == 2 &&
                <div className=''>

                  <i className="fa fa-mobile-phone text-xl mr-5"></i> Pay with Mobile bank <span className='float-right hover:underline' onClick={() => setpaymentMethod(1)}>Go back</span>

                  <div className="card-form grid grid-cols-2 gap-4 pt-7 ">

                          {/* Fullname */}
                          <div className="mb-4 col-span-2">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                              Bank Name
                            </label>
                            <div className="relative">
                              <select className="block appearance-none w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                <option>-Select bank name</option>
                                <option>Kuda Bank</option>
                                <option>Monzo Bank</option>
                                <option>Revolut Bank</option>
                                <option>Wema Bank</option>
                                <option>UBA Bank</option>
                                <option>Zenith Bank</option>
                              </select>
                              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                              </div>
                            </div> 
                          </div>

                        <button onClick={() => closeOverlay()} className='col-span-2 w-full border pt-3 pb-3 rounded-full bg-black text-white hover:scale-105 transition ease-in-out delay-75 font-bold'>
                          Pay &nbsp;£119.96
                        </button>
                        

                      </div>

                      

                </div>
              
              
              }



              <p className='text-sm text-gray-400 text-center mt-10'>Powered by QeLoop</p>


          </div>
        </div>
      </section>

      </main>

    </div>
  );
}

export default App;
