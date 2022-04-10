import React, { useEffect, useRef, useState } from "react";
import html2PDF from "jspdf-html2canvas";
import { Download, PlayArrow } from "@mui/icons-material";
import { Alert, Button, Typography, Paper, Stack } from "@mui/material";
import { Box } from "@mui/system";

const STATUS_PREVIEW = "preview";
const STATUS_GENERATING = "generating";
const STATUS_ERROR = "error";
const STATUS_READY = "ready";

const Report = ({ title = "Report", filename = "report.pdf", children }) => {
  const source = useRef();
  const [downloadURL, setDownloadURL] = useState(null);
  const [status, setStatus] = useState(STATUS_PREVIEW);

  useEffect(() => setStatus(STATUS_PREVIEW), [children]);

  const generate = async () => {
    setStatus(STATUS_GENERATING);

    try {
      const pdf = await html2PDF(source.current, {
        jsPDF: { unit: "in", format: "letter" },
        margin: { top: 1, right: 1, bottom: 1, left: 1 },
        html2canvas: { imageTimeout: 15000, logging: true, useCORS: false },
        imageType: "image/png",
        imageQuality: 1,

        // Override default handlers with empty ones.
        init: () => {},
        success: () => {},
      });

      setDownloadURL(pdf.output("bloburl"));
      setStatus(STATUS_READY);
    } catch (err) {
      setStatus(STATUS_ERROR);
      throw err;
    }
  };

  return (
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
        {
          {
            [STATUS_PREVIEW]: "Review the report preview before generating.",
            [STATUS_GENERATING]: "Generating report PDF, please wait.",
            [STATUS_ERROR]: "There was an problem when generating your report.",
            [STATUS_READY]: "Success! Your report download is ready.",
          }[status]
        }
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
          <div ref={source}>{children}</div>
        </Paper>
      </Box>
    </Box>
  );
};

export default Report;
