import React from "react"
import Link from "next/link"

const Page = () => {
  return (
    <div>
      <h1>Index Page</h1>
      <Link href="/notes">
        <a>Go to notes</a>
      </Link>
    </div>
  )
}

export default Page

