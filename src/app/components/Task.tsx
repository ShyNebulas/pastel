'use client'

import CountDown from './Countdown'

export default function Task({ title, icon, due }: { title: string, icon: JSX.Element, due: Date }) {
    return (
        <div className="bg-orange border-2 border-orange-dark flex justify-between items-center p-3 rounded-lg m-1">
            <div className="flex justify-start items-center gap-2">
                {icon}
                <p className="text-gray-700 font-bold tracking-wider text-gray-dark">{title}</p>
            </div>
            <CountDown date={due} />
        </div>
    )
}

