import { useState, useEffect } from "react";
import CatListCard from "./subcomponents/CatList-Card";

export default function CatList() {
  const [jsonData, setJsonData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(9); // Default to 9

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/cats");
      const data = await response.json();
      setJsonData(data);
    };
    fetchData();
  }, []);

  const getWindowWidth = () => {
    // Function to get the window width
    const { innerWidth: width } = window;
    return width;
  };

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(
        getWindowWidth() <= 1024 ? (getWindowWidth() <= 640 ? 5 : 8) : 9,
      );
    };
    handleResize(); // Call initially to set itemsPerPage correctly
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCats = jsonData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Scroll to the top of the page when paginating
    window.scrollTo(0, 0);
  };

  const totalPages = Math.ceil(jsonData.length / itemsPerPage);

  return (
    <>
      <div
        className="flex flex-col p-4 lg:flex lg:flex-row lg:justify-center"
        key={itemsPerPage}
      >
        <div
          className="grid-rows-auto grid grid-cols-1 place-items-center gap-8 text-white sm:grid-cols-2 lg:grid-cols-3 lg:place-items-start"
          id="catTable"
        >
          {currentCats.length > 0 ? (
            currentCats.map((cat) => (
              <CatListCard
                key={cat.id}
                id={cat.id}
                name={cat.name}
                image={cat.image}
                sex={cat.sex}
              />
            ))
          ) : (
            <p>Loading</p>
          )}
        </div>
      </div>
      <div id="pagination" className="mb-4 flex justify-center text-white">
        {currentPage > 1 && (
          <button
            id="prev"
            onClick={() => paginate(currentPage - 1)}
            className="rounded-md bg-violet-400 px-4 py-2 hover:bg-violet-600"
          >
            Prev.
          </button>
        )}
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
          <button
            key={number}
            onClick={() => paginate(number)}
            style={{ margin: "0 5px", padding: "5px 10px" }}
            className={`rounded-md px-4 py-2 hover:bg-violet-600 ${
              number === currentPage ? "bg-violet-600" : "bg-violet-400"
            }`}
          >
            {number}
          </button>
        ))}
        {currentPage < totalPages && (
          <button
            id="next"
            onClick={() => paginate(currentPage + 1)}
            className="rounded-md bg-violet-400 px-4 py-2 hover:bg-violet-600"
          >
            Succ.
          </button>
        )}
      </div>
    </>
  );
}
