# PDF Test

This project shows examples for how to do client-side PDF rendering in
a React app.

You can see it live at https://pdf-test-sample.vercel.app.

| Homepage | MUI View | Generic View |
|----------|----------|--------------|
| ![Homepage Screenshot](https://user-images.githubusercontent.com/10427974/162643097-8ade425d-dda1-4a43-9d9d-72119076b9d2.png) | ![MUI PDF Generation Screenshot](https://user-images.githubusercontent.com/10427974/162643096-4d3731c0-01ed-4b2a-8d60-b41d7488fb16.png) | ![Generic PDF Generation Screenshot](https://user-images.githubusercontent.com/10427974/162643390-7e480b18-3b73-4fad-b0e3-44b7d4fba3bb.png) |

## Under the Hood

This project uses the 
[`jspdf-html2canvas` library](https://www.npmjs.com/package/jspdf-html2canvas)
to generate PDF documents on the client.

If you are interested in doing something similar in your app, take a look at
[`src/components/ReportGenerator.js`](src/components/ReportGenerator.js).

You can write your own custom views for `ReportGenerator` as well. Two example
views are provided:

- [`ReportViewMUI`](src/components/ReportViewMUI.js) - a view that is based on
  MUI components and MUI icons.
- [`ReportViewGeneric`](src/components/ReportViewGeneric.js) - a view that is 
  built with generic React compoments and styled using the
  [`emotion` library](https://emotion.sh).

## Limitations

- `jspdf-html2canvas` generates PDF documents by converting the output to an
  image. Thus, text is not selectable in the output.
- Due to CORS, external images cannot be rendered in the PDF documents. For 
  more info, read the info in the Vivid Report example.

