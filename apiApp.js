function coinGeckoSearch(userinput){
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    $.get(
        `https://api.coingecko.com/api/v3/search?query=${userinput}`, function(data) {
            $(`.coindata`).html("")
            data['coins'].forEach(element => {
                const id = element['id']
                const name = element['name']
                const mcRank = element['market_cap_rank']
                const symbol = element['symbol']
                const thumbnail = element['large']
                $(`.coindata`).append(
                    `     
                    <div class="col-md-6 col-xl-3 justify-content-center">
                        <div class="card w-md-75 mx-auto my-4 text-center">
                            <div class="img">
                                <img class="card-img-top w-50 h-50 rounded" src="${thumbnail}" alt="Crypto image"">
                            </div>
                            <div class="card-body">
                                <h1 class="card-title capitalize pb-3">${name}</h1>
                                <p class="card-text">${symbol.toUpperCase()} Market Cap Rank: <strong>${mcRank}</strong></p>
                                <a class="btn btn-success capitalize crypto-details">${id} details</a>
                            </div>
                        </div>
                    </div>
                    `
                )
            })
            $('.crypto-details').on('click', function() {
                let cryptoId = $(this).text().slice(0,-8)
                $.get(
                    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${cryptoId}&order=market_cap_desc&per_page=100&page=1&sparkline=false`, function(data) {
                        const response = data[0]
                        const detailName = response['name'];
                        const detailSymbol = response['symbol'];
                        const detailPrice = response['current_price'];
                        const detailMc = response['market_cap'];
                        const detailVol = response['total_volume'];
                        const detailChange24 = response['price_change_percentage_24h'];
                        const detailLow24 = response['low_24h'];
                        const detailHigh24 = response['high_24h'];
                        const detailSupply = response['total_supply'];
                        const detailAth = response['ath'];
                        const detailCryptoImage = response['image'] 
                        $(`.coindata`).html(
                            `
                            <div class="container my-4 mx-auto text-center text-light">
                                <div class="img">
                                    <img class="card-img-top w-25 h-25 rounded" src="${detailCryptoImage}" alt="Crypto image">
                                </div>
                                <div class="card-body">
                                    <h1 class="card-title capitalize pb-3">${detailName}</h1>
                                    <p class="card-text">${detailSymbol.toUpperCase()}-USD Price: <strong>${formatter.format(detailPrice)}</strong></p>
                                    <p class="card-text">${detailSymbol.toUpperCase()}-USD Market Cap: <strong>${formatter.format(detailMc)}</strong></p>
                                    <p class="card-text">${detailSymbol.toUpperCase()}-USD Volume: <strong>${formatter.format(detailVol)}</strong></p>
                                    <p class="card-text">${detailSymbol.toUpperCase()}-USD 24HR Change: <strong class="percentChange">${detailChange24}%</strong></p>
                                    <p class="card-text">${detailSymbol.toUpperCase()}-USD 24HR Low: <strong>${formatter.format(detailLow24)}</strong></p>
                                    <p class="card-text">${detailSymbol.toUpperCase()}-USD 24HR High: <strong>${formatter.format(detailHigh24)}</strong></p>
                                    <p class="card-text">${detailSymbol.toUpperCase()} Supply: <strong>${detailSupply}</strong></p>
                                    <p class="card-text">${detailSymbol.toUpperCase()}-USD All Time High: <strong>${formatter.format(detailAth)}</strong></p>
                                    <a href="./index.html" class="btn btn-success ${detailSymbol}-details">Back</a>
                                </div>
                            </div>
                            `
                        )
                    }
                )
                            
            }
        )
    })
}

function coinGeckoTrending() {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    $.get(
        `https://api.coingecko.com/api/v3/search/trending`, function(data) {
            $(`.coindata`).html("")
            console.log(data)
            data['coins'].forEach(element => {
                const item = element['item']
                const id = item['id']
                const name = item['name']
                const mcRank = item['market_cap_rank']
                const symbol = item['symbol']
                const thumbnail = item['large']
                $(`.coindata`).append(
                    `     
                    <div class="col-md-6 col-xl-3 justify-content-center">
                        <div class="card w-md-75 mx-auto my-4 text-center">
                            <div class="img">
                                <img class="card-img-top w-50 h-50 rounded" src="${thumbnail}" alt="Crypto image">
                            </div>
                            <div class="card-body">
                                <h1 class="card-title capitalize pb-3">${name}</h1>
                                <p class="card-text">${symbol} Market Cap Rank: <strong>${mcRank}</strong></p>
                                <a class="btn btn-success capitalize crypto-details">${id} details</a>
                            </div>
                        </div>
                    </div>
                    `
                )
            })
            $('.crypto-details').on('click', function() {
                let cryptoId = $(this).text().slice(0,-8)
                console.log(cryptoId)
                $.get(
                    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${cryptoId}&order=market_cap_desc&per_page=100&page=1&sparkline=false`, function(data) {
                        console.log(data)
                        const response = data[0]
                        const trendingName = response['name'];
                        const trendingSymbol = response['symbol'];
                        const trendingPrice = response['current_price'];
                        const trendingMc = response['market_cap'];
                        const trendingVol = response['total_volume'];
                        const trendingChange24 = response['price_change_percentage_24h'];
                        const trendingLow24 = response['low_24h'];
                        const trendingHigh24 = response['high_24h'];
                        const trendingSupply = response['total_supply'];
                        const trendingAth = response['ath'];
                        const trendingCryptoImage = response['image'] 
                        $(`.coindata`).html(
                            `
                            <div class="container my-4 mx-auto text-center text-light">
                                <div class="img">
                                    <img class="card-img-top w-25 h-25 rounded" src="${trendingCryptoImage}" alt="Crypto image">
                                </div>
                                <div class="card-body">
                                    <h1 class="card-title capitalize pb-3">${trendingName}</h1>
                                    <p class="card-text">${trendingSymbol.toUpperCase()}-USD Price: <strong>${formatter.format(trendingPrice)}</strong></p>
                                    <p class="card-text">${trendingSymbol.toUpperCase()}-USD Market Cap: <strong>${formatter.format(trendingMc)}</strong></p>
                                    <p class="card-text">${trendingSymbol.toUpperCase()}-USD Volume: <strong>${formatter.format(trendingVol)}</strong></p>
                                    <p class="card-text">${trendingSymbol.toUpperCase()}-USD 24HR Change: <strong class="percentChange">${trendingChange24}%</strong></p>
                                    <p class="card-text">${trendingSymbol.toUpperCase()}-USD 24HR Low: <strong>${formatter.format(trendingLow24)}</strong></p>
                                    <p class="card-text">${trendingSymbol.toUpperCase()}-USD 24HR High: <strong>${formatter.format(trendingHigh24)}</strong></p>
                                    <p class="card-text">${trendingSymbol.toUpperCase()} Supply: <strong>${trendingSupply}</strong></p>
                                    <p class="card-text">${trendingSymbol.toUpperCase()}-USD All Time High: <strong>${formatter.format(trendingAth)}</strong></p>
                                    <a href="./index.html" class="btn btn-success ${trendingSymbol}-details">Back</a>
                                </div>
                            </div>
                            `
                        )
                    }
                )
                            
            }
        )
    })
}

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
                const id = data['id']
                const name = data['name'];
                const symbol = data['symbol'];
                const price = data['current_price'];
                const mc = data['market_cap'];
                const change24 = data['price_change_percentage_24h'];
                const cryptoImage = data['image']
                $(`.coindata`).append(
                    `     
                    <div class="col-md-6 col-xl-3 justify-content-center">
                        <div class="card w-md-75 mx-auto my-4 text-center">
                            <div class="img">
                                <img class="card-img-top w-50 h-50 rounded" src="${cryptoImage}" alt="Crypto image">
                            </div>
                            <div class="card-body">
                                <h1 class="card-title capitalize pb-3">${name}</h1>
                                <p class="card-text">${symbol.toUpperCase()}-USD Price: <strong>${formatter.format(price)}</strong></p>
                                <p class="card-text">${symbol.toUpperCase()}-USD Market Cap: <strong>${formatter.format(mc)}</strong></p>
                                <p class="card-text">${symbol.toUpperCase()}-USD 24HR Change: <strong class="percentChange">${change24}%</strong></p>
                                <a class="btn btn-success capitalize crypto-details">${id} details</a>
                            </div>
                        </div>
                    </div>
                    `
                )
                if(change24 < 0) {
                    $(`.percentChange`).html(`<strong class="text-danger">${change24}%</strong>`)
                } else {
                    $(`.percentChange`).html(`<strong class="text-success">${change24}%</strong>`)
                }
            });
            $('.crypto-details').on('click', function() {
                let cryptoId = $(this).text().slice(0,-8)
                $.get(
                    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${cryptoId}&order=market_cap_desc&per_page=100&page=1&sparkline=false`, function(data) {
                        const response = data[0]
                        const detailName = response['name'];
                        const detailSymbol = response['symbol'];
                        const detailPrice = response['current_price'];
                        const detailMc = response['market_cap'];
                        const detailVol = response['total_volume'];
                        const detailChange24 = response['price_change_percentage_24h'];
                        const detailLow24 = response['low_24h'];
                        const detailHigh24 = response['high_24h'];
                        const detailSupply = response['total_supply'];
                        const detailAth = response['ath'];
                        const detailCryptoImage = response['image'] 
                        $(`.coindata`).html(
                            `
                            <div class="container my-4 mx-auto text-center text-light">
                                <div class="img">
                                    <img class="card-img-top w-25 h-25 rounded" src="${detailCryptoImage}" alt="Crypto image">
                                </div>
                                <div class="card-body">
                                    <h1 class="card-title capitalize pb-3">${detailName}</h1>
                                    <p class="card-text">${detailSymbol.toUpperCase()}-USD Price: <strong>${formatter.format(detailPrice)}</strong></p>
                                    <p class="card-text">${detailSymbol.toUpperCase()}-USD Market Cap: <strong>${formatter.format(detailMc)}</strong></p>
                                    <p class="card-text">${detailSymbol.toUpperCase()}-USD Volume: <strong>${formatter.format(detailVol)}</strong></p>
                                    <p class="card-text">${detailSymbol.toUpperCase()}-USD 24HR Change: <strong class="percentChange">${detailChange24}%</strong></p>
                                    <p class="card-text">${detailSymbol.toUpperCase()}-USD 24HR Low: <strong>${formatter.format(detailLow24)}</strong></p>
                                    <p class="card-text">${detailSymbol.toUpperCase()}-USD 24HR High: <strong>${formatter.format(detailHigh24)}</strong></p>
                                    <p class="card-text">${detailSymbol.toUpperCase()} Supply: <strong>${detailSupply}</strong></p>
                                    <p class="card-text">${detailSymbol.toUpperCase()}-USD All Time High: <strong>${formatter.format(detailAth)}</strong></p>
                                    <a href="./index.html" class="btn btn-success ${detailSymbol}-details">Back</a>
                                </div>
                            </div>
                            `
                        )
                    }
                )
                        
            })
        }
    )
}

$(document).ready(function() {
    coinGeckoData('ethereum,link,bitcoin,solana,optimism,matic-network,maker,apecoin,ethereum-name-service')

    $('.navbar-insert').append(
        `
        <nav class="navbar bg-light">
            <div class="container-fluid">
                <a href="./index.html" class="navbar-brand">FOXR DASHBOARD</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <button href="./index.html" class="nav-link border-0 bg-light trending">Trending Coins</button>
                    </li>
                <form class="d-flex" role="search">
                    <input class="form-control me-2 search-value" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success search-button">Search</button>
                </form>
            </div>
        </nav>
        `
    )

    $('.search-button').on('click', function(e) {
        e.preventDefault()
        coinGeckoSearch($('.search-value').val())
    })

    $('.trending').on('click', function(e) {
        e.preventDefault()
        coinGeckoTrending()
    })


    // trending section

})