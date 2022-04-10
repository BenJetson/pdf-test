import React, { useEffect, useRef, useState } from "react";
import html2PDF from "jspdf-html2canvas";
import {
  STATUS_PREVIEW,
  STATUS_GENERATING,
  STATUS_ERROR,
  STATUS_READY,
} from "./ReportStatus";

const ReportGenerator = ({
  title = "Report",
  filename = "report.pdf",
  component,
  children,
}) => {
  const contentRef = useRef();
  const [downloadURL, setDownloadURL] = useState(null);
  const [status, setStatus] = useState(STATUS_PREVIEW);
  const ReportView = component;

  useEffect(() => setStatus(STATUS_PREVIEW), [children]);

  const generate = async () => {
    setStatus(STATUS_GENERATING);

    try {
      const pdf = await html2PDF(contentRef.current, {
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
    <ReportView
      title={title}
      filename={filename}
      generate={generate}
      contentRef={contentRef}
      downloadURL={downloadURL}
      status={status}
      statusMessage={
        {
          [STATUS_PREVIEW]: "Review the report preview before generating.",
          [STATUS_GENERATING]: "Generating report PDF, please wait.",
          [STATUS_ERROR]: "There was an problem when generating your report.",
          [STATUS_READY]: "Success! Your report download is ready.",
        }[status]
      }
    >
      {children}
    </ReportView>
  );
};

export default ReportGenerator;
