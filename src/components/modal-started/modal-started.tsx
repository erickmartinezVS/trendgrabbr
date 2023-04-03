import { useEffect, useRef, useState } from "react";
import {
  CloseContainer,
  FieldContainer,
  FieldText,
  FieldTitle,
  MainContainer,
  ModalContainer,
  ModalText,
  ModalTitle,
  PeriodText,
  ResultsContainer,
  RowEnd,
  RowInline,
  RowSpaceHeader,
} from "./modal-started.styles";
import { ModalProps } from "./modal-started.types";

import { Close, DateRange, LocationOn } from "@mui/icons-material";
import { Backdrop, Fade, Input, Modal } from "@mui/material";

import { Space } from "../space";
import { StyledInput } from "../styled-input";
import { StyledButton } from "../styled-button";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { isMobile } from "react-device-detect";

export const ModalStarted = (props: ModalProps) => {
  const [heightBottom, setHeightBottom] = useState<any>("0");
  const [selectedPeriod, setSelectedPeriod] = useState<number>(1);
  const refBottom = useRef<any>(null);
  const closeAction = () => props.handleClose();

  useEffect(() => {
    if (props.open) setHeightBottom(refBottom.current?.clientHeight);
  }, [refBottom.current, props.open]);

  return (
    <Modal
      open={props.open}
      onClose={closeAction}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={props.open} style={{ outline: "none" }}>
        <ModalContainer>
          <MainContainer>
            <RowSpaceHeader>
              <ModalTitle>Get Started</ModalTitle>
              {isMobile ? (
                <CloseContainer>
                  <Close
                    onClick={closeAction}
                    sx={{ color: "#606060", fontSize: 26 }}
                  />
                </CloseContainer>
              ) : (
                <Close
                  onClick={closeAction}
                  sx={{ color: "#FF9933", fontSize: "2vw" }}
                />
              )}
            </RowSpaceHeader>
            {isMobile ? <Space size={40} /> : <Space size={3} test />}
            <ModalText>
              Just sign up with your email to receive these results for the time
              interval of your choice. It's Free!
            </ModalText>
            {isMobile ? <Space size={30} /> : <Space size={2.5} test />}
            <ResultsContainer>
              <FieldContainer>
                <FieldTitle>State</FieldTitle>
                <Space size={1} test />
                <RowInline>
                  <LocationOn
                    color="primary"
                    sx={{ fontSize: isMobile ? 18 : "1.4vw" }}
                  />
                  <Space size={5} horizontal />
                  <FieldText>New York</FieldText>
                </RowInline>
              </FieldContainer>
              <FieldContainer>
                <FieldTitle>Signal</FieldTitle>
                <Space size={1} test />
                <FieldText>Hiring</FieldText>
              </FieldContainer>
              <FieldContainer last>
                <FieldTitle>Industry</FieldTitle>
                <Space size={1} test />
                <FieldText>Manufacturing</FieldText>
              </FieldContainer>
            </ResultsContainer>
            {isMobile ? <Space size={30} /> : <Space size={2.5} test />}
            <StyledInput
              title="Email Address"
              placeholder="Enter email address here"
            />
            {isMobile ? <Space size={30} /> : <Space size={4} test />}
            <StyledInput title="Search Name" placeholder="Name this search" />
            {isMobile ? <Space size={30} /> : <Space size={4} test />}
            <FieldTitle>Send an alert for each selected time period</FieldTitle>
            {isMobile ? <Space size={10} /> : <Space size={0.7} test />}
            <RowInline>
              <PeriodText
                selected={selectedPeriod == 1}
                onClick={() => setSelectedPeriod(1)}
              >
                Weekly
              </PeriodText>
              {isMobile ? <Space size={7} horizontal /> : <Space size={0.8} horizontal test />}
              <PeriodText
                selected={selectedPeriod == 2}
                onClick={() => setSelectedPeriod(2)}
              >
                bi-Weekly
              </PeriodText>
              {isMobile ? <Space size={7} horizontal /> : <Space size={0.8} horizontal test />}
              <PeriodText
                selected={selectedPeriod == 3}
                onClick={() => setSelectedPeriod(3)}
              >
                Monthly
              </PeriodText>
            </RowInline>
            {isMobile ? <Space size={30} /> : <Space size={4} test />}
            <Input
              placeholder={"Start Date"}
              sx={{
                fontSize: isMobile ? 18 : "1.1vw",
                fontWeight: 500,
                fontFamily: "AnekMalayalam",
                color: "#606060",
                width: isMobile ? '100%' : 'auto'
              }}
              endAdornment={
                <DateRange
                  color="primary"
                  sx={{ fontSize: isMobile ? 20 : "1.4vw" }}
                />
              }
            />
            <Space size={5.5} test />
            {isMobile ? (
              <StyledButton title="SUBMIT" mobile />
            ) : (
              <RowEnd>
                <StyledButton title="Submit" />
              </RowEnd>
            )}
          </MainContainer>
        </ModalContainer>
      </Fade>
    </Modal>
  );
};
