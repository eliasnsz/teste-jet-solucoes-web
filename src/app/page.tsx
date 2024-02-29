import { CarDataTable } from "@/components/car-data-table"

export default function Home() {
	return (
		<main className="min-h-screen grid place-items-center">
			<div className="max-w-[1400px] px-2 w-full">
				<CarDataTable />
			</div>
		</main>
	)
}
