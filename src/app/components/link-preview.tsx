import Image from "next/image";
import React from "react";
import useSWR from "swr";

interface Props {
  url: string;
  scrollToBottom: () => void;
}

const fetcher = (url: string) =>
  fetch(url).then((res) => {
    return res.json();
  });

function LinkPreview({ url, scrollToBottom }: Props) {
  const encoded = encodeURIComponent(url);
  const { data, error, isLoading } = useSWR<LinkPreview>(
    `/api/unfurl/${encoded}`,
    fetcher
  );

  const onRefChange = React.useCallback(
    (node: any) => {
      if (!!node && !isLoading) {
        setTimeout(() => {
          scrollToBottom();
        }, 50);
      }
    },
    [isLoading, scrollToBottom]
  );

  if (isLoading || error) {
    return null;
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="chat-box mt-4 md:mt-6 rounded-tr-lg no-underline"
      ref={onRefChange}
    >
      <div className="flex gap-4 flex-col-reverse sm:flex-row">
        {data?.imageSrc && (
          <Image
            src={data?.imageSrc}
            alt="Website preview"
            width={150}
            height={150}
            style={{ objectFit: "cover" }}
            className="rounded-xl w-full max-h-[200px] sm:w-[250px]"
            priority
          />
        )}
        <div className="flex flex-col gap-2.5">
          <div className="flex gap-2 items-start">
            {data?.favicon && (
              <Image
                src={data?.favicon}
                alt="Website icon"
                width={20}
                height={20}
                priority
              />
            )}
            <span className="text-sm [overflow-wrap:anywhere]">{url}</span>
          </div>
          {data?.title && (
            <p className="[overflow-wrap:anywhere] font-bold underline">
              {data?.title}
            </p>
          )}
          {data?.description && (
            <p className="[overflow-wrap:anywhere] text-sm">
              {data?.description}
            </p>
          )}
        </div>
      </div>
    </a>
  );
}

export default LinkPreview;
