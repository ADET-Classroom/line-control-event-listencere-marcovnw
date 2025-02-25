import { WalletConnection } from "@/app/Services"

export function SendStudent(props:{wallet:WalletConnection}){
    return (
        <div>
            <h1>It Works!</h1>
            <button onClick={()=>{
                props.wallet.sendStudents(["bob", "suzy", "joe"], ()=>{
                    console.log("we sent some students to the office");
                })
            }}>Send Students</button>

            <button onClick={ async ()=>{
                
               let result = await props.wallet.contract?.currentStudents(0);
               console.log(result);
            }}>Get first student</button>
        </div>
    )
}