import React from "react";
import ReactDOM from "react-dom";
import Floor from "./Floor";
import { shallow } from "enzyme";

describe("Testing Floor.test.js", () => {

    it("Should receive selected floor as prop", () => {
        //arrange
        const appWrapper = shallow(<Floor floors={[3, 6, 7]}/>);

        // act

        //assert
        expect(appWrapper.instance().props.floors).toEqual([3, 6, 7]);
    });
});
