import {
  ChevronRight,
  Villa,
  LocationOn,
  ArrowUpward,
  DateRange,
  KeyboardArrowDown,
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
  HeaderContainer,
  Highlight,
  InfoContainer,
  InfoSectionContainer,
  MobileContainer,
  NewsContainer,
  NewsDescription,
  NewsImage,
  NewsMobileContainer,
  NewsTitle,
  RowInline,
  RowInlineCard,
  RowSpace,
  RowSpaceHeader,
  RowSpaceNews,
  SearchText,
  Tab,
  ViewTitle,
} from "./detail.styles";

import { Space } from "../../components/space";
import { Footer } from "../../components/footer";

import { useLocation } from "react-router-dom";
import { isMobile } from "react-device-detect";

import news1 from "../../assets/news1.png";
import news2 from "../../assets/news2.png";
import news3 from "../../assets/news3.png";
import news4 from "../../assets/news4.png";

export const Detail = () => {
  const location = useLocation();
  const value = location.state.value;

  const renderNews = () => {
    return (
      <RowSpaceNews>
        <NewsContainer>
          <NewsImage src={news1} />
          <Space size={1.5} test />
          <NewsMobileContainer>
            <NewsDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </NewsDescription>
            <NewsTitle>Read More</NewsTitle>
          </NewsMobileContainer>
        </NewsContainer>
        <NewsContainer>
          <NewsImage src={news2} />
          <Space size={1.5} test />
          <NewsMobileContainer>
            <NewsDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </NewsDescription>
            <NewsTitle>Read More</NewsTitle>
          </NewsMobileContainer>
        </NewsContainer>
        <NewsContainer>
          <NewsImage src={news3} />
          <Space size={1.5} test />
          <NewsMobileContainer>
            <NewsDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </NewsDescription>
            <NewsTitle>Read More</NewsTitle>
          </NewsMobileContainer>
        </NewsContainer>
        <NewsContainer>
          <NewsImage src={news4} />
          <Space size={1.5} test />
          <NewsMobileContainer>
            <NewsDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </NewsDescription>
            <NewsTitle>Read More</NewsTitle>
          </NewsMobileContainer>
        </NewsContainer>
      </RowSpaceNews>
    );
  };

  return (
    <>
      <ContentContainer>
        {isMobile ? (
          <HeaderContainer>
            <InfoContainer>
              <InfoSectionContainer>
                <LocationOn color="primary" sx={{ fontSize: 18 }} />
                <Space size={5} horizontal />
                <CardText>New York</CardText>
              </InfoSectionContainer>
              <InfoSectionContainer last>
                <RowSpaceHeader>
                  <RowInline>
                    <DateRange color="primary" sx={{ fontSize: 18 }} />
                    <Space size={5} horizontal />
                    <CardText>April 17-25, 2022</CardText>
                  </RowInline>
                  <KeyboardArrowDown color="primary" sx={{ fontSize: 26 }} />
                </RowSpaceHeader>
              </InfoSectionContainer>
            </InfoContainer>
          </HeaderContainer>
        ) : (
          <>
            <RowInline>
              <ContentLink to={"/"}>Home</ContentLink>
              <ChevronRight
                color="primary"
                sx={{ fontSize: "1.8vw", marginInline: "0.5vw" }}
              />
              <ContentLink to={"/results"}>Results</ContentLink>
              <ChevronRight
                color="primary"
                sx={{ fontSize: "1.8vw", marginInline: "0.5vw" }}
              />
              <ContentText selected>{value.name}</ContentText>
            </RowInline>
            <Space size={3.5} test />
          </>
        )}
        <MobileContainer>
          {isMobile ? (
            <>
              <RowSpace>
                <CardName>{value.name}</CardName>
                <RowInline>
                  <CardState>{value.state}</CardState>
                  <Space size={5} horizontal />
                  <ArrowUpward color="info" sx={{ fontSize: 22 }} />
                </RowInline>
              </RowSpace>
              <Space size={10} />
              <RowSpace>
                <RowInline>
                  <LocationOn color="primary" sx={{ fontSize: 18 }} />
                  <Space size={3} horizontal />
                  <CardText>{value.place}</CardText>
                </RowInline>
                <RowInline>
                  <Villa color="primary" sx={{ fontSize: 18 }} />
                  <Space size={5} horizontal />
                  <CardText>{value.type}</CardText>
                </RowInline>
              </RowSpace>
              <Space size={15} />
            </>
          ) : (
            <>
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
            </>
          )}
          <CardDescription>{value.description}</CardDescription>
          {isMobile ? <Space size={25} /> : <Space size={3.2} test />}
          <RowInline>
            <Tab selected>News</Tab>
          </RowInline>
          <Divider />
          {isMobile ? (
            <ViewTitle>View All</ViewTitle>
          ) : (
            <Space size={3.2} test />
          )}
          {renderNews()}
          {isMobile ? <Space size={30} /> : <Space size={2.5} test />}
          <SearchText>
            Search for another company? <Highlight>Get started</Highlight> it's
            free
          </SearchText>
        </MobileContainer>
      </ContentContainer>
      {!isMobile && <Footer />}
    </>
  );
};
