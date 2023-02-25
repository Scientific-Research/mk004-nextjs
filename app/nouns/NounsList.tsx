import React from "react";
import axios from "axios";

const url = "https://edwardtanguay.vercel.app/share/germanNouns.json";

async function NounsList() {
  const response = await axios.get(url);
  const nouns = response.data;
  return <div>Here is the Nouns List</div>;
}

export default NounsList;
