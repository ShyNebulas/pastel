import Badge from '../components/Badge'

export default function Event({ title, location, hour }: { title: string, location: string, hour: string }) {
    return (
        <div className="bg-orange border-2 border-orange-dark flex justify-between items-center p-3 rounded-lg m-1 text-gray-dark">
            <div className="flex justify-start items-center gap-2 w-full">
                <div className="border-r-2 border-orange-dark p-1">
                    <h1 className="text-white text-3xl font-extrabold pr-2">{hour}</h1>
                </div>
                <div className="flex flex-row justify-between w-full p-1">
                    <p className="text-gray-700 font-bold tracking-wider">{title}</p>
                    <Badge className="bg-gray border-gray-dark text-white">
                        <p className="text-gray-700 font-bold tracking-wider">{location}</p>
                    </Badge>
                </div> 
            </div>
        </div>
    )
}