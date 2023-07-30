import { DeleteSVG } from "@/assets/svg";
import React from "react";
import parse from "html-react-parser";
import { sanitize } from "isomorphic-dompurify";
import { checkTextMessage } from "@/utils/string";
import LinkPreview from "./link-preview";

interface Props {
  message: Message;
  handleDeleteMessage: () => void;
  scrollToBottom: () => void;
}

function ChatBox(props: Props) {
  const { message, handleDeleteMessage, scrollToBottom } = props;

  const { matches, replacedText } = React.useMemo(
    () => checkTextMessage(message.text),
    [message.text]
  );

  const renderedText = React.useMemo(() => {
    return parse(sanitize(replacedText, { ADD_ATTR: ["target"] }));
  }, [replacedText]);

  return (
    <div className="group flex flex-col rounded-xl p-2 md:p-3 hover:bg-[#1a1a1d36] dark:hover:bg-[#1a1a1d76]">
      <div className="chat-box">
        <span className="[overflow-wrap:anywhere]">{renderedText}</span>
        <div
          role="button"
          onClick={handleDeleteMessage}
          className="absolute -top-2 -right-2 cursor-pointer bg-white p-[2px] rounded-md invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300"
        >
          <DeleteSVG />
        </div>
      </div>

      {matches?.map((url, index) => {
        return (
          <LinkPreview key={index} url={url} scrollToBottom={scrollToBottom} />
        );
      })}
    </div>
  );
}

export default ChatBox;
