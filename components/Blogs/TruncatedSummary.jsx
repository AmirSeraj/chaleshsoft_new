const TruncatedSummary = ({ summary, limit }) => {
  const words = summary.split(" ");
  /** take the five words */
  const firstFiveWords = words.slice(0, limit);
  /** join five words into a string */
  const truncatedSummary = firstFiveWords.join(" ");
  return (
  <>
  {truncatedSummary}
  <span className="text-lg"> .....</span>
  </>);
};

export default TruncatedSummary;
