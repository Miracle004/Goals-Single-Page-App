const container = document.querySelectorAll('span');


//Selected the day and time elements with the testid and displayed the current date and time
container.forEach(e =>{
    let testid = e.dataset.testid;
    const d = new Date();
    switch (testid) {
        case "currentDay":
            let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
            let day = days[d.getDay()];
            e.textContent = day;
            break;
    
        case "currentTimeUTC":
            e.textContent = d.toLocaleTimeString();
        default:
            break;
    }
})
