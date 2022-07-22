// import fetch from "node-fetch"

const fetch = require('node-fetch')
// var api = require('etherscan-api').init('9BIPQ74F6MW4M3THPNUBQZYGPIHIY7UXN9');
// var balance = api.account.balance('0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae');
// balance.then(function(balanceData){
//   console.log(balanceData);
// })

// https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2&address=0x4e83362442b8d1bec281594cea3050c8eb01311c&page=1&offset=100&startblock=0&endblock=27025780&sort=asc&apikey=YourApiKeyToken


// https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2&address=0x4e83362442b8d1bec281594cea3050c8eb01311c&page=1&offset=100&startblock=0&endblock=27025780&sort=asc&apikey=9BIPQ74F6MW4M3THPNUBQZYGPIHIY7UXN9


// console.log('https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2&address=0x4e83362442b8d1bec281594cea3050c8eb01311c&page=1&offset=100&startblock=0&endblock=27025780&sort=asc&apikey=9BIPQ74F6MW4M3THPNUBQZYGPIHIY7UXN9');



console.log('hii')
const api_url = 'https://api.etherscan.io/api?module=account&action=txlist&address=0xc5102fE9359FD9a28f877a67E36B0F050d81a3CC&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=9BIPQ74F6MW4M3THPNUBQZYGPIHIY7UXN9'

async function getData() {
    const list = new Object();
    const response = await fetch(api_url);
    const data = await response.json();
    // console.log(data);
    const { result } = data;
    //console.log(result);

    const demo=result.filter(function(item){
        return item.gasUsed<=100000;
    })

    console.log(demo.length);
//     let count=0;

//    {demo.map((id,key)=>{
//     count=count+id.nonce;
//    })}

//     console.log(count);

    // {
    //     result.map((id, key) => {
    //         // console.log(id);
    //         list.key = key;
    //         list.id = id.blockNumber;
    //         list.from = id.from;
    //         list.to = id.to;
    //         // console.log(key);
    //         // console.log(id.blockNumber);
    //         // console.log(id.from);
    //         // console.log(id.to);
           
    //     })
       
    // }
   // console.log(list);
}

getData();

// 0xDa873c9A480e695e01b5478cd53F42F92C9d2a58
// fetch('https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2&address=0x4e83362442b8d1bec281594cea3050c8eb01311c&page=1&offset=100&startblock=0&endblock=27025780&sort=asc&apikey=9BIPQ74F6MW4M3THPNUBQZYGPIHIY7UXN9')
// .then(res=>res.json())
// // .then(blockNumber=>console.log(blockNumber))
// // .then(blockNumber=>console.log(blockNumber.result.length))
// .then(blockNumber=>console.log(blockNumber.result))