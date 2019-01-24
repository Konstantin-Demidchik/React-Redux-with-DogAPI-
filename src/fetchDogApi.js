export const getResponsePhotoDogs = async (n) => {
  const apiDog = await fetch(`https://dog.ceo/api/breed/${n}/images`)
  .then(response => response.json());
    return apiDog.message;
}


export const getLibraryNamesDogs = async () => {
  const library = await fetch(`https://dog.ceo/api/breeds/list/all`)
  .then(response => response.json());


  return library.message;
}
