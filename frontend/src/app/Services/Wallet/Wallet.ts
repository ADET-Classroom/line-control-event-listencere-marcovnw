import { ethers } from "ethers"
//Modify this to your contract 
import lock from "../../artifacts/contracts/LineControl.sol/LineControl.json"

export enum WalletConnectionStatus{
    waiting, success, missingWallet, declined
}

export class WalletConnection {
    
    contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
    contract?:ethers.Contract;
    provider?:ethers.BrowserProvider; 
    signer?:ethers.Signer; 
    abi = lock.abi; 
    

    async connectToWallet():Promise<WalletConnectionStatus>{
        if ((window as any).ethereum != null){
            this.provider = new ethers.BrowserProvider((window as any).ethereum);
             try{
                this.signer = await this.provider!.getSigner();
                this.contract = new ethers.Contract(this.contractAddress, this.abi, this.signer); 
                return WalletConnectionStatus.success
             }catch {
                //The user declined to connect the wallet. 
                return WalletConnectionStatus.declined
             }
        }else {
            //No Wallet installed 
            return WalletConnectionStatus.missingWallet
        }
    }

    async sendStudents(students:string[], studentsSent:()=>void){

    console.log(this.contract);
            
        await this.contract?.sendStudents(students)
        studentsSent()
    }

    async finalizedStudent(student: string, finalized: () => void) {
        await this.contract!.finalize(student);
        finalized();
    };
    
}