import React from 'react'
import Link from 'next/link'

function page() {

  const vegis = [
    { id: 1, veginame: "Carrot" },
    { id: 2, veginame: "Potato" },
    { id: 3, veginame: "Tomato" },
    { id: 4, veginame: "Onion" }
  ]
  return (
    <>
    <div>
      Vegis page
    </div>

    <ul>
      {vegis.map((vegi) => {
        return(
          <li> <Link href ={`/products/vegis/${vegi.id}`}>{vegi.veginame}</Link>
          </li>
        )
      })}
      </ul></>
    
  )
}

export default page
