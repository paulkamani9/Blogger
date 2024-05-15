export default function getFormattedDate(dateString: string): string {
  const dateObject = new Date(dateString);

  // Check if the dateObject is a valid Date object
  if (isNaN(dateObject.getTime())) {
    // If the dateObject is invalid, return an error message or handle it as needed
    return "Invalid date";
  }

  // Create a new Intl.DateTimeFormat object with "en-US" locale and dateStyle "long"
  const formatter = new Intl.DateTimeFormat("en-US", { dateStyle: "long" });

  // Use the formatter to format the dateObject and return the formatted date string
  return formatter.format(dateObject);
}
