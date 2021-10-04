

const recovered=document.querySelector('#recover');
const confirm=document.querySelector('#confirm');
const death=document.querySelector('#death');
const active=document.querySelector('#active');
const update=document.querySelector('#update');



const res=new XMLHttpRequest();
res.open('GET', "https://data.covid19india.org/data.json");
res.send();


async function getCovidData() {
    const res=await fetch("https://data.covid19india.org/data.json");
    const data=await res.json();

    const india=data.statewise[0];
    console.log(india);
    recovered.innerHTML="Loading...";
    confirm.innerHTML="Loading...";
    death.innerHTML="Loading...";
    active.innerHTML="Loading...";
    update.innerHTML="Loading...";

    setTimeout(() => {
        recovered.innerHTML=india.recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        confirm.innerHTML=india.confirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        death.innerHTML=india.deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        active.innerHTML=india.active.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        update.innerHTML=india.lastupdatedtime;
    }, 2000);


}

res.addEventListener('load', getCovidData);

