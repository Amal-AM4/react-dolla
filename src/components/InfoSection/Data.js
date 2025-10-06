import svgOne from "../../images/svg-1.svg";
import svgTwo from "../../images/svg-2.svg";
import svgThree from "../../images/svg-3.svg";

export const homeObjOne = {
  id: "about",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "Premium Bank",
  headLine: "Unlimited Transactions with zero fees",
  description:
    "Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.",
  buttonLabel: "Get started",
  imgStart: false,
  img: svgOne,
  alt: "Car",
  dark: true,
  primary: true,
  darkText: false,
};

export const homeObjTwo = {
  id: "discover",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Unlimited Access",
  headLine: "Seamless Transactions with No Hidden Fees",
  description:
    "Experience our exclusive app and send unlimited transactions without worrying about any charges or fees.",
  buttonLabel: "Learn More",
  imgStart: true,
  img: svgTwo,
  alt: "Piggybank",
  dark: false,
  primary: false,
  darkText: true,
};

export const homeObjThree = {
  id: "signup",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Join our team",
  headLine: "Move Money Without Limits",
  description:
    "Experience hassle-free, unlimited transactions with our easy-to-use mobile app.",
  buttonLabel: "Get the App",
  imgStart: false,
  img: svgThree,
  alt: "Chart",
  dark: false,
  primary: false,
  darkText: true,
};
