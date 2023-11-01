'use client'

import { default as ReactCountdown } from 'react-countdown';

import Badge from '../components/Badge'

interface Renderer {
    days: number, hours: number
    minutes: number, seconds: number
    completed: boolean
}

const renderer = ({days, hours, minutes, seconds, completed}: Renderer) => {
    if(completed) {
        return <span>Due!</span>
    } else {
        if(days >= 7) {
            let weeks: number = Math.round(days / 7)
            return <span>{weeks} week{weeks > 1 ? "s" : ""}</span>
        } 
        if(days >= 1) { return <span>{days} day{days > 1 ? "s" : ""}</span> }
        if(hours > 1) { return <span>{hours} hour{hours > 1 ? "s" : ""}</span> }
        if(minutes > 1) { return <span>{minutes} minute{minutes > 1 ? "s" : ""}</span> }
        return <span>{seconds} second{seconds > 1 ? "s" : ""}</span>
    }
}   

export default function Countdown({ date }: { date : Date }) {
    return (
        <Badge className="bg-gray border-gray-dark text-white">
            <ReactCountdown 
                date={date} 
                renderer={renderer}
            />
        </Badge>
    )
}