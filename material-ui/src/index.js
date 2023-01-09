import React from "react";
import ReactDOM from "react-dom";
import ButtonMui from "./Components/ButtonMui";
import StylesMui from "./Components/StylesMui";
import TypographyMui from "./Components/TypographyMui";
import TextFiledMui from "./Components/TextFiledMui";
import RadioMui from "./Components/RadioMui";




function App() {
  return (
    <>
      <RadioMui />
      <TextFiledMui />
      <ButtonMui />
      <TypographyMui />
      <StylesMui />
    </>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
