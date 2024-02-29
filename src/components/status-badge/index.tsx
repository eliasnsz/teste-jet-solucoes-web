import { Status } from "@/data/cars"
import { CheckIcon, XIcon } from "lucide-react"

interface Props {
	status: Status
}

export function StatusBadge({ status }: Props) {
	return (
		<>
			{/* Desktop */}
			<span
				data-status={status}
				className="hidden sm:inline py-0.5 capitalize data-[status='unavailable']:bg-red-100 data-[status='unavailable']:text-red-800 px-2.5 text-xs font-medium bg-green-100 text-green-800"
			>
				{status}
			</span>

			{/* Mobile */}
			<span
				data-status={status}
				className="absolute m-0.5 sm:hidden grid place-items-center h-6 w-6 data-[status='available']:bg-green-600 bg-red-500 rounded-full text-white"
			>
				{status === "available" ? (
					<CheckIcon className="h-4 w-4" />
				) : (
					<XIcon className="h-4 w-4" />
				)}
			</span>
		</>
	)
}
