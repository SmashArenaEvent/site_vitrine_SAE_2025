import PocketBase from 'pocketbase'

const url = 'https://lucas-bardey.pockethost.io/'
const client = new PocketBase(url)

import { type TypedPocketBase, type UsersResponse} from './pocketbase-types.js'
import { ref, onMounted } from 'vue'

export const pb = new PocketBase(import.meta.env.VITE_URL_POCKETBASE) as TypedPocketBase

pb.collection('equipes').getFullList()

export function logout() {
  pb.authStore.clear()
  //location.reload()
}

export async function loginWithGitHub() {
  const authData = await pb.collection('users').authWithOAuth2({ provider: 'github' })
  console.log('loginWithGitHub authData', authData)
}

export async function loginWithGoogle() {
  const authData = await pb.collection('users').authWithOAuth2({ provider: 'google' })
  console.log('logWithGoogle authData', authData)
}

export const user = ref<UsersResponse | null>(null)
pb.authStore.onChange((token, model) => {
  user.value = model as UsersResponse
}, true)

//Image aléatoire

export async function randomImage() {
  // Sélection aléatoire d'un ID dans idHeroList
  const randomIndex = Math.floor(Math.random() * idHeroList.length);
  const idSelection = idHeroList[randomIndex];

  // Récupération de l'image correspondant à l'ID sélectionné
  const records = await pb.collection('ImageHero').getOne(idSelection);
  return records;
}

console.log('test1');

const idHeroList = [
  '010000000000000',
  '020000000000000',
  '030000000000000',
  '040000000000000',
  '050000000000000',
  '060000000000000',
  '070000000000000',
  '080000000000000',
  '090000000000000',
  '110000000000000',
  '120000000000000',
  '130000000000000',
  '140000000000000',
  '150000000000000',
  '160000000000000',
  '170000000000000',
  '180000000000000',
  '190000000000000',
  '200000000000000'
];



// const HeroImgAleatoire = () => {
//   const randomNum = Math.floor(Math.random() * idHeroList.length)
//   idSelection.value = idHeroList[randomNum]
// }

// onMounted(() => {
//   HeroImgAleatoire()
// });

// console.log(idSelection)
// console.log('test2')