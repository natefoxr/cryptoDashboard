function coinGeckoData(coin) {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    $.get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coin}&order=market_cap_desc&per_page=100&page=1&sparkline=false`, function(data) {
            if(coin == 'ethereum') {
                localcoin = 'eth'
            } else if(coin == 'bitcoin') {
                localcoin = 'btc'
            } else {
                localcoin = coin
            }

            data.forEach(data => {
                const result = data
                console.log(result)
                const symbol = result['symbol'];
                const price = result['current_price'];
                const mc = result['market_cap'];
                const vol = result['total_volume'];
                const change24 = result['price_change_percentage_24h'];
                const low24 = result['low_24h'];
                const high24 = result['high_24h'];
                const supply = result['total_supply'];
                const ath = result['ath'];
                const cryptoImage = result['image']
                $(`.coindata`).append(
                    `     
                    <div class="col-md-6 col-xl-4">
                        <div class="card w-75 mx-md-4 my-2 text-center">
                            <div class="img">
                                <img class="card-img-top img-thubnail rounded" src="${cryptoImage}" alt="Crypto image">
                            </div>
                            <div class="card-body">
                                <h1 class="card-title pb-3">${symbol.toUpperCase()} Data</h1>
                                <p class="card-text">${symbol.toUpperCase()}-USD Price: <strong>${formatter.format(price)}</strong></p>
                                <p class="card-text">${symbol.toUpperCase()}-USD Market Cap: <strong>${formatter.format(mc)}</strong></p>
                                <p class="card-text">${symbol.toUpperCase()}-USD Volume: <strong>${formatter.format(vol)}</strong></p>
                                <p class="card-text">${symbol.toUpperCase()}-USD 24HR Change: <strong>${change24}%</strong></p>
                                <p class="card-text">${symbol.toUpperCase()}-USD 24HR Low: <strong>${formatter.format(low24)}</strong></p>
                                <p class="card-text">${symbol.toUpperCase()}-USD 24HR High: <strong>${formatter.format(high24)}</strong></p>
                                <p class="card-text">${symbol.toUpperCase()} Supply: <strong>${formatter.format(supply)}</strong></p>
                                <p class="card-text">${symbol.toUpperCase()}-USD All Time High: <strong>${formatter.format(ath)}</strong></p>
                            </div>
                        </div>
                    </div>
                    `
                )
            });
        }
    )
}

$(document).ready(function() {
    coinGeckoData('ethereum,link,bitcoin,solana,optimism,matic-network,maker')


    // trending section
    $.get(
        `https://api.coingecko.com/api/v3/search/trending`, function(data) {
            console.log(data)
    })
})