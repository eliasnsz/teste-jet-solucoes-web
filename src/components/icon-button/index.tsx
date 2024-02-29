import { ComponentProps, ElementType } from "react"
import { twMerge } from "tailwind-merge"

interface Props extends ComponentProps<"button"> {
	icon: ElementType
}

export function IconButton({ icon: Icon, ...props }: Props) {
	return (
		<button>
			<Icon {...props} className={twMerge("block h-5 w-5", props.className)} />
		</button>
	)
}
