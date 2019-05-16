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
