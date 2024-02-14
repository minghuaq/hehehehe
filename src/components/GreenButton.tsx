"use client";

import Link from "next/link";

export function GreenButton(props: { size: number }) {
  console.log(props.size);
  const fontScale = 1 + props.size;
  return (
    <Link
      className={
        "flex flex-col justify-center py-2 px-4 content-center bg-green-500 hover:bg-green-700 text-white font-bold rounded"
      }
      style={{
        fontSize: `${fontScale}em`,
      }}
      href={"/yay"}
    >
      YES
    </Link>
  );
}
