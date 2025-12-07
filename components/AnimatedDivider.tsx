export default function AnimatedDivider() {
    return (
        <div className="flex items-center justify-center py-12 opacity-80">
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
            <div className="mx-4 relative">
                <div className="w-3 h-3 bg-accent rotate-45 animate-pulse"></div>
            </div>
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
        </div>
    )
}
