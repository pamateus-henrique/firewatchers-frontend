export function formatData(data) {
  const formattedData = data.map((field) => ({
    label: field.name,
    value: field.id,
  }));
  return formattedData;
}
