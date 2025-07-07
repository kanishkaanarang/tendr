import React, { useState, useEffect } from "react";

const SecondaryFilters_ListingPage = ({ onFiltersChange }) => {
  const [filters, setFilters] = useState({
    customizableMenu: false,
    veganOption: false,
    organicIngredient: false,
    kidFriendly: false,
    locallySourced: false,
    onSiteChef: false,
    waitStaff: false,
    bartenderService: false,
    uniformedStaff: false,
    multiLanguageStaff: false,
    eventCoordinator: false,
    setupCleanup: false,
    ratings: [],
  });

  useEffect(() => {
    if (typeof onFiltersChange === "function") {
      onFiltersChange(filters);
    }
  }, [filters, onFiltersChange]);

  const filterOptions = [
    { key: "customizableMenu", label: "Customizable Menu" },
    { key: "veganOption", label: "Vegan Option" },
    { key: "organicIngredient", label: "Organic Ingredient" },
    { key: "kidFriendly", label: "Kid-Friendly" },
    { key: "locallySourced", label: "Locally Sourced Produce" },
    { key: "onSiteChef", label: "On-Site Chef" },
    { key: "waitStaff", label: "Wait Staff Included" },
    { key: "bartenderService", label: "Bartender Service" },
    { key: "uniformedStaff", label: "Uniformed Staff" },
    { key: "multiLanguageStaff", label: "Multi-Language Staff" },
    { key: "eventCoordinator", label: "Event Coordinator Support" },
    { key: "setupCleanup", label: "Setup & Cleanup Included" },
  ];

  const ratingOptions = [5, 4, 3, 2, 1];

  const handleCheckboxChange = (field) => {
    setFilters((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const handleRatingChange = (rating) => {
    setFilters((prev) => ({
      ...prev,
      ratings: prev.ratings.includes(rating)
        ? prev.ratings.filter((r) => r !== rating)
        : [...prev.ratings, rating],
    }));
  };

  return (
    <div className="filter-section w-full">
      <div className="secondary_heading ml-12 mb-5 font-bold text-2xl">
        Filter Options
      </div>
      <div className="filter_checkbox ml-16 w-fit">
        <div className="flex flex-col gap-2 text-lg">
          {filterOptions.map(({ key, label }) => (
            <label key={key} className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={filters[key]}
                onChange={() => handleCheckboxChange(key)}
                className="hidden peer"
              />
              <span className="w-5 h-5 rounded-full border-2 border-gray-500 peer-checked:bg-[#CCAB4A] peer-hover:border-[#CCAB4A] transition-all duration-200"></span>
              {label}
            </label>
          ))}
        </div>
      </div>

      <div className="secondary_heading ml-12 mb-5 mt-9 font-bold text-2xl">
        Vendor Ratings
      </div>
      <div className="rating_checkbox ml-16 mb-5 w-fit">
        <div className="flex flex-col gap-2 text-lg">
          {ratingOptions.map((rating) => (
            <label
              key={rating}
              className="flex items-center gap-3 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={filters.ratings.includes(rating)}
                onChange={() => handleRatingChange(rating)}
                className="hidden peer"
              />
              <span className="w-5 h-5 rounded-full border-2 border-gray-500 peer-checked:bg-[#CCAB4A] peer-hover:border-[#CCAB4A] transition-all duration-200"></span>
              {rating} Star{rating > 1 && "s"}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecondaryFilters_ListingPage;
