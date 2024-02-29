import { StarIcon } from "lucide-react"
import colors from "tailwindcss/colors"

interface Props {
	rating: number
}

export function RatingStars({ rating }: Props) {
	const stars = []

	for (let index = 1; index <= 5; index++) {
		if (rating >= index) {
			stars.push(
				<StarIcon
					key={`star-${index}`}
					className="h-4 w-4"
					fill={colors.gray["800"]}
					stroke={colors.gray["800"]}
				/>,
			)
		} else {
			stars.push(
				<StarIcon
					key={`rating-star-${Math.random()}`}
					fill={colors.gray["300"]}
					stroke={colors.gray["300"]}
					className="h-4 w-4"
				/>,
			)
		}
	}

	return <div className="flex items-center">{stars}</div>
}
