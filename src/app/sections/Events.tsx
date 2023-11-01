import Event from '../components/Event'

import JSON from '../../data/events.json'

export default function Events() {
    return (
        <section className="bg-indigo border-2 border-indigo-dark rounded-lg">
           <span className="flex flex-row justify-end align-middle w-full">
                <span className="bg-almond rounded-full w-5 h-5 mr-3 mt-3 border-2 border-indigo-dark"></span>
           </span>
           <div className="p-8 md:p-12 md:pt-5">
                <h2 className="text-3xl font-extrabold text-white mb-3">On Today</h2>
                <div className="flex-col">
                    {JSON.map((event, key) => (
                        <Event 
                            title={event.title}
                            location={event.location}
                            hour={event.hour}
                            key={key}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}