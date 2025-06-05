const BASE_URL = "http://localhost:8080";

export const signupVendorOtp = async (phoneData) => {
  try {
    const response = await fetch(`${BASE_URL}/v/signup/otp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(phoneData),
    });
    const result = await response.json();
    if (!response.ok) {
      throw new Error(result.message || "Vendor signup OTP failed");
    }
    return result;
  } catch (error) {
    throw error;
  }
};

export const loginVendor = async (credentials) => {
  try {
    const response = await fetch(`${BASE_URL}/vlogin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    const result = await response.json();
    if (!response.ok) {
      throw new Error(result.message || "Vendor login failed");
    }
    return result;
  } catch (error) {
    throw error;
  }
};

// Placeholder for other vendor APIs
export const getVendorProfile = async (vendorId, token) => {
  console.log("Get vendor profile API called");
  return { message: "Vendor profile fetch placeholder" };
};

export const updateVendorProfile = async (vendorId, updates, token) => {
  console.log("Update vendor profile API called");
  return { message: "Vendor profile update placeholder" };
};