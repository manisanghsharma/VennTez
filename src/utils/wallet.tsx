
import { BeaconWallet } from "@taquito/beacon-wallet";
import {NetworkType} from "@airgap/beacon-dapp"

//connecting ghostnet 
export const wallet =  new BeaconWallet({
    name:"CrowdFund",
    preferredNetwork:NetworkType.GHOSTNET
})


export const connectWallet = async () => {
    await wallet.requestPermissions({network:{type:NetworkType.GHOSTNET}})

    
};


export const getAccount = async () => {
    const connectedWallet = await wallet.client.getActiveAccount();
    if(connectedWallet){
        return connectedWallet.address;
    }else{
        return "";
    }
};

