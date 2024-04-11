import { DragAndDrop } from "./components/DragDrop/DragAndDrop";
// import { RadioBtn } from "./components/RadioBtn/RadioBtn";
import { RadioBtn2 } from "./components/RadioBtn2/RadioBtn2";
import SearchBtn from "./components/SearchBtn/SearchBtn";
import SlideButton from "./components/SlideButton/SlideButton";
import MeatballMenu from "./components/meatballMenu/MeatballMenu";
// import { Text } from "./components/Text";

function App() {
  return (
    <>
      <DragAndDrop />
      <SlideButton />
      <MeatballMenu />
      <SearchBtn />
      {/* <RadioBtn /> */}
      <RadioBtn2 />
    </>
  );
}

export default App;
