"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
export default function CatDetail() {
  const [catData, setCatData] = useState([]);
  const searchParams = useSearchParams();
  let catId = searchParams.get("id");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/get/cat?id=" + catId);
      const data = await response.json();
      // console.log(data.rows)
      setCatData(data.row);
      // console.log(catData)
    };

    fetchData();
  }, []);

  return catData ? <p>{catData["NAME"]}</p> : <p>Loading</p>;
}
