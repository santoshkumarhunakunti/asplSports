import React from "react";
import ReactDOM from "react-dom";
import Floor from "./Floor";
import Game from "./Game";
import { shallow } from "enzyme";

describe("Testing Floor.test.js", () => {

    it("Should render an option for each floor in props.floors", () => {
        //arrange
        const floors = ["Mamatha", "Santosh", "Tanner"]
        const appWrapper = shallow(<Floor floors={floors} placeholder={"Poopy"} />);
        const options = appWrapper.find('option').filterWhere(option => option.props().hidden !== true);

        // act

        //assert
        expect(options).toHaveLength(floors.length);
    });


});
