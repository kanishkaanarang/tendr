import React, { useState } from "react";
import ServiceSpecificFields from "./ServiceSpecificFields";

export default function VendorRegistration() {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    phoneNumber: "",
    address: "",
    gstNumber: "",
    teamSize: "",
    experience: "",
    totalEvents: "",
    concurrentEvents: "",
    service: "",
    customService: "",
    serviceFilters: {},
    accountHolder: "",
    bankName: "",
    accountNumber: "",
    ifscCode: "",
    upiId: "",
    clientReferences: "",
    governmentId: "",
    portfolioFiles: [],
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData((prev) => ({ ...prev, [name]: Array.from(files) }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleServiceFiltersChange = (filters) => {
    setFormData((prev) => ({ ...prev, serviceFilters: filters }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.phoneNumber || !/^\d{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Valid 10-digit phone number required";
    }
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.location) newErrors.location = "Location is required";
    if (!formData.service) newErrors.service = "Service type is required";
    if (!formData.accountHolder) newErrors.accountHolder = "Account holder name required";
    if (!formData.bankName) newErrors.bankName = "Bank name is required";
    if (!formData.accountNumber) newErrors.accountNumber = "Account number is required";
    if (!formData.ifscCode) newErrors.ifscCode = "IFSC code is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log("Form submitted:", formData);
    alert("Vendor registered successfully!");
  };

  const inputClass =
    "border border-[#6B4226] p-3 rounded-xl text-sm text-[#6B4226] placeholder-[#A9746E] focus:outline-none focus:ring-2 focus:ring-yellow-500";

  return (
    <div className="min-h-screen bg-[#F7F4EF] flex items-center justify-center px-4 py-12">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-4xl bg-white p-6 sm:p-8 rounded-2xl shadow-md space-y-8 border border-[#6B4226]"
      >
        <h2 className="text-3xl font-bold text-[#6B4226]">Register as a Vendor</h2>

        {/* SECTION 1: PRIMARY DETAILS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { name: "name", placeholder: "Vendor Name" },
            { name: "phoneNumber", placeholder: "Phone Number" },
            { name: "location", placeholder: "Locations You Serve" },
            { name: "address", placeholder: "Full Address" },
            { name: "gstNumber", placeholder: "GST Number" },
            { name: "teamSize", placeholder: "Team Size" },
            { name: "experience", placeholder: "Years of Experience" },
            { name: "totalEvents", placeholder: "Total Events Completed" },
            { name: "concurrentEvents", placeholder: "Concurrent Events You Can Handle" },
            { name: "clientReferences", placeholder: "Past Client References" },
            { name: "governmentId", placeholder: "Govt ID (Aadhaar, PAN)" },
          ].map(({ name, placeholder }, i) => (
            <div key={i}>
              <input
                name={name}
                placeholder={placeholder}
                value={formData[name]}
                onChange={handleChange}
                className={inputClass + " w-full"}
              />
              {errors[name] && <p className="text-red-500 text-xs mt-1">{errors[name]}</p>}
            </div>
          ))}
        </div>

        {/* SECTION 4: BANK DETAILS */}
        <div>
          <h3 className="text-xl font-semibold text-[#6B4226] mb-4">Bank Details</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { name: "accountHolder", placeholder: "Account Holder Name" },
              { name: "bankName", placeholder: "Bank Name" },
              { name: "accountNumber", placeholder: "Account Number" },
              { name: "ifscCode", placeholder: "IFSC Code" },
              { name: "upiId", placeholder: "UPI ID (Optional)" },
            ].map(({ name, placeholder }, i) => (
              <div key={i}>
                <input
                  name={name}
                  placeholder={placeholder}
                  value={formData[name]}
                  onChange={handleChange}
                  className={inputClass + " w-full"}
                />
                {errors[name] && <p className="text-red-500 text-xs mt-1">{errors[name]}</p>}
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 5: PORTFOLIO FILE UPLOAD */}
        <div>
          <label className="block mb-2 font-medium text-[#6B4226]">Upload Portfolio Files (Images, Videos)</label>
          <input
            type="file"
            name="portfolioFiles"
            multiple
            accept="image/*,video/*"
            onChange={handleChange}
            className="w-full border border-[#6B4226] rounded-xl p-2 bg-white text-[#6B4226]"
          />
          {formData.portfolioFiles.length > 0 && (
            <p className="text-sm mt-2 text-[#6B4226]">
              {formData.portfolioFiles.length} file(s) selected.
            </p>
          )}
        </div>
                {/* SECTION 2: SERVICE SELECTION */}
        <div>
          <label className="block mb-2 text-[#6B4226] font-medium">Service Type</label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className={inputClass + " w-full"}
          >
            <option value="">Select Service</option>
            <option value="caterer">Caterer</option>
            <option value="dj">DJ</option>
            <option value="decorator">Decorator</option>
            <option value="photographer">Photographer</option>
            <option value="other">Other</option>
          </select>
          {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service}</p>}
        </div>

        {formData.service === "other" && (
          <div>
            <input
              name="customService"
              placeholder="Specify your Service"
              value={formData.customService}
              onChange={handleChange}
              className={inputClass + " w-full"}
            />
          </div>
        )}

        {/* SECTION 3: DYNAMIC SERVICE FIELDS */}
        {formData.service && (
          <ServiceSpecificFields
            service={formData.service}
            onChange={handleServiceFiltersChange}
            initialFilters={formData.serviceFilters}
          />
        )}

        {/* SUBMIT */}
        <button
          type="submit"
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-xl w-full"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
