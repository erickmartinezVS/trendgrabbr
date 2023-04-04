import { useState } from "react";
import {
  ChevronRight,
  ChevronLeft,
  KeyboardArrowDown,
  Villa,
  LocationOn,
  ArrowUpward,
  DateRange,
} from "@mui/icons-material";

import {
  ButtonsContainer,
  Card,
  CardDescription,
  CardName,
  CardState,
  CardText,
  ContentContainer,
  ContentLink,
  ContentText,
  Divider,
  HeaderContainer,
  InfoContainer,
  InfoSectionContainer,
  MobileContainer,
  PagesContainer,
  RowInline,
  RowInlineCard,
  RowSpace,
  RowSpaceHeader,
  SearchText,
  SearchTitle,
  TextContainer,
} from "./results.styles";

import { StyledButton } from "../../components/styled-button";
import { Space } from "../../components/space";
import { Footer } from "../../components/footer";

import data from "./data.json";
import { useNavigate } from "react-router-dom";
import { isMobile } from "react-device-detect";

export const Results = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const cardsPerPage = 6;
  const navigate = useNavigate();

  const pageAction = (value: string | number) => () => {
    if (typeof value == "number") {
      setCurrentPage(value);
    } else {
      let tempNum = currentPage;
      value == "Add" ? tempNum++ : tempNum--;
      setCurrentPage(tempNum);
    }
  };

  const getInfoPages = () => {
    let firstNum = (currentPage - 1) * cardsPerPage + 1;
    let secondNum = currentPage * cardsPerPage;

    let respNum;
    if (firstNum === secondNum || firstNum === data.length) {
      respNum = firstNum;
    } else if (secondNum > data.length) {
      respNum = firstNum + " - " + data.length;
    } else {
      respNum = firstNum + " - " + secondNum;
    }

    return respNum + " of " + data.length;
  };

  const renderButtons = () => {
    let resp = [];

    for (let i = 1; i <= Math.ceil(data.length / cardsPerPage); i++) {
      resp.push(
        <RowInline>
          {i != 1 && <Space size={1.2} horizontal test />}
          <StyledButton
            key={i}
            variant="text"
            color="secondary"
            size="small"
            selected={currentPage == i}
            title={i}
            onPress={pageAction(i)}
          />
        </RowInline>
      );
    }

    return <RowInline>{resp}</RowInline>;
  };

  const renderData = () => {
    return data
      .filter((_value, i) =>
        isMobile
          ? true
          : i >= (currentPage - 1) * cardsPerPage &&
            i < currentPage * cardsPerPage
      )
      .map((value, i) => (
        <Card key={i} onClick={() => navigate("/detail", { state: { value } })}>
          {isMobile ? (
            <>
              <RowSpace>
                <CardName>{value.name}</CardName>
                <RowInline>
                  <CardState>{value.state}</CardState>
                  <Space size={5} horizontal />
                  <ArrowUpward color="info" sx={{ fontSize: 18 }} />
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
                  <CardName>{value.name} {value.id}</CardName>
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
        </Card>
      ));
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
            <Space size={20} />
            <CardText>
              <strong>Sort by:</strong> Recommended
            </CardText>
          </HeaderContainer>
        ) : (
          <>
            <RowSpace>
              <RowInline>
                <ContentLink to={"/"}>Home</ContentLink>
                <ChevronRight
                  color="primary"
                  sx={{ fontSize: "1.8vw", marginInline: "0.5vw" }}
                />
                <ContentText selected>Results</ContentText>
              </RowInline>
              <RowInline>
                <ContentText>{getInfoPages()}</ContentText>
                <Space size={1.5} horizontal test />
                <StyledButton
                  onlyIcon
                  icon={<ChevronLeft sx={{ fontSize: "1.8vw" }} />}
                  color="secondary"
                  size="small"
                  disabled={currentPage == 1}
                  onPress={pageAction("Subtract")}
                />
                <Space size={0.6} horizontal test />
                <StyledButton
                  onlyIcon
                  icon={<ChevronRight sx={{ fontSize: "1.8vw" }} />}
                  color="secondary"
                  size="small"
                  disabled={currentPage * cardsPerPage >= data.length}
                  onPress={pageAction("Add")}
                />
              </RowInline>
            </RowSpace>
            <Space size={4} test />
            <RowSpace>
              <RowInline>
                <SearchText>
                  Your search returned {data.length} results.
                </SearchText>
                <Space size={0.6} horizontal test />
                <SearchTitle>Save this search</SearchTitle>
              </RowInline>
              <RowInline>
                <ContentText>Sort by: Recommended</ContentText>
                <Space size={0.4} horizontal test />
                <KeyboardArrowDown
                  color="secondary"
                  sx={{ fontSize: "1.4vw" }}
                />
              </RowInline>
            </RowSpace>
            <Space size={5} test />
          </>
        )}
        <Divider />
        {isMobile && (
          <TextContainer>
            <SearchText>Your search returned {data.length} results.</SearchText>
            <Space size={5} />
            <SearchTitle>Save this search</SearchTitle>
          </TextContainer>
        )}
        <MobileContainer>{renderData()}</MobileContainer>
        {!isMobile && (
          <>
            <Space size={5} test />
            <ButtonsContainer>
              <RowInline>
                <StyledButton
                  onlyIcon
                  icon={<ChevronLeft sx={{ fontSize: "1.8vw" }} />}
                  variant="outlined"
                  color="secondary"
                  size="small"
                  disabled={currentPage == 1}
                  onPress={pageAction("Subtract")}
                />
                <PagesContainer>{renderButtons()}</PagesContainer>
                <StyledButton
                  onlyIcon
                  icon={<ChevronRight sx={{ fontSize: "1.8vw" }} />}
                  color="secondary"
                  size="small"
                  disabled={currentPage * cardsPerPage >= data.length}
                  onPress={pageAction("Add")}
                />
              </RowInline>
            </ButtonsContainer>
          </>
        )}
      </ContentContainer>
      {!isMobile && <Footer />}
    </>
  );
};
