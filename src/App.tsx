import { DragAndDrop } from "./components/DragDrop/DragAndDrop";
import Navbar from "./components/Navbar/NavBar";
// import { RadioBtn } from "./components/RadioBtn/RadioBtn";
import { RadioBtn2 } from "./components/RadioBtn2/RadioBtn2";
import SearchBtn from "./components/SearchBtn/SearchBtn";
import ShareButton from "./components/ShareButton/ShareButton";
import SlideButton from "./components/SlideButton/SlideButton";
import MeatballMenu from "./components/meatballMenu/MeatballMenu";
// import { Text } from "./components/Text";

//-------------------------------------------NavBar-----------------------------------------------//
const GoToNavLink = [
  { Text: 'Home', href: '/#' },
  { Text: 'About oss', href: '/#' },
  { Text: 'Contakt oss', href: '/#' },
  { Text: 'Different services', href: '/#' },
  { Text: 'Cooperate with oss', href: '/#' }
];

//------------------------------------------------------------------------------------------//

//-------------------------------------Social Media Butten's---------------------------------------//

const socialLinks = [
  { className: "twitter", icon: "ri-twitter-line", href: "#" },
  { className: "facebook", icon: "ri-facebook-line", href: "#" },
  { className: "close", icon: "ri-close-line", href: "#" }, // För att stänga knap menyn 
  { className: "discord", icon: "ri-discord-line", href: "#" },
  { className: "whatsapp", icon: "ri-whatsapp-line", href: "#" }
];

//------------------------------------------------------------------------------------------//



function App() {
  return (
    <>
      <Navbar GoToNavLink={GoToNavLink} />
      <DragAndDrop />
      <SlideButton />
      <MeatballMenu />
      <SearchBtn />
      {/* <RadioBtn /> */}
      <RadioBtn2 />
      <ShareButton socialLinks={socialLinks} />
    </>
  );
}

export default App;
