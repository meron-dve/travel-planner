
import React,{ useState } from "react";
function SearchBar({ onSearch }) {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    const value = e.target.value;
    setText(value);
    onSearch(value);

  };
  return (
    <div className="flex justify-center mb-6">
    <input 
    type="text" 
    placeholder="Search destinations ..."
    value={text}
    onChange={handleChange}
    className="border p-2 rounded w-1/2" />
    </div>
  );

}
export default SearchBar;