import  { useState } from "react";

const SearchFilter = () => {
    
    // original data
    const items = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
  
    // user input
    const [search, setSearch] = useState("");
  
    // filter logic
    const filteredItems = items.filter((item) =>
      item.toLowerCase().includes(search.toLowerCase())
    );
  
    return (
      <div style={{ padding: "20px" }}>
        <h1 className="text-3xl font-bold underline mb-5">Search Filter</h1>
        <h2>Search Fruit</h2>

        {/* Input box */}
        <input
          type="text"
          placeholder="Type to search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Result list */}
        <ul>
          {filteredItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
};

export default SearchFilter;
