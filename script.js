const loadData = (search) =>{
    const url = `https://www.thesportsdb.com/api/v1/json/2/searchevents.php?e=Arsenal_vs_Chelsea&s=${search}`
    fetch(url)
    .then(res => res.json())
    .then(data => diaplayData(data.event));
}
const diaplayData = (allEventData) =>{
    const eventContainer = document.getElementById('event-container');
    eventContainer.innerHTML = ``;
    allEventData.forEach(allData => {
        const eventDiv = document.createElement('div');
        eventDiv.classList.add('col');
        eventDiv.innerHTML = `
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">Season: ${allData.strSeason}</h5>
                <p class="card-text">${allData.strFilename}</p>
                <button class="btn btn-warning">Watch</button>
            </div>
        </div>
        `
        eventContainer.appendChild(eventDiv);
    })
}
const search = () => {
    const inputFild = document.getElementById('input-fild');
    const getValue = inputFild.value;
    inputFild.value = '';
    loadData(getValue);
    console.log(getValue);
}
loadData();