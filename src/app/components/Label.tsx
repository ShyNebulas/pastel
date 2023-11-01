export default function Label({ className, content }: { className: string, content: string }) {
    return (
        <span className={`${className} text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md mb-2`}>
            <span>{content}</span>
        </span>
    )
}