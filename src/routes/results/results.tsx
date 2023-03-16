import { useState } from "react";
import {
  ChevronRight,
  ChevronLeft,
  KeyboardArrowDown,
  Villa,
  LocationOn,
  ArrowUpward,
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
  PagesContainer,
  RowInline,
  RowInlineCard,
  RowSpace,
  SearchText,
  SearchTitle,
} from "./results.styles";

import { StyledButton } from "../../components/styled-button";
import { Space } from "../../components/space";

import data from "./data.json";
import { useNavigate } from "react-router-dom";

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
          {i != 1 && <Space size={30} horizontal />}
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
      .filter(
        (_value, i) =>
          i >= (currentPage - 1) * cardsPerPage &&
          i < currentPage * cardsPerPage
      )
      .map((value, i) => (
        <Card key={i} onClick={() => navigate("/detail", { state: { value } })}>
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
        </Card>
      ));
  };

  return (
    <ContentContainer>
      <RowSpace>
        <RowInline>
          <ContentLink to={"/"}>Home</ContentLink>
          <ChevronRight
            color="primary"
            sx={{ fontSize: 45, marginInline: 1.5 }}
          />
          <ContentText selected>Results</ContentText>
        </RowInline>
        <RowInline>
          <ContentText>{getInfoPages()}</ContentText>
          <Space size={35} horizontal />
          <StyledButton
            onlyIcon
            icon={<ChevronLeft sx={{ fontSize: 40 }} />}
            color="secondary"
            size="small"
            disabled={currentPage == 1}
            onPress={pageAction("Subtract")}
          />
          <Space size={15} horizontal />
          <StyledButton
            onlyIcon
            icon={<ChevronRight sx={{ fontSize: 40 }} />}
            color="secondary"
            size="small"
            disabled={currentPage * cardsPerPage >= data.length}
            onPress={pageAction("Add")}
          />
        </RowInline>
      </RowSpace>
      <Space size={40} />
      <RowSpace>
        <RowInline>
          <SearchText>Your search returned {data.length} results.</SearchText>
          <Space size={15} horizontal />
          <SearchTitle>Save this search</SearchTitle>
        </RowInline>
        <RowInline>
          <ContentText>Sort by: Recommended</ContentText>
          <Space size={10} horizontal />
          <KeyboardArrowDown color="secondary" sx={{ fontSize: 35 }} />
        </RowInline>
      </RowSpace>
      <Space size={60} />
      <Divider />
      {renderData()}
      <Space size={60} />
      <ButtonsContainer>
        <RowInline>
          <StyledButton
            onlyIcon
            icon={<ChevronLeft sx={{ fontSize: 40 }} />}
            variant="outlined"
            color="secondary"
            size="small"
            disabled={currentPage == 1}
            onPress={pageAction("Subtract")}
          />
          <PagesContainer>{renderButtons()}</PagesContainer>
          <StyledButton
            onlyIcon
            icon={<ChevronRight sx={{ fontSize: 40 }} />}
            color="secondary"
            size="small"
            disabled={currentPage * cardsPerPage >= data.length}
            onPress={pageAction("Add")}
          />
        </RowInline>
      </ButtonsContainer>
    </ContentContainer>
  );
};
