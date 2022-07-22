const fetch=require('node-fetch');

//0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48

//const api_url='https://api.etherscan.io/api?module=account&action=txlist&address=0xc5102fE9359FD9a28f877a67E36B0F050d81a3CC&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=9BIPQ74F6MW4M3THPNUBQZYGPIHIY7UXN9'
const api_url='https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48&address=0xa2327a938Febf5FEC13baCFb16Ae10EcBc4cbDCF&page=1&offset=100&startblock=0&endblock=27025780&sort=asc&apikey=9BIPQ74F6MW4M3THPNUBQZYGPIHIY7UXN9'

const list=new Object();

async function getData(){
    const response=await fetch(api_url);
    const data=await response.json();
    // console.log(data);
    const {result}=data;
    console.log(result);

    const demo=result.filter(function(item){
    return item.gas==='73195';
     
    });

    console.log(demo.length);
 
    // {result.map((id,key)=>{
    // //    console.log(id);
    //     // console.log(key);
    //     list.key=key;
        
        
    //     const value=id.value;
    //     const decimal=id.tokenDecimal;


    //     list.blockNumber=id.blockNumber
    //     list.from=id.from;
    //     list.to=id.to;
    //     list.amt=value/Math.pow(10,decimal);
       
    //     // console.log(id.blockNumber);
    //     // console.log(id.from);
    //     // console.log(id.to);
    //     // console.log("total amt: ", value/(10**decimal));
    //   // console.log(list);
    // })}
   
}

getData();


// to => 