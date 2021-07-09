import React from "react"
import Link from "next/link"

const Page = ({ notes }) => {
  return (
    <div>
      <h1>Note Index Path</h1>
      {console.log(notes)}
      {notes.map(note => (
            <div key={note.id}>
                <Link href="/notes/[id]" as={`/notes/${note.id}`}>
                    <a>{note.title} Page</a>
                </Link>
            </div>
      ))}
    </div>
  )
}

export async function getServerSideProps() {
    const res = await fetch(`http://localhost:3000/api/note/`)
    const { data } = await res.json()
  
    console.log(data)
    return {
      props: {notes: data}
    }
}

export default Page