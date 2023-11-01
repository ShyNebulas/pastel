'use client'

import { useState } from 'react' 

import ArrowUp from '../../assets/arrowUp'
import ArrowDown from '../../assets/arrowDown'

export default function Item({ title, body, top = false }: { title: string, body: JSX.Element, top: boolean }) {
    const [show, setShow] = useState(false)

    return (
        <>
            <h2 
                id="accordion-collapse-header" 
                className={`bg-cambridge border-2 border-cambridge-dark ${top ? 'rounded-t-xl' : 'border-t-0'} ${top && show ? 'border-b-0' : ''}`}>
                    <button 
                        className="flex items-center justify-between w-full p-5 font-medium text-left" 
                        onClick={() => setShow(!show)}
                        type="button"
                    >
                        <h2 className="text-2xl font-extrabold text-white">{title}</h2>
                        {show ? (
                                <ArrowDown className="w-8 h-8 text-white p-1" />
                            ) : (
                                <ArrowUp className="w-8 h-8 text-white p-1" />
                            )
                        }
                    </button>
            </h2>
            <div id="accordion-collapse-body" className={!show ? 'hidden' : ''} aria-labelledby="accordion-collapse-heading-1">
                <div className={`p-5 border-2 border-cambridge-dark bg-cambridge-light text-white ${!top ? 'border-t-0' : ''}`}>
                    <span className="mb-2 text-gray-500 dark:text-gray-400">{body}</span>
                </div>
            </div>
        </>
    )
}