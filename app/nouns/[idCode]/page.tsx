import React from "react";
import axios from "axios";
import { Noun } from "../../../typings";

const url = "https://edwardtanguay.vercel.app/share/germanNouns.json";

type Params = {
  params: {
    idCode: string;
  };
};

async function Noun({ params: { idCode } }: Params) {
  const response: Noun[] = await axios.get(url);
  const nouns = response.data;

  const noun = nouns.find((m) => m.singular === idCode);
  return (
    <div>
      Noun: {idCode} of {nouns.length}
    </div>
  );
}

export default Noun;
