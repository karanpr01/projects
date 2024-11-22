const button = document.querySelector('button')
const main = document.querySelector('.main')
const requestUrl = 'https://api.github.com/users/hiteshchoudhary'
const xhr = new XMLHttpRequest();
xhr.open('GET', requestUrl)
xhr.onreadystatechange = function(){
    if (xhr.readyState === 4) {
        const data = JSON.parse(this.responseText)
        // console.log(typeof data);
        const followers = (data.followers);
        // console.log(data);
        const img = data.avatar_url;
        const bio = (data.bio);
        const name =(data.name);
        const location =(data.location);
        const following = (data.following)
        button.addEventListener('click' , function (){
            console.log('button cilcked')
            main.innerHTML = `
            <div class="card-back">
                <div class="card-main">
                    <div class="porfile-img">
                        <img src="${img}" alt="porfile-img">
                    </div>
                    <div class="profile-info">
                        <h1>
                        ${name}
                        </h1>
                        <div class="location"> <img src="img/location.png" alt="location"> ${location}</div>
                        <div class="follow">
                            <h3>followers: ${followers}</h3>
                            <h3>following: ${following}</h3>
                        </div>
                        <div class="bio">
                        ${bio}
                        </div>
                    </div>
                </div>
            </div>
            `
        })
    }
}
// console.log(xhr)
xhr.send();


