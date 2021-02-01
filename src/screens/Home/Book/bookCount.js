export default function bookCount(data, category) {
  var count = 0;
  data.map((item) => {
    if (item.category == category) {
      count++;
    }
  });
  return count;
}
