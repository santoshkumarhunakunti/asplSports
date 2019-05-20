import React from "react";
import ReactDOM from "react-dom";
import Game from "./Game";
import { shallow } from "enzyme";
import sinon from "sinon";

describe.only("Testing Game.js", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Game/>, div);
    ReactDOM.unmountComponentAtNode(div);

    it("Should show the selected Table Tennis game", () => {
        //arrange
        const appWrapper = shallow(<Game selectedGame={"Table Tennis"}/>);

        // act
        //assert
        expect(appWrapper.instance().props.selectedGame).toEqual("Table Tennis");
    });

    it("Should show the selected Carrom game", () => {
        //arrange
        const appWrapper = shallow(<Game selectedGame={"Carrom"}/>);

        // act
        //assert
        expect(appWrapper.instance().props.selectedGame).toEqual("Carrom");
    });

    it("Should calling callback function for selected game", () => {

        let stub = sinon.stub();
        //arrange
        const appWrapper = shallow(<Game selectedGame={"Table Tennis"} onGameChange={stub}/>);
        appWrapper.find("#selectid").simulate('change');
        expect(stub.called).toBe(true);
    });
});