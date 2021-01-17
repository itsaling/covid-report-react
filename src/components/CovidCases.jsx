import React, { useContext } from "react";
import { GlobalContext } from "./context/GlobalState";
import moment from "moment";
import { Container } from "react-bootstrap";

export const CovidCases = () => {
  const { cases } = useContext(GlobalContext);
  const [covidCases, setCovidCases] = cases;
  return (
    <>
      {covidCases.map((item) => (
        <>
          <h3>
            As of {moment(item.dateChecked).format("MMMM Do YYYY, h:mm:ss a")}
          </h3>
          <br></br>
          <p>Total Test Results :</p>
          <h1 className="">{item.totalTestResults.toLocaleString()}</h1>
          <p>Cases :</p>
          <h1 className="text-primary">{item.positive.toLocaleString()}</h1>
          <p>Hospitalized Currently:</p>

          <h1 className="text-warning">
            {item.hospitalizedCurrently.toLocaleString()}
          </h1>

          <p>Deaths:</p>
          <h1 className="text-danger">{item.death.toLocaleString()}</h1>
        </>
      ))}
    </>
  );
};
