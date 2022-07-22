// import fetch from "node-fetch"

const fetch = require('node-fetch')

//0xc5102fE9359FD9a28f877a67E36B0F050d81a3CC - > demo account

const api_url = 'https://api.etherscan.io/api?module=account&action=txlist&address=0xc5102fE9359FD9a28f877a67E36B0F050d81a3CC&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=9BIPQ74F6MW4M3THPNUBQZYGPIHIY7UXN9'

async function getData() {
    const list = new Object();
    const response = await fetch(api_url);
    const data = await response.json();

    const { result } = data;
    //console.log(result);

    const demo = result.filter(function (item) {
        return item.gasUsed <= 100000;
    })

    console.log(demo);
}

getData();
