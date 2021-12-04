import moment from "moment";
import "moment/locale/hu";

const getCurrentDate = () => {
  const momentObj = moment();
  return `${momentObj.format("LL")}, ${momentObj.format("dddd")}`;
};

export default getCurrentDate;
