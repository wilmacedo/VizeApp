const currentId = 1;

const functions = [
  {
    id: 1,
    name: 'Luz',
    icon: 'lightbulb',
    status: false
  }
]

const rooms = [
  {
    id: 1,
    name: 'Quarto',
    backgroundImage: require('../assets/images/bedroom.jpg')
  },
  {
    id: 2,
    name: 'Cozinha',
    backgroundImage: require('../assets/images/kitchen.jpg')
  },
  {
    id: 3,
    name: 'Sala',
    backgroundImage: require('../assets/images/living.jpg')
  }
]

const profiles = [
  {
    id: 1,
    username: 'Wilson Macedo',
    nickname: 'Wil',
    notifications: true,
    avatar: require('../assets/images/avatar.png'),
  },
  {
    id: 2,
    username: 'Bianor Oliveia',
    nickname: 'Bianor',
    notifications: true,
    avatar: require('../assets/images/avatar2.png'),
  }
];

export {
  profiles,
  currentId,
  rooms,
}