export default function Badge({ className, children }: { className: string, children: JSX.Element }) {
    return (
        <span className={`${className} text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded border-2`}>
            {children}
        </span>
    )
}