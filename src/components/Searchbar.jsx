import React, { useContext, useState } from 'react'
import '../styles/search_bar.css'
import { IoMdSearch } from "react-icons/io";
import { Appstore} from '../context/Appstorecontext'
const Searchbar = () => {
  const [search_data, setsearch_data] = useState('')
  const { handlesearch, handlecategory } = useContext(Appstore);
  function search_input(e) {
    let data = e.target.value;
    setsearch_data(data)
     handlesearch(data);
  }
  return (
    <div className="parent">
      <header className="box">
        <div className="box-1">
          <input
            type="text"
            placeholder="Search Here"
            onChange={search_input} value={search_data}
          />
          <IoMdSearch
            style={{ height: "40px", width: "40px", marginTop: "2px" }}
          />
        </div>
      </header>
      <section className="menus">
        <ul>
          <li onClick={()=>handlecategory("all")}>All</li>
          <li onClick={()=>handlecategory("socialmedia")}>Socialmedia</li>
          <li onClick={()=>handlecategory("games")}>Games</li>
          <li onClick={()=>handlecategory("movies")}>Movies</li>
          <li onClick={()=>handlecategory("music")}>Music</li>
        </ul>
      </section>
    </div>
  );
}
export default Searchbar