import { useState, useEffect } from "react";
import CatListCard from "./subcomponents/CatList-Card";

export default function CatList() {
  const [jsonData, setJsonData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/get/cats");
      const data = await response.json();
      setJsonData(data.rows);
    };

    fetchData();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCats = jsonData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(jsonData.length / itemsPerPage);

  return (
    <>
      <div className="lg:flex lg:justify-center lg:p-12">
        <div
          className="lg:grid-rows-auto text-white lg:grid lg:grid-cols-3 lg:gap-8"
          id="catTable"
        >
          {currentCats.length > 0 ? (
            currentCats.map((cat) => (
              <CatListCard
                key={cat.ID}
                id={cat.ID}
                name={cat.NAME}
                image={cat.IMAGE}
                sex={cat.SEX}
              />
            ))
          ) : (
            <p>Loading</p>
          )}
        </div>
      </div>
      <div id="pagination" className="flex justify-center text-white lg:mb-4">
        {currentPage > 1 && (
          <button
            id="prev"
            onClick={() => paginate(currentPage - 1)}
            className="bg-violet-400 hover:bg-violet-600 lg:rounded-md lg:px-4 lg:py-2"
          >
            Prev.
          </button>
        )}
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
          <button
            key={number}
            onClick={() => paginate(number)}
            style={{ margin: "0 5px", padding: "5px 10px" }}
            className={`hover:bg-violet-600 lg:rounded-md lg:px-4 lg:py-2 ${
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
            className="bg-violet-400 hover:bg-violet-600 lg:rounded-md lg:px-4 lg:py-2"
          >
            Succ.
          </button>
        )}
      </div>
    </>
  );
}
