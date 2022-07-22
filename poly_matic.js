const fetch=require('node-fetch');

//address=0xb91dd8225Db88dE4E3CD7B7eC538677A2c1Be8Cb

const api_url='https://api.polygonscan.com/api?module=account&action=txlist&address=0xb91dd8225Db88dE4E3CD7B7eC538677A2c1Be8Cb&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=8C7UEJCQDGZAKW4S16Y5NFXZ216QMDZZPI'

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
  console.log(demo);

}

getData();
