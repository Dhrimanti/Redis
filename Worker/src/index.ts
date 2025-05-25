import { createClient } from "redis";
const client=createClient();



async function main(){
    await client.connect();
    let count=0;
    while(1){
        const response=await client.brPop("submissions",0);
        console.log(`${response} ${++count}`);

        await new Promise((resolve)=>setTimeout(resolve,1000));
        console.log("Processed the submission")
    }
}
main()