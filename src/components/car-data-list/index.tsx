import dayjs from "dayjs"
import Image from "next/image"
import { MoreVerticalIcon } from "lucide-react"
import { cars } from "@/data/cars"
import { RatingStars, StatusBadge } from ".."
import { IconButton } from "../icon-button"

export function CarDataList() {
	return (
		<ul className="block divide-y sm:hidden">
			{cars.map((car) => (
				<li key={car.id} className="flex py-2 justify-between">
					<div className="flex flex-1 gap-5">
						<Image
							className="relative w-20 aspect-square object-cover"
							src={car.imageUrl}
							alt={car.name}
							width={256}
							height={256}
						/>
						<StatusBadge status={car.status} />

						<div className="flex flex-col justify-between">
							<h6 className="font-semibold text-base">{car.name}</h6>
							<span className="text-sm text-gray-500">
								Next reservation:{" "}
								{dayjs(car.nextReservation.startDate).format("DD/MM")}
							</span>
							<RatingStars rating={car.rating} />
						</div>
					</div>

					<div>
						<IconButton icon={MoreVerticalIcon} />
					</div>
				</li>
			))}
		</ul>
	)
}
