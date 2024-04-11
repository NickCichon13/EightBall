
import { useState } from "react";
import React from "react";

const defaultColors = [
    "Aqua", "Black", "BlanchedAlmond", "Blue", "Chocolate", "DodgerBlue",
    "Lavender", "LawnGreen", "Peru", "Plum", "SpringGreen", "SteelBlue", "Tan",
    "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Yellow", "YellowGreen", 
];

function BoxesContainer ({ allColors = defaultColors, numBoxes = 16}) {
    const [boxes, setBoxes] = useState(getInitialRandomColors);

    function getInitialRandomColors(){
        return Array.from(
            {length: numBoxes},
            () => choice(allColors)
        )
    }

    function hanleClick(evt) {
        setBoxes(boxes => {
            let idx = randInt(numBoxes);
            let boxCopy = [...boxes];
            boxCopy[idx] = choice(allColors);
            return boxCopy;
        });
    }

    const boxComponents = boxes.map((color, i) => <box key={i} color={color} />);

    return (
        <div>
            <section className="BoxesContainer">
                {boxComponents}</section>

            <button onClick={handleClick}>Change a Box</button>
        </div>
    )
}