import React from "react";
import axios from "axios";

const url = "https://edwardtanguay.vercel.app/share/germanNouns.json";

async function NounsList() {
  const response = await axios.get(url);
  const nouns = response.data;
  <div>There are {nouns.length} nouns.</div>;
  return (
    <>
      {nouns.map((noun: Noun) => {
        return <div className="noun">{noun.singular}</div>;
      })}
    </>
  );
}

export default NounsList;
