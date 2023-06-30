import moment from "moment";
import { type } from "@jsmini/type";
const timestampFormat = (timestamp, format) => {
  let result;
  const _timestamp = type(timestamp) == 'date' ? timestamp.getTime() : parseInt(timestamp);
  if (!_timestamp) {
    result = '-';
  } else if (format) {
    result = moment(_timestamp).format(format);
  } else {
    result = moment(_timestamp).format('YYYY-MM-DD HH:mm:ss');
  }
  return result;
};

export {
  timestampFormat,
}