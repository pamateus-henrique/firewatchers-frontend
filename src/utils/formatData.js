export function formatData(data, isStatic = false) {
  if (isStatic) {
    return data.map((field) => ({
      label: field.label,
      value: field.value,
    }));
  } else {
    return data.map((field) => ({
      label: field.name,
      value: field.id,
    }));
  }
}
