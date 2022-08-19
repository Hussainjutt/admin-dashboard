import React from "react";
import "./style.css";
import flag_1 from "../../assets/images/flag1.png";
import flag_2 from "../../assets/images/flag2.png";
import flag_3 from "../../assets/images/flag3.png";
import flag_4 from "../../assets/images/flag4.png";
import MapImg from "../../assets/svgs/result.svg";
import LanguageIcon from "@mui/icons-material/Language";
const data = [
  {
    id: 1,
    flag: flag_1,
    country: "United State",
    sales: "2500",
    value: "$230,900",
    bounce: "29.9%",
  },
  {
    id: 2,
    flag: flag_2,
    country: "Germany",
    sales: "3.900",
    value: "$440,000",
    bounce: "40.22%",
  },
  {
    id: 3,
    flag: flag_3,
    country: "Great Britain",
    sales: "1.400",
    value: "$190,700",
    bounce: "23.44%",
  },
  {
    id: 4,
    flag: flag_4,
    country: "Brasil",
    sales: "562",
    value: "$143,960",
    bounce: "32.14%",
  },
];
const Index = () => {
  return (
    <div className="Countries_List_table">
      <div className="Countries_List_Head">
        <div className="Logo-container">
          <LanguageIcon />
        </div>
        <p>Sales by Country</p>
      </div>
      <div className="Countries_List_Body">
        <div className="Counties-table">
          <table>
            <tbody>
              {data.map((el) => (
                <tr key={el.id}>
                  <td>
                    <img src={el.flag} />
                  </td>
                  <td>
                    <h1>Country:</h1>
                    <p>{el.country}</p>
                  </td>
                  <td>
                    <h1>Sales:</h1>
                    <p>{el.sales}</p>
                  </td>
                  <td>
                    <h1>Value:</h1>
                    <p>{el.value}</p>
                  </td>
                  <td>
                    <h1>Bounce:</h1>
                    <p>{el.bounce}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="Countries-location">
          <img src={MapImg} style={{ width: "100%" }} alt="juhbydgvw" />
        </div>
      </div>
    </div>
  );
};

export default Index;
