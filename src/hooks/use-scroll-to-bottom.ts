import React from "react";

const useScrollToBottom = () => {
  const bottomRef = React.useRef<HTMLDivElement>(null);

  const scrollToBottom = React.useCallback(() => {
    bottomRef.current?.scrollIntoView();
  }, []);

  return { bottomRef, scrollToBottom };
};

export default useScrollToBottom;
