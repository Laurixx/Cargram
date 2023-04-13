const posts = [
    {
        name:"Ethan Whites",
        username:"ethan_wht ",
        location:"Odessa, Texas",
        avatar:"images/1-avatar.jpg",
        avatarAlt:"Provile picture of Ethan",
        featurePost:"images/1.jpg",
        postAlt:"Dodge challenger RT parked",
        description:"My Dodge Challenger R/T never fails to turn heads when I'm cruising down the road. The classic muscle car look paired with modern performance features makes for one incredible ride",
        likes:32,
        comments:["damn boy that just looks right","SHIT, no more drag racing with you"],
        liked: false
    },
    {
        name:"Liam Brown",
        username:" liam_brown ",
        location:"Miami",
        avatar:"images/2-avatar.jpg",
        avatarAlt:"Provile picture of Liam",
        featurePost:"images/2.jpg",
        postAlt: "new rims on liam's Lambo",
        description:"Just got new rims for my baby, and she's looking hotter than ever.",
        likes:850,
        comments:["You bettr dont scratch those Liam","What's this third set of rims in a year?"],
        liked: false
    },
    {
        name:" Ava Williams",
        username:"ava_smith ",
        location:"California",
        avatar:"images/3-avatar.jpg",
        avatarAlt:"Provile picture of Ava",
        featurePost:"images/3.jpg",
        postAlt:" Yellow supra not stock , in top of a garage building",
        description:"Cruising around in my Supra, feeling like a total badass. It may not be the flashiest ride out there, but it's got some serious power under the hood",
        likes:331,
        comments:["For all the haters ,I saw whats under that hood you better take your hands of the keys"],
        liked: false
    },
    {
        name: "Emma Davi",
        username:"emma_rose ",
        location:"Frankfurt, Germany",
        avatar:"images/4-avatar.jpg",
        avatarAlt:"Provile picture of Emma",
        featurePost:"images/4.jpg",
        postAlt: "Emma's Corvette , purple wraped with some blue lines on the sunset",
        description:"I mean, it's not everyday you get to drive a Corvette, especially one that's custom wrapped. People can't help but stare as I fly by, and I gotta say, it's kind of fun being the center of attention.",
        likes:268,
        comments:["You know there are about 20 of those in Germany Yeah ?"],
        liked: false
    },
    {
        name:"Caleb Johnson",
        username:"caleb_johnson ",
        location:"Cornwall, UK",
        avatar:"images/5-avatar.jpg",
        avatarAlt:"Provile picture of Caleb",
        featurePost:"images/5.jpg",
        postAlt: "Classic ferray low to the ground on the streets of Cornwall ",
        description:"When I'm behind the wheel of my Ferrari, I feel like I'm living in a movie. The low profile and sleek lines just scream luxury and power. And honestly, it's not just a car - it's a whole vibe.",
        likes:97,
        comments:["she will hate you at a speed bump"],
        liked: false
    }

]
const likeIcon = "icons/heart (4).png"
const commIcon = "icons/icon-comment.png"
const dmIcon = "icons/icon-dm.png"
const saveIcon = "icons/save-instagram (1).png"


function renderPosts () {
    for (let i = 0; i < posts.length; i++) {
        
    const postContainer = document.createElement("section")
    postContainer.classList.add('post')
  
    const postHeader = document.createElement('div')
    postHeader.classList.add('post-header')
 

    const avatar = document.createElement('img')
    avatar.classList.add('avatar')
    avatar.src = posts[i].avatar
    avatar.alt = posts[i].avatarAlt
  

    const nameLocation = document.createElement('div')

    const name = document.createElement('p')
    name.textContent = posts[i].name

    const location = document.createElement('p')
    location.textContent = posts[i].location

    const featureImgConstainer = document.createElement('div')
    featureImgConstainer.classList.add('feature')

    const featureImg = document.createElement('img')
    featureImg.src = posts[i].featurePost
    featureImg.alt = posts[i].postAlt
    
    const postFooter = document.createElement('div')
    postFooter.classList.add('post-footer')


    const icons = document.createElement('div')
    icons.classList.add('icons')


    const likeCommDm = document.createElement('div')
    likeCommDm.classList.add('like-comm-dm')
  

    const heart = document.createElement('img')
    heart.src = likeIcon
    const comm = document.createElement('img')
    comm.src = commIcon
    const dm = document.createElement('img')
    dm.src = dmIcon

    const saveContainer = document.createElement('div')
    saveContainer.classList.add('icons')

    const save = document.createElement('img')
    save.src = saveIcon

    const likes = document.createElement('p')
    likes.classList.add('likes')
    likes.textContent = posts[i].likes + " likes"

    const description = document.createElement('p')
    description.classList.add('description')
    description.textContent = posts[i].description

    const username = document.createElement('span')
    username.textContent = posts[i].username

    // const comments = documnet.createElement('div')
    // comments.classList.add('comments')
    
    // comments.innerHTML = `${posts[i].username} ${posts[i].comments[i]}`


 document.body.append(postContainer)
 postContainer.append(postHeader)
 postHeader.append(avatar)
 postHeader.append(nameLocation)
 nameLocation.append(name)
 nameLocation.append(location)
 postContainer.append(featureImgConstainer)
 featureImgConstainer.append(featureImg)
 postContainer.append(postFooter)
 postFooter.append(icons)
 icons.append(likeCommDm)
 likeCommDm.append(heart,comm,dm)
 icons.append(saveContainer)
 saveContainer.append(save)
 postFooter.append(likes)
 postFooter.append(description)
 description.insertBefore(username, description.firstChild)
//  postFooter.append(comments)
 
    
}

}
renderPosts()
// const featureImg = document.querySelector('.feature img')

// featureImg.addEventListener('click', function() {
//     for (let i = 0; i < posts.length; i++) {
//         if (posts[i].liked === false) {
//             posts[i].liked = true
//          posts[i].likes++
//          const likesUP = document.querySelector('.likes')
//          likesUP.textContent = posts[i].likes + " likes"
//          console.log(posts[0].likes);
//         }
        
//     }
  
// })

console.log(posts[0].likes);