export default function Button({ onClick, children }: { onClick?: () => void, children: React.ReactNode }) {
    return (
        <button onClick={onClick} className="bg-blue-500 rounded p-1 px-4 text-white">
            {children}
        </button>
    );
}