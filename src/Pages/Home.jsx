import React from "react";
import Layout from "../Components/Layout";
import Title from "./Title";
import Process from "./Process";
import Benefits from "./Benefits";
import Team from "./Team";
import Footer from "./Footer";

function Home() {
    return (
        <Layout>
            <Title />
            <Process />
            <Benefits />
            <Team />
            <Footer />
        </Layout>
    );
}
export default Home;