import { DragAndDrop } from "./components/DragDrop/DragAndDrop";
import { MagnifierImg } from "./components/MagnifierImg/MagnifierImg";
import SearchBtn from "./components/SearchBtn/SearchBtn";
import SlideButton from "./components/SlideButton/SlideButton";

// import { Text } from "./components/Text";

function App() {
  return (
    <>
      <DragAndDrop />
      <SlideButton />
      <MagnifierImg />
      <SearchBtn />
    </>
  );
}

export default App;
