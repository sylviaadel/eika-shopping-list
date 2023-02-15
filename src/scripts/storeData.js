export function loadData(storageKey) {
  // const stringData = localStorage.getItem(storageKey);
  // const arrayData = stringData != "" ? JSON.parse(stringData) : [];
  // return arrayData;
  return [
    {
      id: 1,
      price: 20,
      name: "Test",
      isCompleted: false,
    },
    {
      id: 2,
      price: 300,
      name: "Chair",
      isCompleted: true,
    },
  ];
}

export function saveData(storageKey, items) {
  const data = JSON.stringify(items);

  localStorage.setItem(storageKey, data);
}
