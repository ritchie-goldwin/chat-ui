export function checkTextMessage(text: string) {
  const re =
    /((http|https|ftp|ftps)\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?)/g;
  const matches = text.match(re);

  if (matches?.length === 0) {
    return { matches, replacedText: text };
  }

  const replacedText = text.replace(
    re,
    '<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>'
  );

  return { matches, replacedText };
}
