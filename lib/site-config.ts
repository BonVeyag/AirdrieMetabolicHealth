import { CLASS_TIME_LABEL } from "@/lib/class-program";

const clinicAddressLine1 = "836 1 Ave NW #201, Airdrie";
const clinicAddressLine2 = "AB T4B 0V2";

export const siteConfig = {
  name: "Airdrie Metabolic Health",
  description:
    "Physician-led weight loss and metabolic health support in Airdrie, Alberta.",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  clinic: {
    name: "One Health Associate Medical",
    addressLine1: clinicAddressLine1,
    addressLine2: clinicAddressLine2,
    address: `${clinicAddressLine1}, ${clinicAddressLine2}`,
    phone: "(403) 948-6422",
    googleReviews: "3.2 · 119 Google reviews",
    type: "Medical clinic in Airdrie, Alberta",
    bookingUrl: "https://example.com/book-consult",
    classLocation: "Zoom (recurring class link)",
    classSchedule: [
      {
        day: "Tuesday",
        time: CLASS_TIME_LABEL,
      },
    ],
    classCapacityMessage:
      "Registrations are tracked per class date and shared with admin before and after each class.",
  },
  community: {
    facebookPageUrl:
      "https://www.facebook.com/people/Airdrie-Metabolic-Health/61585687289863/",
    facebookDiscussionGroupUrl: "https://www.facebook.com/groups/918236777602880",
  },
  navigation: [
    { href: "/", label: "Home" },
    { href: "/book", label: "Booking" },
    { href: "/class", label: "Weekly Classes" },
    { href: "/community", label: "Community" },
    { href: "/start", label: "Tools" },
    { href: "/resources", label: "Resources" },
    { href: "/about-dr-rajat-thapa", label: "About" },
  ],
};

export const medicalDisclaimerSummary =
  "This website is for education only and does not replace personalized medical assessment, diagnosis, or treatment.";
