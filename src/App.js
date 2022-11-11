import "./App.css";
import { Loading } from "./components/Loading";
import { Navbar } from "./components/Navbar";
import { NewsCard } from "./components/NewsCard";
import { SearchBar } from "./components/SearchBar";
import { useFetch } from "./hooks/useFetch";
import { useState } from "react";

import "react-datepicker/dist/react-datepicker.css";
import { DateFilter } from "./components/DateFilter";

function App() {
  const { news, loading, error, fetchNews } = useFetch();
  const [searchValue, setSearchValue] = useState("");
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  const handleInput = (value) => {
    setSearchValue(value);
  };
  const handleSearch = () => {
    fetchNews(searchValue);
    setSearchValue("");
  };

  if (error) {
    return <p>{error}</p>;
  }
  return (
    <div className='App'>
      <Navbar />
      <SearchBar
        handleInput={handleInput}
        handleSearch={handleSearch}
        value={searchValue}
      />
      <DateFilter dateRange={dateRange} setDateRange={setDateRange} startDate={startDate} endDate={endDate} />

      {loading && <Loading />}
      {news.map((stire, index) => (
        <NewsCard newsProps={stire} key={index} />
      ))}
    </div>
  );
}

export default App;
