
export default function ButtonComp({ name, color="bg-orange-500", textColor="text-white" }: { name: string, color: string, textColor: string }) {
    return (
        <div className={`p-2 ${color} rounded-3xl px-3 hover:opacity-55 cursor-pointer`}>
            <div className={`${textColor} font-bold`}>{name}</div>
        </div>
    )
}
