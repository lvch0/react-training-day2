import { createContext, useContext, useState } from "react";
import ComponentContext from "./components/ComponentContext";
import ComponentContext2 from "./components/ComponentContext2";
import ComponentRedux2 from "./components/ComponentRedux2";
import {
  GentlemanContext,
  GentlemanProvider,
} from "./context/gentleman.context";

function Gentleman() {
  return (
    <div>
      <GentlemanProvider>
        <ComponentContext />
        <ComponentContext2 />
        <ComponentRedux2 />
      </GentlemanProvider>
    </div>
  );
}
export default Gentleman;
