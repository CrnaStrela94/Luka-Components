import Magnifier from "react-glass-magnifier";

export const MagnifierImg = () => {

    return (
        <div className="image-container">
            <Magnifier

                imageUrl="https://i.pinimg.com/736x/e1/9b/f0/e19bf09954ad5231ad9a89cb8db03ec4.jpg"
                imgAlt="pikachu"
                zoomFactor={3}
                glassDimension={300}
                largeImageUrl="https://i.pinimg.com/736x/e1/9b/f0/e19bf09954ad5231ad9a89cb8db03ec4.jpg"
                glassBorderColor=""
                glassBorderWidth={4}
            />
        </div>
    );

}