// 1 Создать функцию которая возмет всех юзеров http://jsonplaceholder.typicode.com/users, потом запросит массив альбомов и добавит каждому юзеру в массив albums все эти альбомы http://jsonplaceholder.typicode.com/albums смторим на userId. После запрашиваем photos http://jsonplaceholder.typicode.com/photos и добавлем все фотки в альбомы по albumId каждому юзеру.

const foo = async () => {
    let users = await fetch('http://jsonplaceholder.typicode.com/users')
    users = await users.json()

    let albumArr = await fetch('http://jsonplaceholder.typicode.com/albums')
    albumArr = await albumArr.json()

    let photosArr = await fetch('http://jsonplaceholder.typicode.com/photos')
    photosArr = await photosArr.json()
    for (let user in users) {
        let filterAlbum = albumArr.filter(item => users[user].id === item.userId)
        for (let id in albumArr) {
            let filterphotosArr = photosArr.filter(item => albumArr[id].id === item.albumId)
            albumArr[id].photos = filterphotosArr
        }
        users[user].albums = filterAlbum
    }
    console.log(users)
}
foo()


