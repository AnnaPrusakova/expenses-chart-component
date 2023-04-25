import {Balance} from "@/src/components/balance/Balance";

export default function Home() {
    return (
        <main className="relative">
            <div className="absolute m-0 top-2/4 left-2/4 translate-y-2/4 -translate-x-2/4 -transform-y-1/2">
                <Balance/>
            </div>
        </main>
    )
}
