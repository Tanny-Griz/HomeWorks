// 1 Создать функцию которая возмет всех юзеров http://jsonplaceholder.typicode.com/users, потом запросит массив альбомов и добавит каждому юзеру в массив albums все эти альбомы http://jsonplaceholder.typicode.com/albums смторим на userId. После запрашиваем photos http://jsonplaceholder.typicode.com/photos и добавлем все фотки в альбомы по albumId каждому юзеру.

const foo = async () => {
    let users = await fetch('http://jsonplaceholder.typicode.com/users')
    users = await users.json()

    let albumArr = await fetch('http://jsonplaceholder.typicode.com/albums')
    albumArr = await albumArr.json()

    let photosArr = await fetch('http://jsonplaceholder.typicode.com/photos')
    photosArr = await photosArr.json()

    for (let prop of users) {
        let filterAlbum = albumArr.filter(item => prop.id === item.userId)
        for (let prop of albumArr) {
            let filterphotosArr = photosArr.filter(item => prop.id === item.albumId)
            prop.photos = filterphotosArr
        }
        prop.albums = filterAlbum
    }
    console.log(users)
}
foo()

async function fooA() {
    let users = await fetch('http://jsonplaceholder.typicode.com/users');
    users = await users.json();
    let albums = await fetch('http://jsonplaceholder.typicode.com/albums');
    albums = await albums.json();
    let photos = await fetch('http://jsonplaceholder.typicode.com/photos');
    photos = await photos.json();
    users.map((user) => {
        user.albums = albums.filter(album => album.userId === user.id);
        albums.map((album) => album.photos = photos.filter(photo => photo.albumId === album.userId));
        return user;
    });
    return console.log(users)
}
fooA();
