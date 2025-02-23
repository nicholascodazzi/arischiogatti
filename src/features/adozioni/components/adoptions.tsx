"use client";
import { useState, useEffect, useMemo, useCallback } from "react";
import CatList from "./catList";
import Title from "@/src/components/title";
import { cats as CatsType } from "@prisma/client";

export default function Adoptions({ cats }: { cats: CatsType[] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const { innerWidth: width } = window;
  
  const [itemsPerPage, setItemsPerPage] = useState(() => {
    return width <= 640 ? 5 : width <= 1024 ? 8 : 9;
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setItemsPerPage(width <= 640 ? 5 : width <= 1024 ? 8 : 9);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const currentCats = useMemo(() => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    return cats.slice(indexOfFirstItem, indexOfLastItem);
  }, [cats, currentPage, itemsPerPage]);

  const paginate = useCallback((pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const totalPages = Math.ceil(cats.length / itemsPerPage);

  return (
    <>
      <Title>Adozioni</Title>
      <div
        className="flex flex-col p-4 lg:flex lg:flex-row lg:justify-center"
        key={itemsPerPage}
      >
        <div
          className="grid-rows-auto grid grid-cols-1 place-items-center gap-8 text-white sm:grid-cols-2 lg:grid-cols-3 lg:place-items-start"
          id="catTable"
          role="list"
          aria-live="polite"
        >
          {currentCats.length > 0 ? (
            currentCats.map((cat) => (
              <CatList
                key={cat.id}
                id={cat.id}
                name={cat.name}
                image={cat.image}
                sex={cat.sex}
              />
            ))
          ) : (
            <p aria-live="polite">Loading...</p>
          )}
        </div>
      </div>
      <div id="pagination" className="mb-4 flex justify-center text-white">
        <button
          id="prev"
          onClick={() => paginate(currentPage - 1)}
          className="rounded-md bg-violet-400 px-4 py-2 hover:bg-violet-600 disabled:cursor-not-allowed disabled:opacity-50"
          disabled={currentPage === 1}
          aria-label="Go to previous page"
        >
          Prec.
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
          <button
            key={number}
            onClick={() => paginate(number)}
            className={`rounded-md px-4 py-2 hover:bg-violet-600 ${
              number === currentPage
                ? "bg-violet-700 font-bold text-white"
                : "bg-violet-400"
            }`}
            aria-label={`Go to page ${number}`}
          >
            {number}
          </button>
        ))}
        <button
          id="next"
          onClick={() => paginate(currentPage + 1)}
          className="rounded-md bg-violet-400 px-4 py-2 hover:bg-violet-600 disabled:cursor-not-allowed disabled:opacity-50"
          disabled={currentPage === totalPages}
          aria-label="Go to next page"
        >
          Succ.
        </button>
      </div>
    </>
  );
}
