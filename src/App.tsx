function App() {
  return (
    <div className="min-h-screen h-screen">
      <div className="fixed top-0 left-0 w-full px-4 flex justify-between items-center border-2 border-red-500 text-red-500 min-h-10">
        <span>menu</span>
        <span>location</span>
      </div>
      <div className="max-w-lg m-auto h-full pt-10 flex flex-col border-2 border-black">
        <div className="border-2 border-blue-500 h-full flex flex-col justify-center items-center gap-4">
          <div className="h-32 w-32 border border-black">Weather Icon</div>
          <h3 className="border border-lime-500 text-4xl">grades</h3>
          <div className="border border-amber-500">
            <span className="mr-4">min: grades</span>
            <span>max: grades</span>
          </div>
        </div>
        <div className="border-4 border-green-500 h-full">
          <div className="h-8 border-2 border-yellow-500">
            Lorem ipsum dolor sit amet consec
          </div>
          <div className="border-2 border-violet-500 h-[calc(100%-2rem)] overflow-x-scroll flex flex-nowrap gap-4">
            <div className="w-24 border border-rose-500 flex-shrink-0 flex flex-col items-center justify-evenly">
              <div className="border border-black">grades</div>
              <div className="border border-black">icon</div>
              <div className="border border-black">hour</div>
            </div>
            <div className="w-24 border border-rose-500 flex-shrink-0 flex flex-col items-center justify-evenly">
              <div className="border border-black">grades</div>
              <div className="border border-black">icon</div>
              <div className="border border-black">hour</div>
            </div>
            <div className="w-24 border border-rose-500 flex-shrink-0 flex flex-col items-center justify-evenly">
              <div className="border border-black">grades</div>
              <div className="border border-black">icon</div>
              <div className="border border-black">hour</div>
            </div>
            <div className="w-24 border border-rose-500 flex-shrink-0 flex flex-col items-center justify-evenly">
              <div className="border border-black">grades</div>
              <div className="border border-black">icon</div>
              <div className="border border-black">hour</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
