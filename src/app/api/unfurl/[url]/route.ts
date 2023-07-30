import { unfurl } from "unfurl.js";

import { NextRequest, NextResponse } from "next/server";

const CACHE_RESULT_SECONDS = 60 * 60 * 24;

export async function GET(
  req: NextRequest,
  route: { params: { url: string } }
) {
  const url = route.params.url;

  if (!url || typeof url !== "string") {
    return NextResponse.json(
      {
        error: "A valid URL string is required",
      },
      {
        status: 400,
      }
    );
  }

  return unfurl(url)
    .then((unfurlResponse: any) => {
      return NextResponse.json(
        {
          title: unfurlResponse.title ?? null,
          description: unfurlResponse.description ?? null,
          favicon: unfurlResponse.favicon ?? null,
          imageSrc: unfurlResponse.open_graph?.images?.[0]?.url ?? null,
        },
        {
          headers: {
            "Cache-Control": `public, max-age=${CACHE_RESULT_SECONDS}`,
          },
        }
      );
    })
    .catch((error: any) => {
      if (error?.code === "ENOTFOUND") {
        return NextResponse.json(
          {
            error: "Not found",
          },
          {
            status: 404,
          }
        );
      }
      console.error(error);
      throw new Error(error);
    });
}
