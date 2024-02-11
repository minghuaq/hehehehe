"use client"

import Link from 'next/link'

export function GreenButton(props: { size: number }) {
  console.log(props.size);
  
  return (
    <Link
      className={
        "bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        + ` size-${props.size}`
      }
      href={'/yay'}
    >
      YES
    </Link>
  );
}
