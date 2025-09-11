import { useNavigate, useLocation } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

import ListingsNav from "../../components/ListingsNav";
import PrimaryFilters_ListingPage from "../../components/PrimaryFilters_ListingPage";
import SecondaryFilters_ListingPage from "../../components/SecondaryFilters_ListingPage";
import VendorList_ListingPage from "../../components/VendorList_ListingPage";
import { useEffect, useState } from "react";
import { getVendors } from "../../apis/vendorApi";
import CompareBar from "../../components/CompareBar";
import CompareModal from "../../components/CompareModal";
import Footer from "../../components/Footer"; // ✅ Import reusable footer

const VendorList = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const {
    eventType = "",
    serviceType = "",
    date = "",
    locationType = "",
    guestCount = 0,
    vendors = [],
    pagination = {},
  } = location.state || {};

  const [eventTypeState, setEventTypeState] = useState(eventType || "");
  const [serviceTypeState, setServiceTypeState] = useState(serviceType || "");
  const [locationTypeState, setLocationTypeState] = useState(locationType || "");
  const [dateState, setDateState] = useState(date || "");
  const [guestCountState, setGuestCountState] = useState(guestCount || 0);

  const [vendorList, setVendorList] = useState(vendors);
  const [paginationInfo, setPaginationInfo] = useState(pagination);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [secondaryFilters, setSecondaryFilters] = useState({});
  const [sortBy, setSortBy] = useState("rankingScore");
  const [sortOrder, setSortOrder] = useState("desc");

  // === Compare feature state (NEW) ===
  const [compareSelected, setCompareSelected] = useState([]); // max 2 vendors
  const [isCompareOpen, setIsCompareOpen] = useState(false);
  const toggleCompare = (vendor) => {
    setCompareSelected((prev) => {
      const exists = prev.find((v) => v._id === vendor._id);
      if (exists) return prev.filter((v) => v._id !== vendor._id);
      if (prev.length >= 2) return prev; // optionally show toast
      return [...prev, vendor];
    });
  };
  const removeFromCompare = (id) =>
    setCompareSelected((prev) => prev.filter((v) => v._id !== id));
  const clearCompare = () => setCompareSelected([]);

  useEffect(() => {
    if (!locationTypeState || !serviceTypeState) return;

    setIsLoading(true);
    const filters = {
      location: locationTypeState,
      serviceTypes: [serviceTypeState],
      sortBy,
      sortOrder,
      page: 1,
      limit: 10,
      serviceFilters: secondaryFilters,
    };

    getVendors(filters)
      .then((data) => {
        setVendorList(data.vendors || []);
        setPaginationInfo(data.pagination || {});
        setCurrentPage(1);
      })
      .catch((err) => console.error("Error fetching vendors:", err))
      .finally(() => setIsLoading(false));
  }, [sortBy, sortOrder, secondaryFilters, locationTypeState, serviceTypeState]);

  const handleShowMore = () => {
    const nextPage = currentPage + 1;
    setIsLoading(true);

    const filters = {
      location: locationTypeState,
      serviceTypes: [serviceTypeState],
      sortBy,
      sortOrder,
      page: nextPage,
      limit: 10,
      serviceFilters: secondaryFilters,
    };

    getVendors(filters)
      .then((data) => {
        setVendorList((prev) => [...prev, ...(data.vendors || [])]);
        setPaginationInfo(data.pagination || {});
        setCurrentPage(nextPage);
      })
      .catch((err) => console.error("Error fetching more vendors:", err))
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <ListingsNav />

      <div className="flex flex-col lg:flex-row">
        {/* Sidebar - Filters */}
        <div className="w-full lg:w-1/4 bg-white shadow-lg lg:shadow-none lg:border-r border-gray-200">
          <div className="p-4 lg:p-6">
            <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 lg:mb-6">
              Filters
            </h2>

            {/* Primary Filters */}
            <div className="mb-6">
              <h3 className="text-sm sm:text-base font-semibold text-gray-700 mb-3">
                Primary Filters
              </h3>
              <PrimaryFilters_ListingPage
                eventType={eventTypeState}
                setEventType={setEventTypeState}
                serviceType={serviceTypeState}
                setServiceType={setServiceTypeState}
                locationType={locationTypeState}
                setLocationType={setLocationTypeState}
                date={dateState}
                setDate={setDateState}
                guestCount={guestCountState}
                setGuestCount={setGuestCountState}
                onSearch={() => {
                  setIsLoading(true);
                  setCurrentPage(1);
                  const filters = {
                    location: locationTypeState,
                    serviceTypes: [serviceTypeState],
                    sortBy,
                    sortOrder,
                    page: 1,
                    limit: 10,
                    serviceFilters: secondaryFilters,
                  };

                  getVendors(filters)
                    .then((data) => {
                      setVendorList(data.vendors);
                      setPaginationInfo(data.pagination);
                    })
                    .catch((err) => console.error("Error fetching vendors:", err))
                    .finally(() => setIsLoading(false));
                }}
              />
            </div>

            {/* Secondary Filters */}
            <div className="mb-6">
              <h3 className="text-sm sm:text-base font-semibold text-gray-700 mb-3">
                Additional Filters
              </h3>
              <SecondaryFilters_ListingPage onFiltersChange={setSecondaryFilters} />
            </div>

            {/* Apply Filters Button */}
            <button
              onClick={() => {
                setIsLoading(true);
                setCurrentPage(1);
                const filters = {
                  location: locationTypeState,
                  serviceTypes: [serviceTypeState],
                  sortBy,
                  sortOrder,
                  page: 1,
                  limit: 10,
                  serviceFilters: secondaryFilters,
                };

                getVendors(filters)
                  .then((data) => {
                    setVendorList(data.vendors);
                    setPaginationInfo(data.pagination);
                  })
                  .catch((err) => console.error("Error fetching vendors:", err))
                  .finally(() => setIsLoading(false));
              }}
              className="w-full bg-[#CCAB4A] text-white py-2 sm:py-3 px-4 rounded-lg font-semibold hover:bg-[#ab8f39] transition-colors duration-200 text-sm sm:text-base"
            >
              Apply Filters
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4 lg:p-6">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-2">
              {serviceTypeState || "All"} Vendors
            </h1>
            <p className="text-sm sm:text-base text-gray-600 ">
              {vendorList.length} vendors found in {locationTypeState || "all locations"}
            </p>
          </div>

          {/* Vendor List */}
          <VendorList_ListingPage
            eventType={eventTypeState}
            serviceType={serviceTypeState}
            date={dateState}
            locationType={locationTypeState}
            guestCount={guestCountState}
            vendors={vendorList}
            paginationInfo={paginationInfo}
            handleShowMore={handleShowMore}
            isLoading={isLoading}
            sortBy={sortBy}
            sortOrder={sortOrder}
            setSortBy={setSortBy}
            setSortOrder={setSortOrder}
            // NEW props
            compareSelected={compareSelected}
            onToggleCompare={toggleCompare}
          />
          

          {/* Pagination */}
          {paginationInfo && paginationInfo.totalPages > 1 && (
            <div className="mt-8 flex justify-center">
              <div className="flex space-x-2">
                <button
                  onClick={() => handleShowMore()}
                  disabled={isLoading}
                  className="px-3 py-2 text-sm sm:text-base bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Previous
                </button>

                {Array.from(
                  { length: Math.min(5, paginationInfo.totalPages) },
                  (_, i) => {
                    const pageNum = i + 1;
                    return (
                      <button
                        key={pageNum}
                        onClick={() => handleShowMore()}
                        className={`px-3 py-2 text-sm sm:text-base rounded-lg ${
                          currentPage === pageNum
                            ? "bg-[#CCAB4A] text-white"
                            : "bg-white border border-gray-300 hover:bg-gray-50"
                        }`}
                      >
                        {pageNum}
                      </button>
                    );
                  }
                )}

                <button
                  onClick={() => handleShowMore()}
                  disabled={isLoading}
                  className="px-3 py-2 text-sm sm:text-base bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* === Compare Bar & Modal (NEW) === */}
      <CompareBar
        selected={compareSelected}
        onClear={clearCompare}
        onOpen={() => setIsCompareOpen(true)}
        onRemove={removeFromCompare}
      />
      <CompareModal
        open={isCompareOpen}
        onClose={() => setIsCompareOpen(false)}
        vendors={compareSelected}
      />

      {/* Footer (unchanged) */}
      
      <Footer />
    </div>
  );
};

export default VendorList;
