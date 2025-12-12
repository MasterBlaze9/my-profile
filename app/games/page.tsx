"use client";

import { steamServices } from "@/services/steamServices";
import { useEffect } from "react";

export default function GamesPage() {

  useEffect(() => {
    async function fetchData() {
      const result = await steamServices.getInfo();
      console.log(result);
    }
    fetchData();
  }, []);


  return (
    <div>
      <h1>GAMES PAGE</h1>
    </div>
  );
}
