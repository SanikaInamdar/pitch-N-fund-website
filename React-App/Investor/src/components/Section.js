import React from "react";
import Card from "./Card";
import marketplace from "../marketplace";

function createCard(props) {
    return (
        <Card
            key={props.key}
            title={props.title}
            description={props.description}
            ask={props.ask}
            equity={props.equity}
            visit={props.visit}
        />
    );
}

function Section() {
    return (
        <section>
            {marketplace.map(createCard)}
        </section>
    );
}

export default Section;