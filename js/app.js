fetch("https://restcountries.com/v3.1/all")
.then(res=>res.json())
.then(data=>getData(data))

const main=document.querySelector('.main');
function getData(pera){
    for(const datas of pera){
        const div=document.createElement('div')
        div.classList.add('item')
        div.innerHTML=`
        <h2>Name: ${datas.name.common}</h2>
        <h2>Capital: ${datas.capital}</h2>
        <button onclick=" getCode('${datas.cca2}')">Click</button>
        `
        main.appendChild(div)
    }
}

function getCode(chil){
    const url =`https://restcountries.com/v3.1/alpha/${chil}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>getDetels(data))
    
}

const detels=document.querySelector('.detels')
function getDetels(detel){
    console.log(detel)
        clearDetails();
    
    const div=document.createElement('div')
    div.classList.add('item_1')
    div.innerHTML=`
    <img src="${detel[0].flags.png}" alt="">
    <h2>Continents: ${detel[0].continents}</h2>
    <h2>Population: ${detel[0].population}</h2>
    <h2>Region: ${detel[0].region}</h2>
    <h2>Subregion: ${detel[0].subregion}</h2>
    <h2>Timezones: ${detel[0].timezones}</h2>
    <h2>Idd: ${detel[0].idd.root}</h2>
    <h2>Maps: ${detel[0].maps.googleMaps}</h2>
    `
    detels.appendChild(div)   
    
}

function clearDetails() {
    // Remove all child elements from the 'detels' container
    while (detels.firstChild) {
        detels.removeChild(detels.firstChild);
    }
}