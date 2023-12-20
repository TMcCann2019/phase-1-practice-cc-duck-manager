// write your code here!
fetch ("http://localhost:3000/ducks")
    .then ((resp) => resp.json())
    .then((data) => renderDucks(data))

const btn = document.querySelector('#duck-display-likes')

function renderDucks(ducksArr){
    const duckNav = document.querySelector('#duck-nav')
    
    ducksArr.forEach((ducksObj) =>{
        const img = document.createElement('img')
        img.src = ducksObj["img_url"]

        duckNav.appendChild(img)

        img.addEventListener('click', handleClickDucks)

        function handleClickDucks(){
            const h2 = document.querySelector('#duck-display-name')
            const img2 = document.querySelector('#duck-display-image')
            h2.textContent = ducksObj.name
            img2.src = ducksObj["img_url"]
            btn.textContent = `${ducksObj.likes} likes`
        }
    })
   
    btn.addEventListener('click', handleIncrement)
    
    function handleIncrement(){
        let currLikes = btn.textContent.split(" ")
        currLikes = currLikes[0]
        currLikes = parseInt(currLikes)
        //console.log(ducksObj)
        // let currLikes = ducksObj.likes
        currLikes = currLikes + 1
        btn.textContent = `${currLikes} Likes`
    }
}