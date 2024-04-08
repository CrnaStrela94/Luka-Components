import React from "react";
import { DragAndDrop } from "./components/DragDrop/DragAndDrop";
import { MagnifierImg } from "./components/MagnifierImg/MagnifierImg";
import SearchBtn from "./components/SearchBtn/SearchBtn";
import SlideButton from "./components/SlideButton/SlideButton";
import MeatballMenu from "./components/meatballMenu/MeatballMenu";
// import { Text } from "./components/Text";

function App() {
  return (
    <>
      <DragAndDrop />
      <SlideButton />
      <MagnifierImg />
      <MeatballMenu />
      <SearchBtn />
    </>
  );
}

export default App;
