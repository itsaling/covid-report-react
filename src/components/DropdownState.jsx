import React, { useContext } from "react";
import { Container, Dropdown } from "react-bootstrap";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import Jumbotron from "react-bootstrap/Jumbotron";
import { GlobalContext } from "./context/GlobalState";

export const DropdownState = () => {
  const { infos } = useContext(GlobalContext);
  const { getStateName } = useContext(GlobalContext);
  const [covidInfos, setCovidInfos] = infos;
  const onClick = (e, name) => {
    e.preventDefault();
    // const new
    // console.log("clciked " + name);
    console.log(getStateName(name));
  };
  return (
    <div className="text-center dropdown-container">
      <h4 className="header">Select State</h4>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Select State
        </Dropdown.Toggle>
        <DropdownMenu className="dropdown-menu">
          {covidInfos.map((info) => (
            <Dropdown.Item
              // onClick={(e) => onClick(e, info.name)}
              href={`#${info.state}`}
              key={info.state}
            >
              {info.state}
            </Dropdown.Item>
          ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};
