
export default function Home() {
  return (
      <div className="flex flex-col items-start relative w-[1280px] h-[800px] bg-white">
        <header
            className="flex flex-row justify-between items-center w-full h-[65px] border-b border-gray-300 px-10 py-3">
          <div className="flex flex-row items-center gap-4">
            <div className="w-4 h-4 bg-[#121417]"></div>
            <span className="font-bold text-[18px] leading-[23px] text-[#121417]">Facial Memory</span>
          </div>
          <nav className="flex flex-row justify-end items-start gap-8 w-[1044px]">
            <ul className="flex flex-row gap-9">
              <li className="text-sm font-medium text-[#121417]">Home</li>
              <li className="text-sm font-medium text-[#121417]">Memory Palace</li>
              <li className="text-sm font-medium text-[#121417]">Face Garden</li>
              <li className="text-sm font-medium text-[#121417]">People List</li>
            </ul>
            <div className="flex gap-2">
              <button className="bg-[#1A80E6] text-white font-bold text-sm rounded-lg px-4 h-10">New Person</button>
              <button className="bg-[#F0F2F5] text-[#121417] font-bold text-sm rounded-lg px-4 h-10">Settings</button>
            </div>
          </nav>
        </header>

        <main className="flex justify-center items-start w-full h-[583px] px-40 py-5">
          <div className="w-[960px] max-w-[960px]">
            <h1 className="text-4xl font-bold text-[#121417]">New Person</h1>
            <p className="text-sm font-normal text-[#637587] mt-1">Add a new person to your memory palace</p>

            <div
                className="mt-4 p-2 flex flex-row justify-between items-center gap-4 w-full h-[72px] bg-white rounded-lg">
              <div>
                <span className="block text-base font-medium text-[#121417]">Photos</span>
                <span className="block text-sm font-normal text-[#637587]">Upload 3-5 photos</span>
              </div>
              <button className="bg-[#F0F2F5] text-[#121417] font-medium text-sm rounded-lg px-4 h-8">Upload</button>
            </div>

            <div className="mt-6">
              <label htmlFor="name" className="block text-base font-medium text-[#121417]">Name</label>
              <input
                  type="text"
                  id="name"
                  className="w-full max-w-[448px] h-[32px] mt-2 p-4 border border-[#DBE0E6] rounded-lg"
              />
            </div>

            <div className="flex justify-end mt-8">
              <button className="bg-[#1A80E6] text-white font-bold text-sm rounded-lg px-4 h-10">Submit</button>
            </div>
          </div>
        </main>

        <footer className="flex flex-col items-center w-full h-[152px] px-5 py-10">
          <ul className="flex flex-row gap-6">
            <li className="text-sm text-[#637587]">Contact</li>
            <li className="text-sm text-[#637587]">Help</li>
            <li className="text-sm text-[#637587]">About</li>
          </ul>
          <div className="mt-6 text-sm text-[#637587]">© 2023 Facial Memory Inc.</div>
        </footer>
      </div>
  );
}
