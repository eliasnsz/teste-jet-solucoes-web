import { ComponentProps, ReactNode } from "react"
import { twMerge } from "tailwind-merge"

interface Props extends ComponentProps<"th"> {
	children: ReactNode
}

export function TableHead({ children, className, ...props }: Props) {
	return (
		<th
			{...props}
			className={twMerge(
				"py-4 text-xs text-nowrap px-4 uppercase font-semibold text-left text-gray-500",
				className,
			)}
		>
			{children}
		</th>
	)
}
