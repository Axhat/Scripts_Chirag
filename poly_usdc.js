const fetch=require('node-fetch');

//0xDa873c9A480e695e01b5478cd53F42F92C9d2a58
// usdc -- 0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174

// const api_url='https://api.polygonscan.com/api?module=account&action=txlist&address=0xb91dd8225Db88dE4E3CD7B7eC538677A2c1Be8Cb&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=8C7UEJCQDGZAKW4S16Y5NFXZ216QMDZZPI'

const api_url='https://api.polygonscan.com/api?module=account&action=tokentx&contractaddress=0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270&address=0x6813ad11cca98e15ff181a257a3c2855d1eee69e&startblock=0&endblock=99999999&page=1&offset=5&sort=asc&apikey=8C7UEJCQDGZAKW4S16Y5NFXZ216QMDZZPI'

const listt=new Object();

async function getData(){
    const response=await fetch(api_url);
    const data=await response.json();
    // console.log(data);
    const {result}=data;
    console.log(result.length);

    {result.map((id,key)=>{
    //    console.log(id);
        // console.log(key);
        listt.key=key;
        
        
        const value=id.value;
        const decimal=id.tokenDecimal;
 

        listt.blockNumber=id.blockNumber
        listt.from=id.from;
        listt.to=id.to;
        // list.amt=value/Math.pow(10,decimal);
        
        // console.log(id.blockNumber);
        // console.log(id.from);
        // console.log(id.to);
        // console.log("total amt: ", value/(10**decimal));
        console.log(listt);
    })}
   
        
}

getData();


// to => 