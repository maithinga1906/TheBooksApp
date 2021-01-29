/* eslint-disable react/react-in-jsx-scope */
import Icon from 'react-native-vector-icons/thebook-appicon';
import { Colors } from 'react-native/Libraries/NewAppScreen';
export default function rateCount(data) {
  const fields = [];
  for (let i = 0; i < data; i++) {
    fields.push(<Icon name="star" color={Colors.yellow} size={15} />);
  }
  var a = 5 - data;
  for (let j = 0; j < a; j++) {
    fields.push(<Icon name="ic-star-pre" color={Colors.yellow} size={15} />);
  }
  return fields;
}
