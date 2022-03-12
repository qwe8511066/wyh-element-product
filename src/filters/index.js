import moment from "moment";
export function timestampFormat(timestamp, format) {
  let result;
  timestamp = parseInt(timestamp);
  if (!timestamp) {
    result = '-';
  } else if (format) {
    result = moment(timestamp).format(format);
  } else {
    result = moment(timestamp).format('YYYY-MM-DD HH:mm:ss');
  }
  return result;
};