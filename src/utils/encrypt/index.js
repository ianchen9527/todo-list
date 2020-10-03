const delay = (interval) => {
  return new Promise((resolve) => {
    setTimeout(resolve, interval);
  });
};

export const encrypt = async (data) => {
  await delay(500);
  return data;
};

export const decrypt = async (data) => {
  await delay(500);
  return data;
};
