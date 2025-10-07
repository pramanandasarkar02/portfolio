import Link from 'next/link'
import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className='h-10 w-full flex bg-slate-800 items-center justify-between px-10 text-slate-100'>
        <h1 className='font-bold text-xl'>Pramananda Sarkar</h1>
        <ul className='flex gap-10'>
                <li>
                    <Link href="./" >
                    Home
                    </Link>
                </li>
                <li>
                    <Link href="./" >
                    Resume
                    </Link>
                </li>
                <li>
                    <Link href="./" >
                    Experiences
                    </Link>
                </li>
                <li>
                    <Link href="./" >
                    Skills
                    </Link>
                </li>
                <li>
                    <Link href="./" >
                    Projects
                    </Link>
                </li>
                <li>
                    <Link href="./" >
                    Researchs
                    </Link>
                </li>
                <li>
                    <Link href="./" >
                    Contact
                    </Link>
                </li>
                
                
            </ul>
    </div>
  )
}

export default Navbar