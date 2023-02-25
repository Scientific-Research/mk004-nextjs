import React from "react";
import axios from "axios";
import Link from "next/link";

const url = "https://edwardtanguay.vercel.app/share/germanNouns.json";

async function NounsList() {
  const response = await axios.get(url);
  const nouns = response.data;
  <div>There are {nouns.length} nouns.</div>;
  return (
    <>
      {nouns.map((noun: Noun) => {
        return (
          <div className="noun">
            <Link href={`/nouns/${noun.singular}`}>{noun.singular}</Link>
          </div>
        );
      })}
    </>
  );
}

export default NounsList;
