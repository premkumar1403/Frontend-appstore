import { useEffect,useState,useContext } from "react";
import "../styles/elements.css";
import axios from "axios";
import { Appstore } from "../context/Appstorecontext";
const Elements = () => {
  const [item, setitem] = useState([])
  const {search,category}=useContext(Appstore)
  useEffect(() => {
    const fetchdata = async () => {
      try {
        let url = "http://localhost:3500/";
        if (category !== "all") {
          url += `?category=${category}`;
        }
        const taskdata = await axios.get(url)
        setitem(taskdata.data)
      }
      catch (error) {
        console.log("error occured");
        
      }
    }
    fetchdata();
   
  },[category]);
  const searchfilter = item.filter((datas) =>
    datas.name.toLowerCase().includes(search.toLowerCase())).sort((a, b) => a.name.localeCompare(b.name));
  return (
    <div className="cardrow">
      {searchfilter.map((items) => (
        <div key={items.id} className="card">
          <img src={items.image} alt="images" />
          <h3>{items.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default Elements;
