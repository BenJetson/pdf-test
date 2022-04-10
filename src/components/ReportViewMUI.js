import React from "react";
import { Download, PlayArrow } from "@mui/icons-material";
import { Alert, Box, Button, Typography, Paper, Stack } from "@mui/material";
import {
  STATUS_PREVIEW,
  STATUS_GENERATING,
  STATUS_ERROR,
  STATUS_READY,
} from "./ReportStatus";

const ReportViewMUI = ({
  title,
  filename,
  generate,
  contentRef,
  downloadURL,
  status,
  statusMessage,
  children,
}) => (
  <Box>
    <Typography variant="h3" component="h1">
      {title}
    </Typography>
    <Alert
      sx={{ my: 3 }}
      severity={
        {
          [STATUS_PREVIEW]: "info",
          [STATUS_GENERATING]: "warning",
          [STATUS_ERROR]: "error",
          [STATUS_READY]: "success",
        }[status]
      }
    >
      {statusMessage}
    </Alert>

    <Stack spacing={2} direction="row" sx={{ my: 3 }}>
      <Button
        variant="contained"
        onClick={generate}
        disabled={status !== STATUS_PREVIEW}
        startIcon={<PlayArrow />}
      >
        Generate
      </Button>
      <Button
        variant="contained"
        href={downloadURL}
        download={filename}
        disabled={status !== STATUS_READY}
        startIcon={<Download />}
      >
        Download
      </Button>
    </Stack>

    <Typography variant="h4" component="h2">
      Preview
    </Typography>
    <Box
      sx={{
        my: 2,
        overflow: "scroll",
        maxHeight: "400px",
        border: "1px solid #aaa",
        backgroundColor: "#ddd",
        userSelect: "none",
        cursor: "default",
      }}
    >
      <Paper
        sx={{
          display: "inline-block",
          p: "1in",
          width: "8.5in",
          minHeight: "11in",
          borderRadius: "10px",
          m: 4,
          boxShadow: (theme) => theme.shadows[7],
        }}
        // elevation={5}
      >
        <div ref={contentRef}>{children}</div>
      </Paper>
    </Box>
  </Box>
);

export default ReportViewMUI;
