export default async (mockResponse) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockResponse), 1000);
  });
};
