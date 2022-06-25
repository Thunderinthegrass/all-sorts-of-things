const listPromise = fetch('https://api.sampleapis.com/countries/countries');
listPromise
.then(data => data.json())
.then(countries => console.log(countries))
.catch(err => {
  console.log('Ошибка', err)
})//получение списка стран


