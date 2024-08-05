// import _ from 'lodash'
// import cube from './modules.js'
import * as R from './myData.json'
// import myData from './myData.json'
// import axios from 'axios'

// console.log(myData);
// const user = {
//     name : "Mingss",
//     age : 22,
//     email : [
//         'designnmh@gmail.com',
//         'kim@gmail.com'
//     ]
// }

// localStorage.setItem('user', JSON.stringify(user))
// console.log(localStorage.getItem('user'))

// console.log('user', user)

// const str = JSON.stringify(user)
// console.log('str', str)
// console.log(typeof str)

// const obj = JSON.parse(str)
// console.log('obj', obj)

// const str = localStorage.getItem('user')
// const obj = JSON.parse(str)
// obj.age = 22
// console.log(obj)
// localStorage.setItem('user', JSON.stringify(obj))

// export const arrs = [10, 20, 30, 40];

// export {arrs2, getName};
// const arrs2 = [100, 200, 300, 400];
// function getName() {
//     return "aaaaaa"
// }

// console.log(_.camelCase('hello world'));
// console.log(R.arrs);
// console.log(R.getName());

// const user = {
//     name : "mingss",
//     age : 22,
//     email : [
//         'designnmh@gmail.com',
//         'kim@gmail.com'
//     ]
// }
// const copyUser = user;
// console.log(copyUser === user);

// user.age = 20;
// console.log(user);
// console.log(copyUser);

// const copyUser = Object.assign({}, user);
// console.log(user === copyUser);

// user.age = 20;
// console.log(user)
// console.log(copyUser)

// const copyUser = {...user};
// console.log(copyUser === user);

// user.age = 20;
// console.log(user);
// console.log(copyUser);

// user.email.push('kim@gmail.com');
// console.log(user.email === copyUser.email);

// console.log(user);
// console.log(copyUser);

// const copyUser = _.cloneDeep(user);
// console.log(copyUser === user);

// user.age = 20
// console.log(user);
// console.log(copyUser);

// user.email.push('kim@gmail.com');
// console.log(user.email === copyUser.email);
// console.log(user);
// console.log(copyUser);

// const userA = [
//     {userID: '1', name: "mingss"},
//     {userID: '2', name: "Kim"},
// ]
// const userB = [
//     {userID: '3', name: "mingss"},
//     {userID: '4', name: "Lee"},
// ]
// const userC = userA.concat(userB);
// console.log(userC);
// console.log(_.uniqBy(userC, 'userId'));

// const userD = _.unionBy(userA, userB, 'userId');
// console.log(userD);

// const users = [
//     {userId: '1', name: "mingss"},
//     {userId: '2', name: "kim"},
//     {userId: '3', name: "lee"},
//     {userId: '4', name: "park"}
// ]

// const foundUser = _.find(users, {name: 'lee'});
// console.log(foundUser);
// const foundUserIndex = _.findIndex(users, {name: 'lee'});
// console.log(foundUserIndex)
// _.remove(users, {name:'mingss'});
// console.log(users)

// let array = [1, 2, 3, 4]
// let evens = _.remove(array, function(n) {
//     return n % 2 === 0 
// })
// console.log(array);
// console.log(evens);

// let myFriend = [
//     {name: 'Kim', active: false},
//     {name: 'Lee', active: false},
// ]
// console.log(_.every(myFriend, {name: 'Kim', active: false}));
// console.log(_.every(myFriend, ['active', false]));
// console.log(_.every(myFriend, 'active'));

// let mySister = [
//     {name: 'Kim', age: '22', city: 'Seoul'},
//     {name: 'Lee', age: '22', city: 'Daegu'},
//     {name: 'Lee', age: '23', city: 'Busan'},
//     {name: 'Park', age: '24', city: 'Seoul'},
// ]
// console.log(_.filter(mySister, {age: 22, name: 'Kim'}));
// console.log(_.filter(mySister, sister => sister.age === 22));

// function getMovies() {
//     axios
//     .get('http://www.omdbapi.com/?i=tt3896198&apikey=370a988a&s=PARASITE')
//     .then((response) => {
//         console.log(response)
//         const h1El = document.querySelector('h1')
//         const imgEl = document.querySelector('img')
//         const yearEl = document.querySelector('year')
//         const typeEl = document.querySelector('type')
//         h1El.textContent = response.data.Search[0].Title
//         imgEl.src = response.data.Search[0].Poster
//         yearEl.textContent = response.data.Search[0].Year
//         typeEl.textContent = response.data.Search[0].Type
    
//     })
// }
// getMovies();

// 자전거 지도 만들기
const API_KEY = '58637a676a68797539344a54757662'
async function getData() {
    const url = `http://openapi.seoul.go.kr:8088/${API_KEY}/json/bikeList/1/10/`
    const response = await fetch(url);
    const data = await response.json();
    const locations = data.rentBikeStatus.row.map(spot => [spot.stationName,spot.stationLatitude, spot.stationLongitude, spot.parkingBikeTotCnt])
    console.log(data)
    console.log("locations", locations);
    drawMap(locations)
}
getData();

function drawMap(locations){
    const map = new google.maps.Map(document.getElementById("map"),{
        zoom: 13,
        center: new google.maps.LatLng(locations[0][1], locations[0][2]),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
    });

    const infowindow = new google.maps.InfoWindow();
    locations.forEach((location, i) => {
        const marker = new google.maps.Marker({
            position: new google.maps.LatLng(location[1],location[2]),
            map: map,
            title: location[0]
        });

        marker.addListener('click', () => {
            infowindow.setContent(location[3]);
            infowindow.open(map, marker);
        })
    })
}