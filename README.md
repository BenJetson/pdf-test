# PDF Test

This project shows examples for how to do client-side PDF rendering in
a React app.

This project uses the 
[`jspdf-html2canvas` library](https://www.npmjs.com/package/jspdf-html2canvas)
to generate PDF documents on the client.

You can see it live at https://pdf-test-sample.vercel.app.

If you are interested in doing something similar in your app, take a look at
[`src/components/ReportGenerator.js`](src/components/ReportGenerator.js).

You can write your own custom views for `ReportGenerator` as well. Two example
views are provided:

- [`ReportViewMUI`](src/components/ReportViewMUI.js) - a view that is based on
  MUI components and MUI icons.
- [`ReportViewGeneric`](src/components/ReportViewGeneric.js) - a view that is 
  built with generic React compoments and styled using the
  [`emotion` library](https://emotion.sh).
