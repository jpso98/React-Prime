import AsyncStorage from '@react-native-async-storage/async-storage'

//Buscar os filmes salvos
export async function getMovieSave(key) {
  const myMovies = await AsyncStorage.getItem(key)

  let moviesSave = JSON.parse(myMovies) || []

  return moviesSave
}

//Salvar um novo filme
export async function saveMovie(key, newMovie) {
  let movieStored = await getMovieSave(key)

  //Se rive algum filme salvo com esse mesmo ID / ou duplicado precisamos ignorar
  const hasMovie = movieStored.some( item => item.id === newMovie.id)

  if(hasMovie) {
    console.log('esse filme ja esta na lista')
    return
  }

  movieStored.push(newMovie)

  await AsyncStorage.setItem(key, JSON.stringify(movieStored))
  console.log('fime salvo com sucesso')
}

//deletar algum filme específico
export async function deleteMovie(id) {
  let moviesStored = await getMovieSave('@primereact')

  let myMovies = moviesStored.filter(item => {
    return (item.id !== id)
  })

  await AsyncStorage.setItem('@primereact', JSON.stringify(myMovies))
  console.log('filme deletado')
  return myMovies
}

//Filtar se algum filme ja esta salvo
export async function hasMovie(movie){
  let moviesStored = await getMovieSave('@primereact')

  const hasMovie = moviesStored.find( item => item.id === movie.id)

  if(hasMovie){
    return true
  }

  return false
}