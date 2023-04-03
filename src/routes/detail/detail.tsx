import {
  ChevronRight,
  Villa,
  LocationOn,
  ArrowUpward,
} from "@mui/icons-material";

import {
  CardDescription,
  CardName,
  CardState,
  CardText,
  ContentContainer,
  ContentLink,
  ContentText,
  Divider,
  Highlight,
  NewsContainer,
  NewsImage,
  NewsTitle,
  RowInline,
  RowInlineCard,
  RowSpace,
  SearchText,
  Tab,
} from "./detail.styles";

import { Space } from "../../components/space";
import { Footer } from "../../components/footer";

import { useLocation } from "react-router-dom";

import news1 from "../../assets/news1.png";
import news2 from "../../assets/news2.png";
import news3 from "../../assets/news3.png";
import news4 from "../../assets/news4.png";

export const Detail = () => {
  const location = useLocation();
  const value = location.state.value;

  const renderNews = () => {
    return (
      <RowSpace>
        <NewsContainer>
          <NewsImage src={news1} />
          <Space size={1.5} test />
          <CardDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </CardDescription>
          <NewsTitle>Read More</NewsTitle>
        </NewsContainer>
        <NewsContainer>
          <NewsImage src={news2} />
          <Space size={1.5} test />
          <CardDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </CardDescription>
          <NewsTitle>Read More</NewsTitle>
        </NewsContainer>
        <NewsContainer>
          <NewsImage src={news3} />
          <Space size={1.5} test />
          <CardDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </CardDescription>
          <NewsTitle>Read More</NewsTitle>
        </NewsContainer>
        <NewsContainer>
          <NewsImage src={news4} />
          <Space size={1.5} test />
          <CardDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </CardDescription>
          <NewsTitle>Read More</NewsTitle>
        </NewsContainer>
      </RowSpace>
    );
  };

  return (
    <>
      <ContentContainer>
        <RowInline>
          <ContentLink to={"/"}>Home</ContentLink>
          <ChevronRight
            color="primary"
            sx={{ fontSize: '1.8vw', marginInline: '0.5vw' }}
          />
          <ContentLink to={"/results"}>Results</ContentLink>
          <ChevronRight
            color="primary"
            sx={{ fontSize: '1.8vw', marginInline: '0.5vw' }}
          />
          <ContentText selected>{value.name}</ContentText>
        </RowInline>
        <Space size={3.5} test />
        <RowSpace>
          <RowInlineCard>
            <CardName>
              {value.name} {value.id}
            </CardName>
            <RowInline>
              <Villa color="primary" sx={{ fontSize: "1.3vw" }} />
              <Space size={0.3} horizontal test />
              <CardText>{value.type}</CardText>
            </RowInline>
            <RowInline>
              <LocationOn color="primary" sx={{ fontSize: "1.3vw" }} />
              <Space size={0.1} horizontal test />
              <CardText>{value.place}</CardText>
            </RowInline>
          </RowInlineCard>
          <RowInline>
            <CardState>{value.state}</CardState>
            <Space size={0.6} horizontal test />
            <ArrowUpward color="info" sx={{ fontSize: "1.7vw" }} />
          </RowInline>
        </RowSpace>
        <Space size={1.6} test />
        <CardDescription>{value.description}</CardDescription>
        <Space size={3.2} test />
        <RowInline>
          <Tab selected>News</Tab>
        </RowInline>
        <Divider />
        <Space size={3.2} test />
        {renderNews()}
        <Space size={2.5} test />
        <SearchText>
          Search for another company?<Highlight>Get started</Highlight>it's free
        </SearchText>
      </ContentContainer>
      <Footer />
    </>
  );
};
