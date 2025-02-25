import { WalletConnection, WalletConnectionStatus } from "@/app/Services";
import { useState } from "react";
import { Finalize } from "../Admissions/FinalizeStudent";
import { SendStudent } from "../Instructor/SendStudents";

let wallet = new WalletConnection();
//test
export function WalletConnectionButton(){
    const [status, setStatus] = useState(WalletConnectionStatus.waiting);

    if (status == WalletConnectionStatus.waiting){
        return (
            <button onClick={async ()=>{
              let result = await wallet.connectToWallet()
              setStatus(result)
            }}>Connect Your Wallet</button>
        )
    }     

    if(status == WalletConnectionStatus.missingWallet){
        return (
            <div>
                <p>You are missing a wallet</p>
            </div>
        )
    }

    if(status == WalletConnectionStatus.success){
        return (
            <div>
                <Finalize wallet={wallet}/>
                <SendStudent wallet={wallet}/>
            </div>


        )
    }

    if(status == WalletConnectionStatus.declined){
        return (
            <div>
                <p>The user canceled the connect</p>
            </div>
        )
    }


}