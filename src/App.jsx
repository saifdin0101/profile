import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { MdLogout } from "react-icons/md";
import { MdAdminPanelSettings } from "react-icons/md";

import { MdDarkMode } from "react-icons/md";



function App() {
  const [modal, setModal] = useState(false);
  const mymodal = () => {
    setTimeout(() => {
      setModal(mdl =>!mdl);
    }, 100);
  };
  return (
   <div  className="h-[100%]  w-[100%] flex justify-center items-center flex-col relative">
        <button onClick={mymodal} className="h-[50px] w-20 bg-red-500 rounded-full">helll</button>
    {
      modal && (
          <div className="flex justify-center items-center absolute top-[50px] flex-col">
            <div className="epsi bg-[#3a3b3c]"></div>
                      <div className="bg-[#3a3b3c] opsi h-[400px] w-[250px] rounded-[20px] flex justify-center items-center flex-col gap-2">
                        <div className="h-[60px] w-[60px] bg-red-500 rounded-full"></div>
                        <div className="h-[60px] w-[80%]  hover:bg-[#5d5f61] rounded-[20px] flex justify-center items-center gap-[85px]">
                          <div className="text-2xl text-[#e7e9ec] p-2 rounded-full bg-[#4e4f50]"><CgProfile /></div>
                          <div className="text-[#e2e4e8]">Profile</div>
                        </div>
                        <div className="h-[60px] w-[80%] bg-[#] hover:bg-[#5d5f61] rounded-[20px] flex justify-center items-center gap-[55px]">
                          <div className="text-2xl text-[#e7e9ec] p-2 rounded-full bg-[#4e4f50]"><MdDarkMode /></div>
                          <div className="text-[#e2e4e8]">DarkMode</div>
                        </div>
                        <div className="h-[60px] w-[80%] bg-[#] hover:bg-[#5d5f61] rounded-[20px] flex justify-center items-center gap-[70px]">
                          <div className="text-2xl text-[#e7e9ec] p-2 rounded-full bg-[#4e4f50]"><MdAdminPanelSettings /></div>
                          <div className="text-[#e2e4e8]">Settings</div>
                        </div>
                        <div className="h-[60px] w-[80%] bg-[#] hover:bg-[#5d5f61] rounded-[20px] flex justify-center items-center gap-[70px]">
                          <div className="text-2xl text-[#e7e9ec] p-2 rounded-full bg-[#4e4f50]"><MdLogout /></div>
                          <div className="text-[#e2e4e8]">LogOut</div>
                        </div>

                      </div>

          </div>
        
      )
    }

 
   </div>
  );
}

export default App;
