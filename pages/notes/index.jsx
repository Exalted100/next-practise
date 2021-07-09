import React from "react"
import Link from "next/link"

const Page = () => {
  return (
    <div>
      <h1>Note Index Path</h1>
      <Link href="/notes/[id]" as={"/notes/1"}>
          <a>Note 1 Page</a>
      </Link>
    </div>
  )
}

export default Page