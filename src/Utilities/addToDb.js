const getStoredReadList = () => {
  const storedListStr = localStorage.getItem("read-list");
  if (storedListStr) {
    const storedList = JSON.parse(storedListStr);
    return storedList;
  } else {
    return [];
  }
};

const addToStoredReadList = (id) => {
  const storedReadList = getStoredReadList();

  if (storedReadList.includes(id)) {
    console.log(id,'Already exists in the read list.');
  } 
  else {
    storedReadList.push(id);
    const storedReadListStr = JSON.stringify(storedReadList);
    localStorage.setItem("read-list", storedReadListStr);
  }
};


const getStoredWishList = () => {
  const storedListStr = localStorage.getItem("wish-list");
  if (storedListStr) {
    const storedList = JSON.parse(storedListStr);
    return storedList;
  } else {
    return [];
  }
};

const addToStoredWishList = (id) => {
  const storedWishList = getStoredWishList();

  if (storedWishList.includes(id)) {
    console.log(id,'Already exists in the read list.');
  } 
  else {
    storedWishList.push(id);
    const storedWishListStr = JSON.stringify(storedWishList);
    localStorage.setItem("wish-list", storedWishListStr);
  }
};

export { addToStoredReadList , addToStoredWishList , getStoredReadList , getStoredWishList };
