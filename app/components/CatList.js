import Image from "next/image";
import { useState, useEffect } from "react";

import CatListCard from "./subcomponents/CatList-Card";

export default function CatList() {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/catlist");
      const data = await response.json();
      setJsonData(data.data);
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="md:gtext-black grid grid-cols-2 gap-4 text-black">
        <div>Ciao</div>
        <div>Ciao</div>
        <div>Ciao</div>
        <div>Ciao</div>
      </div>
    </>
  );
}
