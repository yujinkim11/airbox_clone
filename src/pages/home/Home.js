import styled from "styled-components";
import { Header } from "../../components/Header";
import { Section_1 } from "./Section_1";
import { Section_2 } from "./Section_2";
import { Section_3 } from "./Section_3";

export const Home = () => {
  return (
    <>
      <Header />
      <Section_1 />
      <Section_2 />
      <Section_3 />
    </>
  );
};
