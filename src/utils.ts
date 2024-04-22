export const uniqueId = (): string => {
  // Generate a random number and convert it to a hexadecimal string
  const randomNumber = Math.floor(Math.random() * 1000000);
  const randomString = randomNumber.toString(16);

  // Get the current timestamp and convert it to a hexadecimal string
  const timestamp = Date.now().toString(16);

  // Concatenate the timestamp and random string to create a unique ID
  const uniqueId = `novice-react-button-${timestamp}${randomString}`;

  return uniqueId;
};
