import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize; // starting index of items on the page
  return _(items)
    .slice(startIndex)
    .take(pageSize)
    .value();

  // _.slice(items, startIndex) creates a new array by slicing [items] array starting from the given index
  // _.take() // taking the items from the new array for the currentPage
  // In order to use slice() and take() in chain, we'll have to convert the items array into lodash wrapper object
  // Finally we need to convert lodash wrapper object into the regular array using value() method
}
