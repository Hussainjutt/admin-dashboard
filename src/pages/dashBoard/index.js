import React, { useEffect, useState } from "react";
import Header from "../../components/header/index";
import SideBar from "../../components/sideBar/index";
import CountriesTable from "../../components/countriesList/index";
import InfoCard from "../../components/infoCard/index";
import LocationCard from "../../components/locationCard/index";
import GraphCard from "../../components/graphscard/index";
import "./style.css";
import Img1 from "../../assets/images/locationCard1.jpg";
import Img2 from "../../assets/images/locationCard2.jpg";
import Img3 from "../../assets/images/locationCard3.jpg";
import data from "../../chartsData/data1";
import Footer from "../../components/footer/index";
const Index = () => {
  const { sales, tasks } = data;
  const [close, setClose] = useState("");
  useEffect(() => {
    function updateSize() {
      setClose(window.innerWidth > 1240 ? "" : close);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return (
    <div className="DashBoard-Conatiner">
      <div className="header">
        <Header setClose={setClose} close={close} />
      </div>
      <div className={`sidebarparent ${close}`} style={{ width: "265px" }}>
        <div className={`sideBar ${close}`}>
          <SideBar setClose={setClose} />
        </div>
      </div>
      <div className="countryTable">
        <CountriesTable />
      </div>
      <div className="infoCard">
        <InfoCard
          variant="dark"
          h1="Bookings"
          p1="281"
          h2="+55%"
          p2="than lask week"
        />
        <InfoCard
          variant="primary"
          h1="Today's Users"
          p1="2,300"
          h2="+3%"
          p2="than last month"
        />
        <InfoCard
          variant="success"
          h1="Revenue"
          p1="34k"
          h2="+1%"
          p2="than yesterday"
        />
        <InfoCard
          variant="pink"
          h1="Followers"
          p1="+91"
          h2="+55%"
          p2="Just updated"
        />
      </div>
      <div className="locationCard">
        <LocationCard
          img={Img1}
          name="Cozy 5 Stars Apartment"
          description={`The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.`}
          price="899/night"
          location="Barcelona, Spain"
        />
        <LocationCard
          img={Img2}
          name="Office Studio"
          description={`The place is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the night life in London, UK.`}
          price="1.119/night"
          location="London, UK"
        />
        <LocationCard
          img={Img3}
          name="Beautiful Castle"
          description={`The place is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Milan.`}
          price="459/night"
          location="Milan, Italy"
        />
      </div>
      <div className="graphCard">
        <GraphCard
          variant="primary"
          h1="Website Views"
          h2=""
          p1="Last Campaign Performance"
          time="campaign sent 2 days ago"
          chart=""
        />
        <GraphCard
          variant="success"
          h1="Daily Sales"
          h2="(+15%)"
          p1="increase in today sales."
          time="updated 4 min ago"
          chart={sales}
        />
        <GraphCard
          variant="dark"
          h1="Completed Tasks"
          h2=""
          p1="Last Campaign Performance"
          time="just updated"
          chart={tasks}
        />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
