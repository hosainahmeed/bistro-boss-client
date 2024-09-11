import { Helmet } from "react-helmet-async";
import PageBanner from "../../Home/Home/Shared/Chef-Show/PageBanner";
import bannerImage from "../../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../hooks/useMenu";
import OrderCards from "./OrderCards";
import { useParams } from "react-router-dom";
import { useState } from "react";

// Helper function to paginate
const paginate = (items, pageNumber, pageSize) => {
  const start = (pageNumber - 1) * pageSize;
  return items.slice(start, start + pageSize);
};

function Order() {
  const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex !== -1 ? initialIndex : 0);
  const [menu] = useMenu();

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Number of items per page

  const menuItemsByCategory = categories.map((cat) =>
    menu.filter((item) => item.category === cat)
  );

  const tabstyle = {
    textAlign: "center",
    marginTop: "2vw",
    borderBottom: "1px solid black",
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Order</title>
      </Helmet>
      <PageBanner
        bannerImage={bannerImage}
        heading="OUR SHOP"
        sub_heading="Would you like to try a dish?"
      ></PageBanner>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList style={tabstyle}>
          {categories.map((cat) => (
            <Tab key={cat}>{cat.toUpperCase()}</Tab>
          ))}
        </TabList>

        {menuItemsByCategory.map((items, index) => {
          const paginatedItems = paginate(items, currentPage, itemsPerPage);
          const totalPages = Math.ceil(items.length / itemsPerPage);

          return (
            <TabPanel key={index}>
              <OrderCards items={paginatedItems} />
              {/* Pagination Controls */}
              <div style={{ textAlign: "center", marginTop: "20px" }}>
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i}
                    onClick={() => handlePageChange(i + 1)}
                    style={{
                      margin: "0 5px",
                      padding: "5px 10px",
                      backgroundColor: currentPage === i + 1 ? "#000" : "#ddd",
                      color: currentPage === i + 1 ? "#fff" : "#000",
                    }}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            </TabPanel>
          );
        })}
      </Tabs>
    </div>
  );
}

export default Order;
