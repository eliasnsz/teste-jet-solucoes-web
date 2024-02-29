import { Status } from "@/data/cars"

interface Props {
	status: Status
}

export function StatusBadge({ status }: Props) {
	return (
		<span
			data-status={status}
			className="py-0.5 capitalize data-[status='unavailable']:bg-red-100 data-[status='unavailable']:text-red-800 px-2.5 text-xs font-medium bg-green-100 text-green-800"
		>
			{status}
		</span>
	)
}
