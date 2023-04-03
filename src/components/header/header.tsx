import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { isMobile } from "react-device-detect";

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
  RightMobileHeaderContainer,
  RowHeaderContainer,
  RowInline,
  RowSpace,
  RowSpaceSpecial,
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
  Segment,
} from "@mui/icons-material";

import backgroundImage from "../../assets/Hero-1_image.png";
import logo from "../../assets/Logo-header.png";

import { StyledButton } from "../styled-button";
import { Space } from "../space";
import { ModalLogin } from "../modal-login";
import { ModalStarted } from "../modal-started";
import { ModalMenu } from "../modal-menu";

export const Header = () => {
  const [headerType, setHeaderType] = useState<string>("home");
  const [openLogin, setOpenLogin] = useState<boolean>(false);
  const [openStarted, setOpenStarted] = useState<boolean>(false);
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const location = useLocation();
  const navigate = useNavigate();

  const handleOpenLogin = () => setOpenLogin(true);
  const handleCloseLogin = () => setOpenLogin(false);
  const handleOpenStarted = () => setOpenStarted(true);
  const handleCloseStarted = () => setOpenStarted(false);
  const handleOpenMenu = () => setOpenMenu(true);
  const handleCloseMenu = () => setOpenMenu(false);

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

  const goToContact = () => {
    handleCloseMenu();
    navigate("/contact");
  };

  const openLoginAction = () => {
    handleCloseMenu();
    handleOpenLogin();
  };

  const openStartedAction = () => {
    handleCloseMenu();
    handleOpenStarted();
  };

  return (
    <HeaderContainer backgroundImage={backgroundImage} headerType={headerType}>
      <RowHeaderContainer>
        <Link to="/">
          <LogoImage src={logo} alt="logo" />
        </Link>
        <RightHeaderContainer>
          <HeaderText onClick={handleOpenLogin}>Login</HeaderText>
          <Space size={1.6} horizontal test />
          <StyledButton onPress={handleOpenStarted} title="Get Started" />
        </RightHeaderContainer>
        <RightMobileHeaderContainer onClick={handleOpenMenu}>
          <Segment sx={{ fontSize: 36, color: "white" }} />
        </RightMobileHeaderContainer>
      </RowHeaderContainer>
      {headerType === "contact" ? (
        !isMobile && (
          <>
            <Space size={10} test />
            <HeaderTitle>Contact Us</HeaderTitle>
          </>
        )
      ) : (
        <>
          {headerType === "home" ? (
            <>
              {isMobile ? <Space size={30} /> : <Space size={13.3} test />}
              <HeaderTitle>
                Welcome to the Beta version of Trendgrabbr!
              </HeaderTitle>
              {isMobile ? <Space size={25} /> : <Space size={3} test />}
              <HeaderSubTitle>
                Learn about important company trends. Which companies are
                Hiring? Which are Downsizing? <br /> Our AI-powered tool finds
                company information from thousands of sources. <br /> Make a
                selection to get started!
              </HeaderSubTitle>
              {!isMobile && <Space size={9.5} test />}
            </>
          ) : (
            <Space size={10} test />
          )}
          <SearchBarContainer>
            <FieldContainer>
              <FieldTitle>STATE</FieldTitle>
              {isMobile ? <Space size={10} /> : <Space size={0.7} test />}
              <RowInline>
                <LocationOn
                  color="primary"
                  sx={{ fontSize: isMobile ? 18 : "1.4vw" }}
                />
                {isMobile ? (
                  <Space size={5} horizontal />
                ) : (
                  <Space size={0.3} horizontal test />
                )}
                <SearchBarText>Enter State</SearchBarText>
              </RowInline>
            </FieldContainer>
            <FieldContainer>
              <FieldTitle>SIGNAL</FieldTitle>
              {isMobile ? <Space size={10} /> : <Space size={0.7} test />}
              <RowSpace>
                <SearchBarText>Select Signal</SearchBarText>
                <ArrowDropDown
                  color="primary"
                  sx={{ fontSize: isMobile ? 32 : "2vw" }}
                />
              </RowSpace>
            </FieldContainer>
            <FieldContainer>
              <FieldTitle>INDUSTRY</FieldTitle>
              {isMobile ? <Space size={10} /> : <Space size={0.7} test />}
              <RowSpace>
                <SearchBarText>Select Industry</SearchBarText>
                <ArrowDropDown
                  color="primary"
                  sx={{ fontSize: isMobile ? 32 : "2vw" }}
                />
              </RowSpace>
            </FieldContainer>
            <FieldContainer last>
              <RowSpace>
                <div>
                  <FieldTitle>DATE RANGE</FieldTitle>
                  {isMobile ? <Space size={10} /> : <Space size={0.7} test />}
                  <RowSpaceSpecial>
                    <RowInline>
                      <DateRange
                        color="primary"
                        sx={{ fontSize: isMobile ? 18 : "1.4vw" }}
                      />
                      {isMobile ? (
                        <Space size={7} horizontal />
                      ) : (
                        <Space size={0.4} horizontal test />
                      )}
                      <SearchBarText>Set Date</SearchBarText>
                    </RowInline>
                    <Close
                      sx={{
                        color: "#626262",
                        fontSize: isMobile ? 18 : "1.6vw",
                      }}
                    />
                  </RowSpaceSpecial>
                </div>
                {!isMobile && (
                  <StyledButton
                    onlyIcon
                    icon={<Search sx={{ fontSize: "2vw" }} />}
                    onPress={searchPress}
                  />
                )}
              </RowSpace>
            </FieldContainer>
            {isMobile && (
              <>
                <Space size={30} />
                <StyledButton title="Go" mobile />
              </>
            )}
          </SearchBarContainer>
          {headerType === "home" && (
            <DoubleArrowContainer>
              <KeyboardDoubleArrowDown
                color="primary"
                sx={{ fontSize: "2vw" }}
              />
            </DoubleArrowContainer>
          )}
        </>
      )}
      <ModalLogin open={openLogin} handleClose={handleCloseLogin} />
      <ModalStarted open={openStarted} handleClose={handleCloseStarted} />
      <ModalMenu
        open={openMenu}
        handleClose={handleCloseMenu}
        openLogin={openLoginAction}
        openStarted={openStartedAction}
        openContact={goToContact}
      />
    </HeaderContainer>
  );
};
