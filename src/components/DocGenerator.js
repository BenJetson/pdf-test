import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
// import { jsPDF } from "jspdf";
import html2PDF from "jspdf-html2canvas";
import { Box, Button, Grid, Hidden, Paper, Typography } from "@mui/material";
import { styled } from "@mui/system";

const Report = styled(Box)({
  fontFamily: "Arial",
});

const DocGenerator = () => {
  const reportSource = useRef();
  const [result, setResult] = useState(null);

  const generate = () => {
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
      <Paper
        sx={{
          display: "block",
          p: 3,
          width: "6.5in", // 8.5 in - ( 2 * 1 in margin )
        }}
      >
        <Report ref={reportSource}>
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
        </Report>
      </Paper>
    </Box>
  );
};

export default DocGenerator;
