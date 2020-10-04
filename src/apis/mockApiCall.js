export default async (mockResponse) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockResponse), 500);
  });
};
