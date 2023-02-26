import React from "react";

type Params = {
  params: {
    idCode: string;
  };
};

function Noun({ params: { idCode } }: Params) {
  return <div>Noun: {idCode}</div>;
}

export default Noun;
