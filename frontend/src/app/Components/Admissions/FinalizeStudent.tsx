import { WalletConnection } from "@/app/Services";

export function Finalize(props: { wallet: WalletConnection }) {
    return (
        <div>
            <h1>It Works!</h1>
            <button onClick={() => {
                props.wallet.finalizedStudent("bob", () => {
                    console.log("Finalized student bob");
                });
            }}>Finalize Bob</button>
        </div>
    );
}
