import Link from 'next/link'
import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className='h-10 w-full flex bg-slate-800 items-center justify-between px-10 text-slate-100'>
        <h1 className='font-bold text-xl'>Pramananda Sarkar</h1>
        <ul className='flex gap-10'>
                <li>
                    <Link href="./portfolio" >
                    Home
                    </Link>
                </li>
                <li>
                    <Link href="./portfolio/resume" >
                    Resume
                    </Link>
                </li>
                <li>
                    <Link href="./portfolio/experiences" >
                    Experiences
                    </Link>
                </li>
                <li>
                    <Link href="./portfolio/skills" >
                    Skills
                    </Link>
                </li>
                <li>
                    <Link href="./portfolio/projects" >
                    Projects
                    </Link>
                </li>
                <li>
                    <Link href="./portfolio/researchs" >
                    Researchs
                    </Link>
                </li>
                <li>
                    <Link href="./portfolio/contact" >
                    Contact
                    </Link>
                </li>
                
                
            </ul>
    </div>
  )
}

export default Navbar