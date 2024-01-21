import React from "react";
import Header from "../../Header/Header";
import Posts from "../../Posts/Posts";
import Sidebar from "../../Sidebar/Sidebar";
import { Section } from "./HomeElements";

const Home = () => {
  return (
    <Section>
      <Header />

      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </Section>
  );
};

export default Home;
