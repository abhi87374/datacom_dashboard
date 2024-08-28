import React, { useEffect, useState } from "react";
import { FaSearch, FaBell, FaUser } from "react-icons/fa";
import Select from "react-select";
import { useRouter } from "next/router";
import customStyles from "@/styles/customStyles";
import Image from "next/image";
const PageHeader = () => {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);
  const Router = useRouter();
  let options;

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `/api/search`
      );
      const data = await res.json();
      setUsers(data);
    };
    fetchData();
  }, []);
  
  
  if (users) {
    options = users.map((user) => ({
      label: user.name,
      value: user.linkedin,
    }));
  }
  function handleSearch(e) {
    setSearch(e?e.value:"");
  }
  setTimeout(() => {
  if(search){
    Router.push(`${search}`)
  }
  }, 0);
 
  return (
    <div className="flex justify-between ">
      <div className="flex gap-3 text-yellow bg-black px-6 py-4 border-2 w-320 border-white rounded-full">
        <div className="pt-1">
          <FaSearch color="yellow" size={25} />
        </div>
        <div>
          <Select
            className="bg-black  text-black border-black outline-none px-3"
            styles={customStyles}
            options={options}
            value={options.filter((obj) => obj.value === search)}
            onChange={handleSearch}
            placeholder="Search Users"
            isClearable
          />
        </div>
        {console.log(search)}
      </div>
      <div className="flex gap-2 p-2">
        <div className="bg-black p-4  rounded-full">
          <FaBell color="yellow" size={30} />
        </div>
        <div className="bg-black p-3 rounded-full overflow-hidden">
          <Image
            src={'/mainprofile.jpg'}
            width={40}
            height={40}
            className="rounded-full h-11"
          >

          </Image>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
