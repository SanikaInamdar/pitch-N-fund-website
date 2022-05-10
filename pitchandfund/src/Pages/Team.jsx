import React from "react";
import teamData from "./Teamdata";
import Teamcard from "./Teamcard";

// import Ayush from "../Assets/Images/Ayush.png";
// import Rohan from "../Assets/Images/Rohan.png";
// import Samarth from "../Assets/Images/Samarth.png";
// import Sanika from "../Assets/Images/Sanika.png";
// import Vinayak from "../Assets/Images/Vinayak.png";

function Team() {

    return (
        <>
            <h2 id="team-heading">About us</h2>
            <section id="team">
                {teamData ? teamData.map((element, key) => <Teamcard key={key} name={element.name} role={element.role} git={element.git} linkedin={element.linkedin} email={element.email} image={element.image}/>): <></>}
            </section>
        </>
    );
}

export default Team;