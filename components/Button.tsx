"use client";

export const PrimaryButton = ({children, onClick}: {
    children: React.ReactNode,
    onClick: () => void
}) => {
    return <button onClick={onClick} type="button" className="text-white bg-orange-700 hover:bg-orange-700 focus:outline-none focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
        {children}
    </button>
}

export const SecondaryButton = ({children, onClick, prefix}: {
    children: React.ReactNode,
    onClick: () => void,
    prefix?: React.ReactNode
}) => {
    return <button onClick={onClick} type="button" className="text-white bg-blue-500 hover:bg-orange-900 focus:outline-none focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-6 py-3 me-2 mb-2 flex">
    <div>
        {prefix}
    </div>
    <div>
        {children}
    </div>
</button>
}

export const TabButton = ({active, children, onClick}: {
    active: boolean;
    children: React.ReactNode,
    onClick: () => void
}) => {
    return <button type="button" className={`w-full text-white hover:bg-orange-800  bg-orange-400  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ${active ? "bg-orange-400" : "bg-orange-600"}`} onClick={onClick}>{children}</button>
}