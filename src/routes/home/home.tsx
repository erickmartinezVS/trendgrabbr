import {
  ComputerImage,
  ContainerSubTitle,
  ContainerTitle,
  ContentContainer,
  RightContainer,
  RowInline,
} from "./home.styles";

import computer from "../../assets/Computer.png";

import { StyledButton } from "../../components/styled-button";
import { Space } from "../../components/space";

export const Home = () => {
  return (
    <ContentContainer>
      <ComputerImage src={computer} alt="computer" />
      <Space size={1000} horizontal />
      <RightContainer>
        <ContainerTitle>What exactly is TrendGrabbr?</ContainerTitle>
        <Space size={30} />
        <ContainerSubTitle>
          Trendgrabbr is an AI-powered tool that allows users to see specific
          trends in company information. Each specific type of trend is a
          "signal" that can go in a particular direction. So, for example, a
          company that is either hiring now or predicted to hire a will have a
          <strong> "hiring"</strong> signal. A company that is downsizing or
          predicted to have layoffs will get a <strong> "downsizing"</strong>{" "}
          signal. Other signals are added as our models and datasets grow
          organically.
        </ContainerSubTitle>
        <Space size={30} />
        <RowInline>
          <StyledButton title="GET STARTED" variant="text" />
          <StyledButton title="CONTACT US" variant="text" />
        </RowInline>
      </RightContainer>
    </ContentContainer>
  );
};
