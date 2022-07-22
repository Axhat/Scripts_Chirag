const fetch=require('node-fetch');

//const api_url='https://api.etherscan.io/api?module=account&action=txlist&address=0xc5102fE9359FD9a28f877a67E36B0F050d81a3CC&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=9BIPQ74F6MW4M3THPNUBQZYGPIHIY7UXN9'
// const api_url='https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2&address=0x4e83362442b8d1bec281594cea3050c8eb01311c&page=1&offset=100&startblock=0&endblock=27025780&sort=asc&apikey=9BIPQ74F6MW4M3THPNUBQZYGPIHIY7UXN9'
const api_url='https://api.polygonscan.com/api?module=account&action=txlist&address=0xb91dd8225Db88dE4E3CD7B7eC538677A2c1Be8Cb&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=8C7UEJCQDGZAKW4S16Y5NFXZ216QMDZZPI'

const list=new Object();
let ll=[];

// ll['name']='chiragg';
// ll['age']=21;
// ll['name']='chirag';
// ll['age']=20;
// console.log(ll);


async function getData(){
    const response=await fetch(api_url);
    const data=await response.json();
    // console.log(data);
    const {result}=data;
  console.log(result);

  const demo=result.filter(function(item){
  return item.gas==='500000';
   //console.log(item.blockNumber);
  });
  console.log(demo.length);

    
    // {result.map((id,key)=>{
    // //    console.log(id);
    //     // console.log(key);
    //     list.key=key;
        
        
    //     // const value=id.value;
    //     // const decimal=id.tokenDecimal;


    //     list.blockNumber=id.blockNumber
    //     list.from=id.from;
    //     list.to=id.to;
    //   //  list.amt=value/Math.pow(10,decimal);
    //     // console.log(list);
    //     // console.log(id.blockNumber);
    //     // console.log(id.from);
    //     // console.log(id.to);
    //     // console.log("total amt: ", value/(10**decimal));
        
    // })}
 
}

getData();
