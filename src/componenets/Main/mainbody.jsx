
const MainBody = () => {

    return (
        <section id='mainbody' className=" h-auto w-[95%] border-b-2 border-b-slate-600 mx-auto flex justify-between pl-12 items-end">
        
          <div id="text-body" className="text-white pt-8 max-w-[28rem] font-mono text-[1.2vw]">

          <h1 className="font-bold text-[2.6vw] font-serif display">Revolutionize Your Time </h1>
          <h2 className="text-center font-light text-[1em] display">with Ultra-Long Battery Life</h2>


      <div className=" mt-6 font-sans textContent">
          <h3> Introducing our <span className="text-green-700 font-semibold">Game-changing Hybrid watch:</span></h3>
          <p className="mt-3 font-semibold">Say goodbye to battery anxiety and durability woes!</p>
          <p className="mt-3">Stay connected and stylish with <span className='font-semibold text-yellow-500'>Ultra-Long battery life</span> and durable construction!</p>  <br /><hr />
          <p className="mt-3">Experience <span className=" font-semibold text-green-700">Uninterrupted Performance</span> and <span className=" font-semibold">Modern Features</span> while keeping the classic looks with <span className="font-semibold text-yellow-500">Lasting Reliability !</span></p>

          <p className="mt-3 font-bold text-yellow-100">Ready to transform your time?</p>
          <p className="mt-3 text-center max-w-60 font-bold">Click below to
          </p>
          </div>

          <div className=" flex my-4 justify-start max-w-80 gap-2 items-center button">

       <a href="#features"><button type="button" className="bg-red-800 text-slate-100 font-semibold pt-[0.65rem] pb-2 px-4 border-2 border-red-800 shadow rounded-[4rem]">EXPLORE!</button></a> 
          <span>OR</span>
        <a href="#" > <button type="button" className="bg-green-700 text-yellow-50 font-semibold pt-3 pb-1 px-4 border-b-4 border-green-700 shadow rounded-[4rem]">BUY NOW</button> </a> 
          
          </div>
</div>
          
          <img src="/main.png" className=" w-[90vw] min-w-[32rem] main-image" alt="Close-up view of a sophisticated black analog wristwatch with multiple dials, silver hands, and detailed markings. The watch is paired with a black leather strap."/>
        </section>
    )
}

export default MainBody;