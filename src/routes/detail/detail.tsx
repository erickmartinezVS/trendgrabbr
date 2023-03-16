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
          <Space size={20} />
          <CardDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </CardDescription>
          <NewsTitle>Read More</NewsTitle>
        </NewsContainer>
        <NewsContainer>
          <NewsImage src={news2} />
          <Space size={20} />
          <CardDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </CardDescription>
          <NewsTitle>Read More</NewsTitle>
        </NewsContainer>
        <NewsContainer>
          <NewsImage src={news3} />
          <Space size={20} />
          <CardDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </CardDescription>
          <NewsTitle>Read More</NewsTitle>
        </NewsContainer>
        <NewsContainer>
          <NewsImage src={news4} />
          <Space size={20} />
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
    <ContentContainer>
      <RowInline>
        <ContentLink to={"/"}>Home</ContentLink>
        <ChevronRight
          color="primary"
          sx={{ fontSize: 45, marginInline: 1.5 }}
        />
        <ContentLink to={"/results"}>Results</ContentLink>
        <ChevronRight
          color="primary"
          sx={{ fontSize: 45, marginInline: 1.5 }}
        />
        <ContentText selected>{value.name}</ContentText>
      </RowInline>
      <Space size={40} />
      <RowSpace>
        <RowInlineCard>
          <CardName>
            {value.name} {value.id}
          </CardName>
          <RowInline>
            <Villa color="primary" sx={{ fontSize: 30 }} />
            <Space size={10} horizontal />
            <CardText>{value.type}</CardText>
          </RowInline>
          <RowInline>
            <LocationOn color="primary" sx={{ fontSize: 30 }} />
            <Space size={5} horizontal />
            <CardText>{value.place}</CardText>
          </RowInline>
        </RowInlineCard>
        <RowInline>
          <CardState>{value.state}</CardState>
          <Space size={15} horizontal />
          <ArrowUpward color="info" sx={{ fontSize: 40 }} />
        </RowInline>
      </RowSpace>
      <Space size={20} />
      <CardDescription>{value.description}</CardDescription>
      <Space size={40} />
      <RowInline>
        <Tab selected>News</Tab>
      </RowInline>
      <Divider />
      <Space size={40} />
      {renderNews()}
      <Space size={30} />
      <SearchText>
        Search for another company?<Highlight>Get started</Highlight>it's free
      </SearchText>
    </ContentContainer>
  );
};
