import Github from '../../assets/github'

export default function Welcome() {
    return (
        <section className="bg-cambridge border-2 border-cambridge-dark rounded-lg mb-8 text-white">
            <span className="flex flex-row justify-end align-middle w-full">
                <span className="bg-almond rounded-full w-5 h-5 mr-3 mt-3 border-2 border-cambridge-dark"></span>
           </span>
            <div className="p-8 md:p-8 md:pb-2 md:pt-5">
                <h1 className="text-4xl font-extrabold mb-3">Pastel</h1>
                <p className="mt-4 text-lg text-gray-500 pl-3">Pastel is an amazing timetable app that can help you keep track of your university schedule and upcoming tasks!</p>
            </div>
            <span className="flex flex-row justify-end align-middle w-full">
                <a href="https://github.com/ShyNebulas/pastel">
                    <Github className="h-7 w-7 m-3 text-white" />
                </a>
           </span>
        </section>
    )
}