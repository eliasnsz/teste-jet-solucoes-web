import { ComponentProps, ReactNode } from "react"
import { twMerge } from "tailwind-merge"

interface Props extends ComponentProps<"table"> {
	children: ReactNode
}

export function TableRoot({ children, className, ...props }: Props) {
	return (
		<table {...props} className={twMerge("w-full shadow", className)}>
			{children}
		</table>
	)
}
