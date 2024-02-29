import { ComponentProps, ReactNode } from "react"
import { twMerge } from "tailwind-merge"

interface Props extends ComponentProps<"td"> {
	children: ReactNode
}

export function TableData({ children, className, ...props }: Props) {
	return (
		<td {...props} className={twMerge("text-sm py-1 px-4", className)}>
			{children}
		</td>
	)
}
