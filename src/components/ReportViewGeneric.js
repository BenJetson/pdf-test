import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import {
  STATUS_PREVIEW,
  STATUS_GENERATING,
  STATUS_ERROR,
  STATUS_READY,
} from "./ReportStatus";

const IconWrapper = styled.span`
  font-size: ${(props) => (props.size ? props.size + "pt" : "inherit")};
  margin-right: 0.3em;
`;

const Icon = ({ code, size }) => (
  <IconWrapper size={size}>{String.fromCharCode(code)}</IconWrapper>
);

const Alert = styled.div`
  margin: 1rem 0;
  padding: 1rem;
  border-radius: 10px;

  color: ${(props) =>
    ({
      [STATUS_PREVIEW]: "#0C3B69",
      [STATUS_GENERATING]: "#593700",
      [STATUS_ERROR]: "#5D0B2B",
      [STATUS_READY]: "#1A441C",
    }[props.status])};
  background-color: ${(props) =>
    ({
      [STATUS_PREVIEW]: "#B3E5FC",
      [STATUS_GENERATING]: "#FBC02D",
      [STATUS_ERROR]: "#F8BBD0",
      [STATUS_READY]: "#C8E6C9",
    }[props.status])}; ;
`;

const ButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1rem 0;
`;

const buttonStyles = (props) => css`
  display: block;
  padding: 0.75rem;
  margin: 0 1rem 0 0;

  border: none;
  outline: none;
  border-radius: 0.5rem;

  font-size: inherit;
  font-weight: 500;
  text-decoration: none;

  cursor: ${props.disabled ? "default" : "pointer"};
  color: ${props.disabled ? "#555" : "#fff"};
  background: none;
  background-color: ${props.disabled ? "#ccc" : "#512DA8"};
  box-shadow: ${props.disabled
    ? "none"
    : `
        0px 3px 1px -2px rgba(0,0,0,0.2);
        0px 2px 2px 0px rgba(0,0,0,0.14);
        0px 1px 5px 0px rgba(0,0,0,0.12)
      `};
`;

const LinkButton = styled.a`
  ${buttonStyles}
`;
const Button = styled.button`
  ${buttonStyles}
`;

const AutoButton = ({ href, disabled, children, ...props }) => {
  return href && !disabled ? (
    <LinkButton href={href} {...props}>
      {children}
    </LinkButton>
  ) : (
    <Button disabled={disabled} {...props}>
      {children}
    </Button>
  );
};

const PreviewBox = styled.div`
  margin: 2rem 0;
  overflow: scroll;
  max-height: 400px;
  border: 1px solid #aaa;
  background-color: #ddd;
  user-select: none;
  cursor: default;
`;

const Paper = styled.div`
  display: inline-block;
  padding: 1in;
  width: 8.5in;
  min-height: 11in;
  border-radius: 10px;
  margin: 2rem;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 5px -2px,
    rgba(0, 0, 0, 0.14) 0px 7px 10px 1px, rgba(0, 0, 0, 0.12) 0px 2px 16px 1px;
`;

const ReportViewGeneric = ({
  title,
  filename,
  generate,
  contentRef,
  downloadURL,
  status,
  statusMessage,
  children,
}) => (
  <div>
    <h1>{title}</h1>
    <Alert status={status}>{statusMessage}</Alert>

    <ButtonRow>
      <Button onClick={generate} disabled={status !== STATUS_PREVIEW}>
        <Icon code={0x25b6} /> Generate
      </Button>
      <AutoButton
        href={downloadURL}
        download={filename}
        disabled={status !== STATUS_READY}
      >
        <Icon code={0x2913} /> Download
      </AutoButton>
    </ButtonRow>

    <h2>Preview</h2>
    <PreviewBox>
      <Paper>
        <div ref={contentRef}>{children}</div>
      </Paper>
    </PreviewBox>
  </div>
);

export default ReportViewGeneric;
