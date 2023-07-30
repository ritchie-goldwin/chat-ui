"use client";

import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Button, ChatBox, Loader, Modal, TextInput } from "./components";
import { Header } from "./widgets";
import useMessages from "@/hooks/use-messages";
import useScrollToBottom from "@/hooks/use-scroll-to-bottom";

export default function Home() {
  const { messages, setMessages, loading } = useMessages();
  const { bottomRef, scrollToBottom } = useScrollToBottom();
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [idToBeDeleted, setIdToBeDeleted] = React.useState<string>();

  const closeModal = () => {
    setIdToBeDeleted(undefined);
  };

  const handleAddMessage = () => {
    if (!!inputRef.current?.value) {
      setMessages((prev) => [
        ...prev,
        {
          id: uuidv4(),
          text: inputRef.current?.value ?? "",
        },
      ]);
      setTimeout(() => {
        if (!!inputRef.current) {
          inputRef.current.value = "";
        }
      }, 0);
    }
  };

  const handleDeleteMessage = (id: string) => () => {
    setIdToBeDeleted(id);
  };

  const handleConfirmDeleteMessage = (id: string) => () => {
    setMessages((prev) => prev.filter((msg) => msg.id !== id));
    closeModal();
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (
    event
  ) => {
    if (event.key === "Enter") {
      handleAddMessage();
    }
  };

  React.useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  return (
    <main className="flex flex-col max-w-[864px] h-screen mx-auto p-5 border-violet-500">
      <Header />
      <div className="w-full h-full flex flex-col bg-silverSand dark:bg-[#25252A] rounded-xl p-2 md:p-4 overflow-hidden">
        <div className="flex-1 flex flex-col overflow-scroll">
          {loading ? (
            <div className="flex flex-1 justify-center items-center">
              <Loader />
            </div>
          ) : (
            messages.map((message) => {
              return (
                <ChatBox
                  key={message.id}
                  message={message}
                  handleDeleteMessage={handleDeleteMessage(message.id)}
                  scrollToBottom={scrollToBottom}
                />
              );
            })
          )}

          <div ref={bottomRef} />
        </div>

        <div className="flex bg-white dark:bg-[#0E0E10] rounded-full pl-4 pr-3 gap-2 mt-4">
          <TextInput
            ref={inputRef}
            placeholder="Type message here!"
            onKeyDown={handleKeyDown}
          />
          <Button onClick={handleAddMessage}>Send</Button>
        </div>
      </div>

      <Modal onClose={closeModal} open={!!idToBeDeleted}>
        <p className="mb-6">Are you sure you want to delete this message?</p>
        <div className="flex gap-4 justify-end">
          <Button onClick={handleConfirmDeleteMessage(idToBeDeleted ?? "")}>
            Yes
          </Button>
          <Button onClick={closeModal}>No</Button>
        </div>
      </Modal>
    </main>
  );
}
