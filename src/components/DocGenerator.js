import React, { useRef, useState } from "react";
import html2PDF from "jspdf-html2canvas";
import { Box, Button, Grid, Hidden, Paper, Typography } from "@mui/material";
import { styled } from "@mui/system";

const Report = ({ forwardRef }) => (
  <div
    // Apply the ref here to the report element.
    // IMPORTANT! From here down, try to use basic HTML elements with minimal
    // styling for the best output results.
    ref={forwardRef}
    style={{
      fontFamily: "Arial",

      // Size is important here. Width of the item on the page will
      // correspond with width on the result PDF.
      width: "6.5in", // 8.5 in - ( 2 * 1 in margin )
    }}
  >
    {/* You could dynamically generate this ... this example does not. */}
    <h1>Report</h1>
    <p>This is a report for you.</p>
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>iPhone 6</td>
          <td>$573.63</td>
        </tr>
      </tbody>
    </table>
    <h2>The Lists</h2>
    <ul>
      <li>a thing</li>
      <li>another thing</li>
      <li>one more thing</li>
    </ul>
  </div>
);

const DocGenerator = () => {
  // Need a forward reference to the element that we will capture for PDF.
  const reportSource = useRef();

  // Store the result URL here. When not generated yet, use null.
  const [result, setResult] = useState(null);

  // Do the PDF generation.
  const generate = () => {
    // Get the current element that the forward reference points to.
    const source = reportSource.current;

    html2PDF(source, {
      jsPDF: {
        unit: "in",
        format: "letter",
      },
      html2canvas: {
        imageTimeout: 15000,
        logging: true,
        useCORS: false,
      },
      imageType: "image/png",
      imageQuality: 1,
      margin: {
        top: 1,
        right: 1,
        bottom: 1,
        left: 1,
      },
      output: "bloburl",
      init: function () {},
      success: function (pdf) {
        // setResult(pdf.save(this.output));
        setResult(pdf.output(this.output));
      },
    });
  };

  return (
    <Box>
      <Typography variant="h1">Doc Generator</Typography>

      <Typography variant="h2">Tools</Typography>
      <Button variant="contained" onClick={generate}>
        Generate
      </Button>

      <Typography variant="h2">Results</Typography>
      {result ? (
        <>
          <Typography variant="body1">Ready!</Typography>
          <Button
            href={result}
            variant="contained"
            download={"result.pdf"}
            target="pdfTab"
          >
            Download
          </Button>
        </>
      ) : (
        <Typography variant="body1">Not ready. Generate first.</Typography>
      )}

      <Typography variant="h2">Preview</Typography>
      <Paper sx={{ p: 3 }}>
        <Report
          // Pass the reference through so it can be applied to the report.
          forwardRef={reportSource}
        />
      </Paper>
    </Box>
  );
};

export default DocGenerator;
