import { randomUUID } from "crypto"

export enum Status {
	AVAILABLE = "available",
	UNAVAILABLE = "unavailable",
}

export interface Car {
	id: string
	name: string
	imageUrl: string
	status: Status
	nextReservation: {
		startDate: Date
		endDate: Date
	}
	rating: number
}

export const cars: Car[] = [
	{
		id: randomUUID(),
		name: "Mini Cooper 2020",
		imageUrl:
			"https://images.unsplash.com/photo-1617624085810-3df2165bd11b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		nextReservation: {
			startDate: new Date(),
			endDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7), // seven days from now
		},
		rating: 4,
		status: Status.UNAVAILABLE,
	},
	{
		id: randomUUID(),
		name: "Ford Mustang 2021",
		imageUrl:
			"https://images.unsplash.com/photo-1547744152-14d985cb937f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		nextReservation: {
			startDate: new Date(),
			endDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 5), // five days from now
		},
		rating: 5,
		status: Status.AVAILABLE,
	},
	{
		id: randomUUID(),
		name: "Tesla Model S",
		imageUrl:
			"https://images.unsplash.com/photo-1536700503339-1e4b06520771?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		nextReservation: {
			startDate: new Date(),
			endDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 10), // ten days from now
		},
		rating: 2.5,
		status: Status.UNAVAILABLE,
	},
	{
		id: randomUUID(),
		name: "Porsche 911",
		imageUrl:
			"https://images.unsplash.com/photo-1593353798398-6024b7444bb6?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		nextReservation: {
			startDate: new Date(),
			endDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 8), // eight days from now
		},
		rating: 4.7,
		status: Status.AVAILABLE,
	},
	{
		id: randomUUID(),
		name: "BMW M3",
		imageUrl:
			"https://images.unsplash.com/photo-1616455263449-0bd3aac04029?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		nextReservation: {
			startDate: new Date(),
			endDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 6), // six days from now
		},
		rating: 3,
		status: Status.AVAILABLE,
	},
]
