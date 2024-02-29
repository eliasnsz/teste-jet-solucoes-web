import { CarDataList, CarDataTable } from "@/components"

export default function Home() {
	return (
		<main className="min-h-screen grid place-items-center">
			<div className="max-w-[1400px] px-2 w-full">
				{/* Mobile */}
				<CarDataList />
				{/* Desktop */}
				<CarDataTable />
			</div>
		</main>
	)
}
