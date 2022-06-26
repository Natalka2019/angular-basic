const mockUsersJSON = `[
  {
    "id": 1,
    "firstName": "Leanne",
    "lastName": "Graham",
    "email": "Sincere@april.biz",
    "phone": "1-770-736-8031",
    "avatar": "https://cdn4.iconfinder.com/data/icons/avatar-vol-1-3/512/9-256.png"
  },
  {
    "id": 2,
    "firstName": "Ervin",
    "lastName": "Howell",
    "email": "Shanna@melissa.tv",
    "phone": "010-692-6593",
    "avatar": "https://cdn4.iconfinder.com/data/icons/avatar-vol-1-3/512/11-256.png"
  },
  {
    "id": 3,
    "firstName": "Clementine",
    "lastName": "Bauch",
    "email": "Nathan@yesenia.net",
    "phone": "1-463-123-4447",
    "avatar": "https://cdn4.iconfinder.com/data/icons/avatar-vol-1-3/512/7-256.png"
  },
  {
    "id": 4,
    "firstName": "Patricia",
    "lastName": "Lebsack",
    "email": "Julianne.OConner@kory.org",
    "phone": "493-170-9623",
    "avatar": "https://cdn4.iconfinder.com/data/icons/avatar-vol-1-3/512/8-256.png"
  },
  {
    "id": 5,
    "firstName": "Chelsey",
    "lastName": "Dietrich",
    "email": "Lucio_Hettinger@annie.ca",
    "phone": "(254)954-1289",
    "avatar": "https://cdn4.iconfinder.com/data/icons/avatar-vol-1-3/512/3-256.png"
  },
  {
    "id": 6,
    "firstName": "Mrs. Dennis",
    "lastName": "Schulist",
    "email": "Karley_Dach@jasper.info",
    "phone": "1-477-935-8478",
    "avatar": "https://cdn4.iconfinder.com/data/icons/avatar-vol-1-3/512/4-256.png"
  },
  {
    "id": 7,
    "firstName": "Kurtis ",
    "lastName": "Weissnat",
    "email": "Telly.Hoeger@billy.biz",
    "phone": "210.067.6132",
    "avatar": "https://cdn4.iconfinder.com/data/icons/avatar-vol-1-3/512/2-256.png"
  },
  {
    "id": 8,
    "firstName": "Nicholas",
    "lastName": "Runolfsdottir V",
    "email": "Sherwood@rosamond.me",
    "phone": "586.493.6943",
    "avatar": "https://cdn4.iconfinder.com/data/icons/avatar-vol-1-3/512/1-256.png"
  },
  {
    "id": 9,
    "firstName": "Glenna",
    "lastName": "Reichert",
    "email": "Chaim_McDermott@dana.io",
    "phone": "(775)976-6794",
    "avatar": "https://cdn4.iconfinder.com/data/icons/avatar-vol-1-3/512/10-256.png"
  },
  {
    "id": 10,
    "firstName": "Clementina",
    "lastName": "DuBuque",
    "email": "Rey.Padberg@karina.biz",
    "phone": "024-648-3804",
    "avatar": "https://cdn4.iconfinder.com/data/icons/avatar-vol-1-3/512/5-256.png"
  }
]`;

export interface IUser {
  id: number | string;
  firstName: string;
  lastName: string;
  email: string;
  phone: number | string;
  avatar: string;
}

export const mockUsers: IUser[] = JSON.parse(mockUsersJSON);