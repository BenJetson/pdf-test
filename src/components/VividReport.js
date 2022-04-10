import ReportGenerator from "./ReportGenerator";
import base64img from "./data/base64img.json";

import circuitImg from "./data/chris-ried-bN5XdU-bap4-unsplash.jpg";
import { ReactComponent as ReactLogo } from "./data/react.svg";
import ReportViewMUI from "./ReportViewMUI";

const Image = ({ src, alt, style = {} }) => (
  <img
    src={src}
    alt={alt}
    style={{
      // Make the image display as a block element rather than inline.
      display: "block",
      // Make sure that the image is not wider than the report element (100%)!!
      maxWidth: "100%",
      marginBottom: "1rem",
      ...style,
    }}
  />
);

const VividReport = () => {
  return (
    <ReportGenerator
      title="Vivid Report"
      filename="vivid.pdf"
      component={ReportViewMUI}
    >
      {/* You could dynamically generate this ... this example does not. */}
      <h1>Report</h1>
      <p>This is a report for you.</p>

      <h2>Same Origin Images</h2>
      <p>
        These images are hosted on the same server as the app. They{" "}
        <strong>will be displayed</strong> in the downloaded report because CORS
        will allow them to be fetched by XHR.
      </p>
      <Image
        src="/img/jonatan-pie-VlH2eHyE_50-unsplash.jpg"
        alt="blue waterfall"
      />
      <Image
        src="/img/marius-ciocirlan-T9pdHqCsyoQ-unsplash.jpg"
        alt="pumpkins"
      />

      <h2>Data URL Images</h2>
      <p>
        These images are embedded in the webpage using a Data URL. No requests
        to any server are required to load these images, so they{" "}
        <strong>will be displayed</strong> in the report download.
      </p>
      <p>
        To generate data URLs, you need to base64-encode the image file. You
        could use a tool like <a href="https://dataurl.app">dataurl.app</a> to
        generate these, then set the <code>src</code> of your <code>img</code>{" "}
        to the results.
      </p>
      <p>
        Note that some images, even seemingly small ones, could produce
        thousands of characters when base64-encoded. Some browsers will not
        parse a data URL that long. So, it is best to only use small images, a
        few KiB at most, like logos in this manner.
      </p>
      <Image src={base64img["ubuntu"]} alt="Ubuntu Logo" />
      <Image src={base64img["screenshot"]} alt="Ubuntu 7.04 Screenshot" />

      <h2>Images via Webpack Loader</h2>
      <p>
        Create React App will use the Webpack file loader to bundle images in
        your source in the build output. This means that they will be accessible
        from the same server, and <strong>will be displayed</strong> in the
        downloaded report.
      </p>
      <Image src={circuitImg} alt="Circuit Board" />
      <p>
        This also works with the SVG loader, which builds a React component from
        the SVG source.
      </p>
      <ReactLogo />

      <h2>Non-Same-Origin</h2>
      <p>
        These images are not from the same origin, nor are they embedded in the
        site code. Therefore, these{" "}
        <strong style={{ color: "red" }}>will not be displayed</strong> in the
        downloaded report.
      </p>
      <p>
        They do appear in the preview, since image tags are not subject to the
        same origin policy. However, when rendering the PDF using HTML canvas
        and JavaScript, the same origin security policy does apply and the
        images become inaccessible to the canvas renderer.
      </p>
      <Image
        src="https://unsplash.com/photos/C8wlYF8ubBo/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NHx8bWFnaWN8ZW58MHx8fHwxNjQ5NjA1OTMx&force=true&w=640"
        alt="Disappearing Cards"
        style={{ border: "3px dotted red" }}
      />
      <p>
        All that will remain is the red border that this image element has
        around it. The cards have magically disappeared. <em>Tragic</em>.
      </p>
    </ReportGenerator>
  );
};

export default VividReport;
