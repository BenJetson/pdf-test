import Report from "./Report";

const MyReport = () => {
  return (
    <Report title="My Report" filename="mine.pdf">
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
    </Report>
  );
};

export default MyReport;
