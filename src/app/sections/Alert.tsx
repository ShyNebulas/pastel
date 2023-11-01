'use client'

import { useState } from 'react'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import Close from '../../assets/close'
import Info from '../../assets/info'

import JSON from '../../../.config/.config.json'

export default function Alert() {
    const [show, setShow] = useState(true)

    function handleClose() {
        setShow(false)
    }

    if(show && !JSON['alert']['ignore']) {
        return (
            <section className="flex items-center p-4 m-4 rounded-lg bg-orange border-2 border-orange-dark" role="alert">
                <Info className="flex-shrink-0 w-4 h-4 text-gray-700"/>
                <span className="sr-only">Info</span>
                <div className="text-gray-700 font-bold text-gray-dark ml-3">
                    <Markdown remarkPlugins={[[remarkGfm, {singleTilde: false}]]}>
                        {JSON['alert']['content']}
                    </Markdown>
                </div>
                <button type="button" className="ml-auto -mx-1.5 -my-1.5 bg-blue-50 text-blue-500 rounded-lg focus:ring-2 focus:ring-blue-400 p-1.5 hover:bg-blue-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700" onClick={handleClose} aria-label="Close">
                    <span className="sr-only">Close</span>
                    <Close className="w-3 h-3" />
                </button>
            </section>
        )
    }
}