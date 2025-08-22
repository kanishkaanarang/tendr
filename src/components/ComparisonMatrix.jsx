// src/components/ComparisonMatrix.jsx
import React from "react";

const Row = ({ label, a, b }) => {
  if (!a && !b) return null; // <-- hide row if both are null/empty
  return (
    <tr className="border-b">
      <th className="text-left font-medium py-3 pr-4 text-gray-600">{label}</th>
      <td className="py-3 pr-4">{a ?? "—"}</td>
      <td className="py-3">{b ?? "—"}</td>
    </tr>
  );
};

const fmtINR = (p) =>
  p == null || p === "" ? null : `₹${Number(p).toLocaleString("en-IN")}`;

const join = (v, sep = ", ") =>
  Array.isArray(v) && v.length ? v.join(sep) : null;

/* ---------- helpers mapped to YOUR schema ---------- */
const getLocation = (v) => {
  if (v?.location) return v.location;
  if (Array.isArray(v?.locations) && v.locations.length)
    return join(v.locations);
  const { street, city, state } = v?.address || {};
  const parts = [street, city, state].filter(Boolean);
  return parts.length ? parts.join(", ") : null;
};

const getStartingPrice = (v) =>
  fmtINR(v?.startingPrice ?? v?.minPrice ?? v?.price ?? null);

const getRating = (v) =>
  v?.rating ?? v?.avgRating ?? v?.avgReviewScore ?? null;

const getReviews = (v) =>
  v?.reviewCount ??
  v?.number_of_reviews ??
  v?.totalReviews ??
  (Array.isArray(v?.clientReferences) ? v.clientReferences.length : null);

const getVerified = (v) => (v?.isVerified ?? v?.phoneVerified ? "Yes" : "No");

const getServices = (v) => {
  const svc = v?.services ?? v?.serviceCategories;
  if (Array.isArray(svc) && svc.length) return join(svc);
  return v?.serviceType ?? null;
};

const getThemes = (v) => join(v?.themes);
const getCoverage = (v) => join(v?.venueCoverage);
const getPortfolioCount = (v) =>
  Array.isArray(v?.portfolioPhotos) ? v.portfolioPhotos.length : null;
const getResponseTime = (v) => v?.responseTime ?? v?.avgResponseTime ?? null;
const getName = (v) => v?.name ?? v?.businessName ?? "Vendor";

const getTeamSize = (v) => v?.teamSize ?? null;
const getEvents = (v) => v?.totalEventsCompleted ?? null;
const getExperience = (v) => v?.yearsOfExperience ?? null;
/* --------------------------------------------------- */

const ComparisonMatrix = ({ vendors = [] }) => {
  const [A, B] = vendors;

  const va = {
    name: getName(A),
    location: getLocation(A),
    price: getStartingPrice(A) ?? "N/A",
    rating: getRating(A),
    reviews: getReviews(A),
    type: A?.serviceType,
    verified: getVerified(A),
    services: getServices(A),
    themes: getThemes(A),
    coverage: getCoverage(A),
    portfolioCount: getPortfolioCount(A),
    responseTime: getResponseTime(A),
    teamSize: getTeamSize(A),
    events: getEvents(A),
    experience: getExperience(A),
  };

  const vb = {
    name: getName(B),
    location: getLocation(B),
    price: getStartingPrice(B) ?? "N/A",
    rating: getRating(B),
    reviews: getReviews(B),
    type: B?.serviceType,
    verified: getVerified(B),
    services: getServices(B),
    themes: getThemes(B),
    coverage: getCoverage(B),
    portfolioCount: getPortfolioCount(B),
    responseTime: getResponseTime(B),
    teamSize: getTeamSize(B),
    events: getEvents(B),
    experience: getExperience(B),
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm">
        <thead>
          <tr className="border-b">
            <th className="text-left py-2 pr-4 text-gray-400">Feature</th>
            <th className="text-left py-2 pr-4 font-semibold">{va.name}</th>
            <th className="text-left py-2 font-semibold">{vb.name}</th>
          </tr>
        </thead>
        <tbody>
          <Row label="Location" a={va.location} b={vb.location} />
          <Row label="Starting Price" a={va.price} b={vb.price} />
          <Row label="Rating" a={va.rating} b={vb.rating} />
          <Row label="Reviews" a={va.reviews} b={vb.reviews} />
          <Row label="Service Type" a={va.type} b={vb.type} />
          <Row label="Verified" a={va.verified} b={vb.verified} />
          <Row label="Services" a={va.services} b={vb.services} />
          <Row label="Themes" a={va.themes} b={vb.themes} />
          <Row label="Venue Coverage" a={va.coverage} b={vb.coverage} />
          <Row label="Portfolio Photos" a={va.portfolioCount} b={vb.portfolioCount} />
          <Row label="Typical Response Time" a={va.responseTime} b={vb.responseTime} />
          <Row label="Team Size" a={va.teamSize} b={vb.teamSize} />
          <Row label="Total Events Covered" a={va.events} b={vb.events} />
          <Row label="Years of Experience" a={va.experience} b={vb.experience} />
        </tbody>
      </table>

      <div className="mt-5 flex gap-3">
        {A?._id && (
          <a href={`/vendor/${A._id}`} className="px-4 py-2 rounded-lg border">
            View {va.name}
          </a>
        )}
        {B?._id && (
          <a href={`/vendor/${B._id}`} className="px-4 py-2 rounded-lg border">
            View {vb.name}
          </a>
        )}
      </div>
    </div>
  );
};

export default ComparisonMatrix;
