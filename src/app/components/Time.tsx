'use client'

import { useState } from 'react'

import Badge from './Badge'

export default function Time({ className }: { className: string }) {
    setInterval(updateTime, 1000)
    const now = new Date().toLocaleTimeString()
    const [time, setTime] = useState(now);

    function updateTime() {
        const newNow = new Date().toLocaleTimeString()
        setTime(newNow)
    }

    return (
        <Badge className={`${className} bg-indigo border-indigo-dark text-white`}>
            <span>{time}</span>
        </Badge>
    )
}