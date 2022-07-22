const fetch = require('node-fetch');

// contractaddress=0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270
// address=0x6813ad11cca98e15ff181a257a3c2855d1eee69e

const api_url = 'https://api.polygonscan.com/api?module=account&action=tokentx&contractaddress=0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270&address=0x6813ad11cca98e15ff181a257a3c2855d1eee69e&startblock=0&endblock=99999999&page=1&offset=5&sort=asc&apikey=8C7UEJCQDGZAKW4S16Y5NFXZ216QMDZZPI'

async function getData() {
    const response = await fetch(api_url);
    const data = await response.json();
    // console.log(data);
    const { result } = data;
    console.log(result);

    const demo = result.filter(function (item) {
        return item.value >= '50000';
        //console.log(item.blockNumber);});
    });

    console.log(demo);


}

getData();


// to => 