import React, {
  useContext,
  useReducer,
  useEffect,
  useState,
  createContext,
} from "react";
import axios from "axios";
import AppReducer from "./AppReducer";

const initalState = {
  infos: [],
};

//create context
export const GlobalContext = createContext();

//provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initalState);
  const [cases, setCases] = useState([]);
  const [infos, setInfos] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.covidtracking.com/v1/us/current.json")
      .then((res) => setCases(res.data));
    axios
      .get("https://api.covidtracking.com/v1/states/current.json")
      .then((res) => setInfos(res.data));
  }, []);

  //functions to get the state ID
  function getStateName(stateName) {
    dispatch({
      type: "GET_STATE",
      payload: stateName,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        cases: [cases, setCases],
        infos: [infos, setInfos],
        getStateName,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
