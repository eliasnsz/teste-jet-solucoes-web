import { ComponentProps, ReactNode } from "react"
import { twMerge } from "tailwind-merge"

interface Props extends ComponentProps<"tbody"> {
	children: ReactNode
}

export function TableBody({ children, className, ...props }: Props) {
	return (
		<tbody {...props} className={twMerge("last:border-b", className)}>
			{children}
		</tbody>
	)
}
