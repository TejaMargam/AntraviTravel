// Environment-aware path utilities
export const getBasePath = () => {
  return import.meta.env.PROD ? "/AntraviTravel" : "";
};

export const getImagePath = (imagePath: string) => {
  const basePath = getBasePath();
  // Remove leading slash if present to avoid double slashes
  const cleanPath = imagePath.startsWith("/") ? imagePath.slice(1) : imagePath;
  return `${basePath}/${cleanPath}`;
};
