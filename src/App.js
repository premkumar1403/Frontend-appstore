import React, { useState } from "react";
import './styles/search_bar.css'
import Searchbar from './components/Searchbar'
import Elements from "./components/Elements";
import {Appstore} from './context/Appstorecontext'
function App() {
  const [search, setsearch] = useState('');
  const [category, setcategory] = useState("all");
  function handlesearch(search) {
    setsearch(search);
  }
  function handlecategory(category) {
    setcategory(category)
  }
  return (
    <div>
      <Appstore.Provider value={{search,category,handlesearch,handlecategory}}>
        <Searchbar />
        <Elements/>
      </Appstore.Provider>
    </div>
  );
}

export default App;
