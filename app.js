const fetchCat = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { id: 2, ownerID: 1, name: "Black" },
        { id: 4, ownerID: 2, name: "While" },
        { id: 6, ownerID: 3, name: "Yellow" },
        { id: 8, ownerID: 4, name: "Blue" },
      ]);
    }, 2000);
  });
};

const fetchOwner = (catId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
};

const fetchOwners = (catIDs) => {
  const owners = [];
  for (const id of catIDs) {
    const cat = await fetchCat(id);
    const owner = await fetchOwner(cat.ownerID);
    owners.push(owner);
  }
  return owners;
};
