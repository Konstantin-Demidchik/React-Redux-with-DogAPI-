export const GET_NEW_ARRAY_PHOTO = 'GET_NEW_ARRAY_PHOTO';


export function getNewArrayPhoto(name) {
  return {
    type: GET_NEW_ARRAY_PHOTO,
    name
  }
}
