import { useState } from "react";
import {
  FieldContainer,
  FieldText,
  FieldTitle,
  ModalContainer,
  ModalText,
  ModalTitle,
  PeriodText,
  ResultsContainer,
  RowEnd,
  RowInline,
  RowSpace,
} from "./modal-started.styles";
import { ModalProps } from "./modal-started.types";

import { Close, DateRange, LocationOn } from "@mui/icons-material";
import { Backdrop, Fade, Input, Modal } from "@mui/material";

import { Space } from "../space";
import { StyledInput } from "../styled-input";
import { StyledButton } from "../styled-button";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export const ModalStarted = (props: ModalProps) => {
  const [selectedPeriod, setSelectedPeriod] = useState<number>(1);
  const closeAction = () => props.handleClose();

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
          <RowSpace>
            <ModalTitle>Get-started</ModalTitle>
            <Close
              onClick={closeAction}
              sx={{ color: "#FF9933", fontSize: 50 }}
            />
          </RowSpace>
          <Space size={40} />
          <ModalText>
            Just sign up with your email to receive these results for the time
            interval of your choice. It's Free!
          </ModalText>
          <Space size={30} />
          <ResultsContainer>
            <FieldContainer>
              <FieldTitle>State</FieldTitle>
              <Space size={10} />
              <RowInline>
                <LocationOn color="primary" fontSize="large" />
                <Space size={5} horizontal />
                <FieldText>New York</FieldText>
              </RowInline>
            </FieldContainer>
            <FieldContainer>
              <FieldTitle>Signal</FieldTitle>
              <Space size={10} />
              <FieldText>Hiring</FieldText>
            </FieldContainer>
            <FieldContainer last>
              <FieldTitle>Industry</FieldTitle>
              <Space size={10} />
              <FieldText>Manufacturing</FieldText>
            </FieldContainer>
          </ResultsContainer>
          <Space size={30} />
          <StyledInput
            title="Email Address"
            placeholder="Enter email address here"
          />
          <Space size={50} />
          <StyledInput title="Search Name" placeholder="Name this search" />
          <Space size={50} />
          <FieldTitle>Send an alert for each selected time period</FieldTitle>
          <Space size={10} />
          <RowInline>
            <PeriodText
              selected={selectedPeriod == 1}
              onClick={() => setSelectedPeriod(1)}
            >
              Weekly
            </PeriodText>
            <Space size={20} horizontal />
            <PeriodText
              selected={selectedPeriod == 2}
              onClick={() => setSelectedPeriod(2)}
            >
              bi-Weekly
            </PeriodText>
            <Space size={20} horizontal />
            <PeriodText
              selected={selectedPeriod == 3}
              onClick={() => setSelectedPeriod(3)}
            >
              Monthly
            </PeriodText>
          </RowInline>
          <Space size={50} />
          <Input
            placeholder={"Start Date"}
            sx={{
              fontSize: 26,
              fontWeight: 500,
              fontFamily: "AnekMalayalam",
              color: "#606060",
            }}
            endAdornment={<DateRange color="primary" fontSize="large" />}
          />
          <Space size={70} />
          <RowEnd>
            <StyledButton title="Submit" />
          </RowEnd>
        </ModalContainer>
      </Fade>
    </Modal>
  );
};
