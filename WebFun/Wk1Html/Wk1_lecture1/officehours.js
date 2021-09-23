let addBike = document.getElementById("addBike")

addBike.addEventListener("click", function(icecream){
    icecream.preventDefault()
    let table = document.getElementById("bikeTable")
    let row = table.insertRow(-1)
    let cell1 = row.insertCell(0)
    let cell2 = row.insertCell(1)
    let cell3 = row.insertCell(2)
    cell1.innerHTML = document.getElementById("brand").value
    cell2.innerHTML = document.getElementById("model").value
    cell3.innerHTML = document.getElementById("notes").value
    document.getElementById("brand").value = ""
    document.getElementById("model").value = ""
    document.getElementById("notes").value = ""
})

// let var const

let arr = [2,3,4,5,6]
//         0 1 2 3 4  

