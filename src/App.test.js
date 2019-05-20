import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { shallow } from "enzyme";

describe("Testing App.js", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("Should show the logo", () => {
  //arrange
  const appWrapper = shallow(<App />);

  // act

  //assert
  expect(appWrapper.find("Logo")).toHaveLength(1);
});

it("Should show the Games",()=>{
   //arrange
   const appWrapper = shallow(<App/>);

   //act

    //assert
    expect(appWrapper.find("Game")).toHaveLength(1);
});

it("Should show the Floors",()=>{
    //arrange
    const appWrapper = shallow(<App/>);

    //act

    //assert
    expect(appWrapper.find("Floor")).toHaveLength(1);
});

it("Should show the Game slots",()=>{
    //arrange
    const appWrapper = shallow(<App/>);

    //act

    //assert
    expect(appWrapper.find("GameSlot")).toHaveLength(1);
});

// it("Should display Board-A and Board-B dropdown when selected carrom and 7th floor as prop", () => {
//     //arrange
//     const appWrapper = shallow(<Floor floors={[7]}/>);
//     const gameWrapper = shallow(<Game selectedGame={"Carrom"}/>);
//
//     // act
//
//     //assert
//     expect(appWrapper.instance().props.floors).toEqual([7]) &&
//     expect(gameWrapper.instance().props.selectedGame).toEqual("Carrom");
//
// });