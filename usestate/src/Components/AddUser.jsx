import { useState } from "react";

const AddUser = () => {
  const [Data, setData] = useState([
    { name: "Aarav Patel", email: "aaravpatel@gmail.com", color: "bg-red-400"},
    { name: "Riya Sharma", email: "riyasharma@gmail.com", color: "bg-cyan-400" },
    { name: "Vivaan Maheta", email: "vivaanmaheta@gmail.com", color: "bg-pink-400" },
  ]);

  function Add(){
    let arr = [... Data]; // copy array

    arr.push({name : "Anannya Gupta", email: "anayanagupta@gmail.com", color: "bg-green-400"})
    if(Data[5]?.name === "Anannya Gupta") {
      return alert ("You Can Only Use Btn At A One Time");
    }

    setData(arr);
  }
  
   function AddTwo(){
    let arr = [... Data]; 

       arr.push({name : "Mira Patel", email: "mirapatel@gmail.com", color: "bg-blue-400"},{name : "Rahul Shah", email: "rahulshah@gmail.com", color: "bg-amber-400"})
    if(Data[4]?.name || Data[5]?.name  === "Rahul Shah") {
      return alert ("You Can Only Use Btn At A One Time");
    }
  setData(arr);
    }


  return (
    <>
      <section className="flex flex-wrap justify-center items-center gap-6 my-10">
        {Data.map((user) => {
          return (
          <div className={`w-full h-auto max-w-sm rounded-xl p-2 text-center font-bold text-2xl ${user.color} flex justify-center items-center flex-col gap-2`}>
              <h1 className="bg-[#222] w-full rounded-xl px-4 py-2">
                {user.name}
              </h1>
              <h1 className="bg-[#222] w-full rounded-xl px-4 py-2">
                {user.email}
              </h1>
            </div>
          );
        })}
      </section>

       <div className='flex justify-center items-center'>
                <button className='bg-orange-600 text-center px-6 py-4 active:bg-orange-100 active:scale-95 active:text-orange-600 text-2xl font-bold rounded-xl' onClick={Add}>Add One More User</button>
                <button className='bg-orange-600 text-center px-6 py-4 active:bg-orange-100 active:scale-95 active:text-orange-600 text-2xl font-bold rounded-xl' onClick={AddTwo}>Add Two More User</button>
            </div>
    </>
  );
};


export default AddUser;
