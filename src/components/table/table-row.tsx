import { ComponentProps, ReactNode } from "react"
import { twMerge } from "tailwind-merge"

interface Props extends ComponentProps<"tr"> {
	children: ReactNode
}

export function TableRow({ children, className, ...props }: Props) {
	return (
		<tr {...props} className={twMerge("border-b", className)}>
			{children}
		</tr>
	)
}
