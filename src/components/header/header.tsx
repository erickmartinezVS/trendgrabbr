import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import {
  DoubleArrowContainer,
  FieldContainer,
  FieldTitle,
  HeaderContainer,
  HeaderSubTitle,
  HeaderText,
  HeaderTitle,
  LogoImage,
  RightHeaderContainer,
  RowHeaderContainer,
  RowInline,
  RowSpace,
  SearchBarContainer,
  SearchBarText,
} from "./header.styles";

import {
  LocationOn,
  ArrowDropDown,
  DateRange,
  Close,
  Search,
  KeyboardDoubleArrowDown,
} from "@mui/icons-material";

import backgroundImage from "../../assets/Hero-1_image.png";
import logo from "../../assets/Logo-header.png";

import { StyledButton } from "../styled-button";
import { Space } from "../space";
import { ModalLogin } from "../modal-login";
import { ModalStarted } from "../modal-started";

export const Header = () => {
  const [headerType, setHeaderType] = useState<string>("home");
  const [openLogin, setOpenLogin] = useState<boolean>(false);
  const [openStarted, setOpenStarted] = useState<boolean>(false);

  const location = useLocation();
  const navigate = useNavigate();

  const handleOpenLogin = () => setOpenLogin(true);
  const handleCloseLogin = () => setOpenLogin(false);
  const handleOpenStarted = () => setOpenStarted(true);
  const handleCloseStarted = () => setOpenStarted(false);

  useEffect(() => {
    if (location) {
      let tempType = "home";
      if (location.pathname != "/") {
        tempType = location.pathname.replaceAll("/", "");
      }
      setHeaderType(tempType);
    }
  }, [location]);

  const searchPress = () => {
    navigate("/results");
  };

  return (
    <HeaderContainer backgroundImage={backgroundImage} headerType={headerType}>
      <RowHeaderContainer>
        <Link to="/">
          <LogoImage src={logo} alt="logo" />
        </Link>
        <RightHeaderContainer>
          <HeaderText onClick={handleOpenLogin}>Login</HeaderText>
          <Space size={40} horizontal />
          <StyledButton onPress={handleOpenStarted} title="Get Started" />
        </RightHeaderContainer>
      </RowHeaderContainer>
      <Space size={170} />
      {headerType === "contact" ? (
        <HeaderTitle>Contact Us</HeaderTitle>
      ) : (
        <>
          {headerType === "home" && (
            <>
              <HeaderTitle>
                Welcome to the Beta version of Trendgrabbr!
              </HeaderTitle>
              <Space size={40} />
              <HeaderSubTitle>
                Learn about important company trends. Which companies are
                Hiring? Which are Downsizing? <br /> Our AI-powered tool finds
                company information from thousands of sources. <br /> Make a
                selection to get started!
              </HeaderSubTitle>
              <Space size={120} />{" "}
            </>
          )}
          <SearchBarContainer>
            <FieldContainer>
              <FieldTitle>STATE</FieldTitle>
              <Space size={10} />
              <RowInline>
                <LocationOn color="primary" fontSize="large" />
                <Space size={5} horizontal />
                <SearchBarText>Enter State</SearchBarText>
              </RowInline>
            </FieldContainer>
            <FieldContainer>
              <FieldTitle>SIGNAL</FieldTitle>
              <Space size={10} />
              <RowSpace>
                <SearchBarText>Select Signal</SearchBarText>
                <ArrowDropDown
                  color="primary"
                  fontSize="large"
                  sx={{ fontSize: 50 }}
                />
              </RowSpace>
            </FieldContainer>
            <FieldContainer>
              <FieldTitle>INDUSTRY</FieldTitle>
              <Space size={10} />
              <RowSpace>
                <SearchBarText>Select Industry</SearchBarText>
                <ArrowDropDown
                  color="primary"
                  fontSize="large"
                  sx={{ fontSize: 50 }}
                />
              </RowSpace>
            </FieldContainer>
            <FieldContainer last>
              <RowSpace>
                <div>
                  <FieldTitle>DATE RANGE</FieldTitle>
                  <Space size={10} />
                  <RowSpace style={{ width: "11vw" }}>
                    <RowInline>
                      <DateRange color="primary" fontSize="large" />
                      <Space size={10} horizontal />
                      <SearchBarText>Set Date</SearchBarText>
                    </RowInline>
                    <Close
                      fontSize="large"
                      sx={{ color: "#626262", fontSize: 40 }}
                    />
                  </RowSpace>
                </div>
                <StyledButton
                  onlyIcon
                  icon={<Search sx={{ fontSize: 50 }} />}
                  onPress={searchPress}
                />
              </RowSpace>
            </FieldContainer>
          </SearchBarContainer>
          {headerType === "home" && (
            <DoubleArrowContainer>
              <KeyboardDoubleArrowDown color="primary" sx={{ fontSize: 50 }} />
            </DoubleArrowContainer>
          )}
        </>
      )}
      <ModalLogin open={openLogin} handleClose={handleCloseLogin}/>
      <ModalStarted open={openStarted} handleClose={handleCloseStarted}/>
    </HeaderContainer>
  );
};
