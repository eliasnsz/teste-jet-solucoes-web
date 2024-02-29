import dayjs from "dayjs"
import Image from "next/image"
import { MoreVerticalIcon } from "lucide-react"
import { cars } from "@/data/cars"
import { IconButton, RatingStars, StatusBadge, Table } from ".."

export function CarDataTable() {
	return (
		<Table.Root className="hidden sm:table">
			<Table.Header>
				<Table.Row>
					<Table.Head>Car</Table.Head>
					<Table.Head>Next reservation</Table.Head>
					<Table.Head>Status</Table.Head>
					<Table.Head>Rating</Table.Head>
					<Table.Head className="max-w-[96px] text-center">Actions</Table.Head>
				</Table.Row>
			</Table.Header>

			<Table.Body>
				{cars.map((car) => (
					<Table.Row key={car.id}>
						<Table.Data className="flex gap-2 items-center">
							<Image
								alt={car.name}
								className="w-12 aspect-square object-cover object-center"
								height={128}
								priority
								src={car.imageUrl}
								width={128}
							/>
							<h6>{car.name}</h6>
						</Table.Data>

						<Table.Data className="text-gray-500">
							{dayjs(car.nextReservation.startDate).format("DD/MM")}
						</Table.Data>

						<Table.Data>
							<StatusBadge status={car.status} />
						</Table.Data>

						<Table.Data>
							<RatingStars rating={car.rating} />
						</Table.Data>

						<Table.Data>
							<div className="grid place-items-center">
								<IconButton icon={MoreVerticalIcon} />
							</div>
						</Table.Data>
					</Table.Row>
				))}
			</Table.Body>
		</Table.Root>
	)
}
