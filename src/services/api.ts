export const fetchRestaurantData = async () => {
  const response = await fetch('/api/challenge/venue/9');
  const data = await response.json();
  return data;
};

export const fetchMenuData = async () => {
  const response = await fetch('/api/challenge/menu');
  const data = await response.json();
  return data.sections;
};
