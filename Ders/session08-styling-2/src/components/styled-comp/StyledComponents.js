import React from "react";
import { Button } from "./button/Button.styles";
import HeaderText from "./header/HeaderText";
import Wrapper from "./wrapper/Wrapper";
import Link from "./link/Link";
import ExtendedComp from "./extended-link/ExtendedComp";

const StyledComponents = () => {
  return (
    <>
      <Wrapper bgColor={"#cde"}>
        <HeaderText>Clarusway</HeaderText>
        <HeaderText headerColor="red">Styled Clarusway</HeaderText>
        <Link target="_blank" rel="noopener" href="https://clarusway.com">
          Learn FS DEvelopment
        </Link>
        <Link
          secondary
          target="_blank"
          rel="noopener"
          href="https://clarusway.com"
        >
          Learn FS DEvelopment
        </Link>
        <ExtendedComp>Extended Link</ExtendedComp>
        <Button>Primary</Button>
        <Button primary>Primary</Button>
      </Wrapper>
    </>
  );
};

export default StyledComponents;
