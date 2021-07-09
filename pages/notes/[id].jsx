import React from "react"
import { useRouter } from "next/router"

const Page = ({ note }) => {
    console.log(note)

    return (
        <div>
            Note: {note.title}
        </div>
    )
}

export default Page

export async function getServerSideProps({params, req, res}) {
    const response = await fetch(`http://localhost:3000/api/note/${params.id}`)
  
    if (!response.ok) {
      res.writeHead(302, { Location: '/notes' })
      res.end()
      return {props: {}}
    }
  
    const {data} = await response.json()
    
    
    if (data) {
      return {
        props: {note: data}
      }
    }
  }