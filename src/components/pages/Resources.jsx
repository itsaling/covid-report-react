import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { GlobalContext } from "../context/GlobalState";
import ResourceItem from "./ResourceItem";

export const Resources = () => {
  const { infos } = useContext(GlobalContext);
  const [covidInfos, setCovidInfos] = infos;
  return (
    <>
      {covidInfos.map((info) => (
        <ResourceItem key={info.state} info={info} />
      ))}
    </>
  );
};
