import Task from '../components/Task'

import Bug from '../../assets/bug'
import Word from '../../assets/word'

import JSON from '../../data/tasks.json'

const getIcon = (type: string) => {
    switch(type) {
        case 'assignment': 
            return <Word className="h-8 w-8 text-blue" />
        case 'project':
            return <Bug className="h-8 w-8 text-cambridge-dark" />
        default:
            return <></>
    }
} 

export default function Tasks() {
    return (
        <section className="bg-puce border-2 border-puce-dark rounded-lg text-white">
            <span className="flex flex-row justify-end align-middle w-full">
                <span className="bg-almond rounded-full w-5 h-5 mr-3 mt-3 border-2 border-puce-dark"></span>
            </span>
            <div className="p-8 md:p-12 md:pt-5">
                <h2 className="text-3xl font-extrabold mb-3">What's Due?</h2>
                <div className="flex-col">
                    {JSON.map((task, key) => (
                        <Task 
                            title={task.title}
                            icon={getIcon(task.type)}
                            due={new Date(task.due)}
                            key={key}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}