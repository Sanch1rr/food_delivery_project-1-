// import React, { useState, useEffect } from "react";
// import SearchForm from "./components/SearchForm";
// import { useFood } from "../contexts/FoodContext";
// import axios from "axios";
// import { FormControl } from "../Header";

// function App() {
//   const [foods, setfoods] = useFood();
//   const performSearch = (value) => setQuery(value);
//   const [searchText, setSearchText] = useState("");

//   const onSearchChange = (e) => {
//     setSearchText(e.target.value);
//   };
//   const handleSubmit = (e) => {
//     props.onSearch(searchText);
//     e.preventDefault();
//     e.currentTarget.reset();
//   };

//   useEffect(() => {
//     axios(`https://dev-api.mstars.mn/api/foods/search?q=${query}`)
//       .then((response) => setfoods(response.data.data))
//       .catch((err) => console.log(err))
//       .finally(() => setLoading(false));
//   }, [query]);

//   return (
//     <>
//     <div>
//       <form className="search-form" onSubmit={handleSubmit}>
//         <label className="is-hidden" htmlFor="search">
//           Search
//         </label>
//         <input
//           name="search"
//           type="search"
//           placeholder="Search...."
//           onChange={onSearchChange}
//         ></input>
//         <button type="submit" id="submit" className="search-button">
//           <i className="material-icons icn-search"></i>
//         </button>
//       </form>
//     </div>
//       <div className="main-header">
//         <div className="inner">
//           <h1 className="main-title">Hello</h1>
//           <SearchForm onSearch={performSearch} />
//         </div>
//       </div>
//       <div className="main-content">
//         {loading ? <p>...loading</p> : <GifList data={gifs} />}
//       </div>
//     </>
//   );
// }

// export default App;
