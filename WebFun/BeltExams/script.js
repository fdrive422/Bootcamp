// console.log("page loaded...");

function hide(elementName){
    elementName.remove()
}

// <<--Code below will work for one instance but not scaalbe-->>
// document.getElementById('joinButton').addEventListener('click', function(){
//     document.getElementById('joinBUtton').style = "display: none"
// })

function search(event) {
    event.preventDefault()
    let searchTerm = document.getElementById("searchText").value
    alert(`You are looking for ${searchTerm}`)
}   

// let likeCount = 212

// let macaronCount = document.getElementById("macaronCount")

// function likeCount(){
//     likeCount++
//     macaronCount.innerText = likeCount
// }
