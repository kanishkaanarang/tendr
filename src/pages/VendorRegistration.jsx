import { useState, useCallback } from "react";
import ServiceSpecificFields from "./ServiceSpecificFields";

export default function VendorRegistration({ prefilled = {} }) {
  const [formData, setFormData] = useState({
    name: prefilled.name || "",
    gstNumber: prefilled.gstNumber || "",
    phoneNumber: prefilled.phoneNumber || "",
    address: prefilled.address || "",
    email: prefilled.email || "",

    teamSize: "",
    experience: "",
    eventsCompleted: "",
    concurrentEvents: "",
    clientReference: "",
    governmentId: "",

    accHolderName: "",
    bankName: "",
    accNumber: "",
    ifscCode: "",
    upiId: "",

    serviceType: "",
    servicesOffered: [],
    portfolioLinks: [],
    images: [],
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      serviceType: e.target.value,
      servicesOffered: [],
    }));
  };

const handleSubServices = useCallback((subServices) => {
  setFormData((prev) => ({ ...prev, servicesOffered: subServices }));
}, []);


  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setFormData((prev) => ({
      ...prev,
      images: files.map((file) => URL.createObjectURL(file)),
    }));
  };

  const validate = () => {
    const requiredFields = [
      "name",
      "phoneNumber",
      "gstNumber",
      "address",
      "email",
      "serviceType",
    ];
    const tempErrors = {};
    requiredFields.forEach((field) => {
      if (!formData[field] || formData[field].toString().trim() === "") {
        tempErrors[field] = "Required";
      }
    });
    if (formData.phoneNumber && !/^\d{10}$/.test(formData.phoneNumber)) {
      tempErrors.phoneNumber = "Enter a valid 10-digit phone number";
    }
    if (
      formData.email &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
    ) {
      tempErrors.email = "Enter a valid email address";
    }
    return tempErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const tempErrors = validate();
    setErrors(tempErrors);
    if (Object.keys(tempErrors).length > 0) return;

    console.log("Form submitted:", formData);
    alert("Registration Submitted!");
  };

  return (
    <div className="min-h-screen bg-[#F7F4EF] p-4 md:p-10">
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow-md border border-[#6B4226] space-y-5"
      >
        <h2 className="text-xl font-bold text-[#6B4226]">
          Register as a Vendor
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          <input
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Vendor Name"
            className="w-full p-2 border border-[#6B4226] rounded-lg text-sm text-[#6B4226]"
          />
          <input
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            placeholder="Phone Number"
            className="w-full p-2 border border-[#6B4226] rounded-lg text-sm text-[#6B4226]"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <input
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            placeholder="Location You Serve"
            className="w-full p-2 border border-[#6B4226] rounded-lg text-sm text-[#6B4226]"
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email Address"
            className="w-full p-2 border border-[#6B4226] rounded-lg text-sm text-[#6B4226]"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <input
            name="gstNumber"
            value={formData.gstNumber}
            onChange={handleInputChange}
            placeholder="GST Number"
            className="w-full p-2 border border-[#6B4226] rounded-lg text-sm text-[#6B4226]"
          />
          <input
            name="teamSize"
            value={formData.teamSize}
            onChange={handleInputChange}
            placeholder="Team Size"
            className="w-full p-2 border border-[#6B4226] rounded-lg text-sm text-[#6B4226]"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <input
            name="experience"
            value={formData.experience}
            onChange={handleInputChange}
            placeholder="Years of Experience"
            className="w-full p-2 border border-[#6B4226] rounded-lg text-sm text-[#6B4226]"
          />
          <input
            name="eventsCompleted"
            value={formData.eventsCompleted}
            onChange={handleInputChange}
            placeholder="Total Events Completed"
            className="w-full p-2 border border-[#6B4226] rounded-lg text-sm text-[#6B4226]"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <input
            name="concurrentEvents"
            value={formData.concurrentEvents}
            onChange={handleInputChange}
            placeholder="Concurrent Events You Can Handle"
            className="w-full p-2 border border-[#6B4226] rounded-lg text-sm text-[#6B4226]"
          />
          <input
            name="clientReference"
            value={formData.clientReference}
            onChange={handleInputChange}
            placeholder="Past Client Reference"
            className="w-full p-2 border border-[#6B4226] rounded-lg text-sm text-[#6B4226]"
          />
        </div>

        <input
          name="governmentId"
          value={formData.governmentId}
          onChange={handleInputChange}
          placeholder="Govt. ID (Aadhar or PAN)"
          className="w-full p-2 border border-[#6B4226] rounded-lg text-sm text-[#6B4226]"
        />

        <h3 className="text-lg font-semibold text-[#6B4226] mt-4">
          Bank Details
        </h3>

        <div className="grid md:grid-cols-2 gap-4">
          <input
            name="accHolderName"
            value={formData.accHolderName}
            onChange={handleInputChange}
            placeholder="Account Holder Name"
            className="w-full p-2 border border-[#6B4226] rounded-lg text-sm text-[#6B4226]"
          />
          <input
            name="bankName"
            value={formData.bankName}
            onChange={handleInputChange}
            placeholder="Bank Name & Branch"
            className="w-full p-2 border border-[#6B4226] rounded-lg text-sm text-[#6B4226]"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <input
            name="accNumber"
            value={formData.accNumber}
            onChange={handleInputChange}
            placeholder="Account Number"
            className="w-full p-2 border border-[#6B4226] rounded-lg text-sm text-[#6B4226]"
          />
          <input
            name="ifscCode"
            value={formData.ifscCode}
            onChange={handleInputChange}
            placeholder="IFSC Code"
            className="w-full p-2 border border-[#6B4226] rounded-lg text-sm text-[#6B4226]"
          />
        </div>

        <input
          name="upiId"
          value={formData.upiId}
          onChange={handleInputChange}
          placeholder="UPI ID (Optional)"
          className="w-full p-2 border border-[#6B4226] rounded-lg text-sm text-[#6B4226]"
        />

        <div>
          <label className="block text-sm font-medium text-[#6B4226] mb-1">
            Upload Portfolio (Image/Video)
          </label>
          <input
            type="file"
            accept="image/*,video/*"
            multiple
            onChange={handleImageUpload}
            className="w-full text-sm"
          />
          <div className="grid grid-cols-3 gap-2 mt-3">
            {formData.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`preview-${i}`}
                className="w-full h-20 object-cover rounded-lg"
              />
            ))}
          </div>
        </div>

        <select
          name="serviceType"
          value={formData.serviceType}
          onChange={handleServiceChange}
          className="w-full p-2 border border-[#6B4226] rounded-lg text-sm text-[#6B4226]"
        >
          <option value="">Select Service Type</option>
          <option value="caterer">Caterer</option>
          <option value="decorator">Decorator</option>
          <option value="dj">DJ</option>
          <option value="photographer">Photographer</option>
          <option value="other">Other</option>
        </select>
        {errors.serviceType && (
          <p className="text-red-500 text-xs">{errors.serviceType}</p>
        )}

        {formData.serviceType && (
          <ServiceSpecificFields
            service={formData.serviceType}
            onChange={handleSubServices}
            initialFilters={formData.servicesOffered}
          />
        )}

        <button
          type="submit"
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded-lg text-sm"
        >
          Submit Registration
        </button>
      </form>
    </div>
  );
}
