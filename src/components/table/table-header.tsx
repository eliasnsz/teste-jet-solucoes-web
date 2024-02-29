import { ComponentProps, ReactNode } from "react"
import { twMerge } from "tailwind-merge"

interface Props extends ComponentProps<"thead"> {
	children: ReactNode
}

export function TableHeader({ children, className, ...props }: Props) {
	return (
		<thead {...props} className={twMerge("border-b", className)}>
			{children}
		</thead>
	)
}
