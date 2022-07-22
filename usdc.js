const fetch=require('node-fetch');

// contractaddress=0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48
// address=0xa2327a938Febf5FEC13baCF

const api_url='https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48&address=0xa2327a938Febf5FEC13baCFb16Ae10EcBc4cbDCF&page=1&offset=100&startblock=0&endblock=27025780&sort=asc&apikey=9BIPQ74F6MW4M3THPNUBQZYGPIHIY7UXN9'

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
 
    
   
}

getData();

