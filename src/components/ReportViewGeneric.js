import React from "react";
import {
  STATUS_PREVIEW,
  STATUS_GENERATING,
  STATUS_ERROR,
  STATUS_READY,
} from "./ReportStatus";

const Alert = ({ status, statusMessage }) => (
  <div
    style={{
      margin: "1rem 0",
      padding: "1rem",
      borderRadius: "10px",
      width: "100%",
      color: "#0C3B69",
      backgroundColor: "#B3E5FC",
      ...{
        [STATUS_GENERATING]: {
          color: "#593700",
          backgroundColor: "#FBC02D",
        },
        [STATUS_ERROR]: {
          color: "#5D0B2B",
          backgroundColor: "#F8BBD0",
        },
        [STATUS_READY]: {
          color: "#1A441C",
          backgroundColor: "#C8E6C9",
        },
      }[status],
    }}
  >
    {statusMessage}
  </div>
);

const ButtonRow = ({ children }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "row",
      margin: "1rem 0",
    }}
  >
    {children}
  </div>
);

const Button = ({ href, disabled, children, ...props }) => {
  /** @type React.CSSProperties */
  const styles = {
    border: "none",
    outline: "none",
    fontSize: "inherit",
    fontWeight: 500,
    textDecoration: "none",
    display: "block",
    padding: "0.75rem",
    borderRadius: "0.5rem",
    margin: "0 1rem 0 0",
    color: disabled ? "#555" : "#fff",
    background: "none",
    cursor: disabled ? "default" : "pointer",
    backgroundColor: disabled ? "#ccc" : "#512DA8",
    boxShadow: disabled
      ? "none"
      : `
        0px 3px 1px -2px rgba(0,0,0,0.2),
        0px 2px 2px 0px rgba(0,0,0,0.14),
        0px 1px 5px 0px rgba(0,0,0,0.12)
      `,
  };

  return href && !disabled ? (
    <a style={styles} href={href} {...props}>
      {children}
    </a>
  ) : (
    <button style={styles} disabled={disabled} {...props}>
      {children}
    </button>
  );
};

const PreviewBox = ({ children }) => (
  <div
    style={{
      margin: "2rem 0",
      overflow: "scroll",
      maxHeight: "400px",
      border: "1px solid #aaa",
      backgroundColor: "#ddd",
      userSelect: "none",
      cursor: "default",
    }}
  >
    {children}
  </div>
);

const Paper = ({ children }) => (
  <div
    style={{
      display: "inline-block",
      padding: "1in",
      width: "8.5in",
      minHeight: "11in",
      borderRadius: "10px",
      margin: "2rem",
      backgroundColor: "#fff",
      boxShadow: `
        rgba(0, 0, 0, 0.2) 0px 4px 5px -2px,
        rgba(0, 0, 0, 0.14) 0px 7px 10px 1px,
        rgba(0, 0, 0, 0.12) 0px 2px 16px 1px
      `,
    }}
  >
    {children}
  </div>
);

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
    <Alert status={status} statusMessage={statusMessage} />

    <ButtonRow>
      <Button onClick={generate} disabled={status !== STATUS_PREVIEW}>
        Generate
      </Button>
      <Button
        href={downloadURL}
        download={filename}
        disabled={status !== STATUS_READY}
      >
        Download
      </Button>
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
