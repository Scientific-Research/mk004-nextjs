import React from "react";
import axios from "axios";

interface INoun{
  article: string;
  singular: string;
  plural: string;
};
const url = "https://edwardtanguay.vercel.app/share/germanNouns.json";

async function NounsList() {
  const response = await axios.get(url);
  const nouns = response.data;
  <div>There are {nouns.length} nouns.</div>;
  return (
<>

{nouns.map((noun: INoun) => {
  return(
    <div  className="noun">{noun.singular}</div>
  )
})}
</>
  )
}

export default NounsList;
