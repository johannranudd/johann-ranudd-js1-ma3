/* https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=8191a470081345a5b346eaaf44d8a30f */
// question 1
const getRemainder = (a, b) => a % b;

console.log(getRemainder(1043, 77));
// question 2

const outElem = document.querySelector('.out-elem');
const url =
  'https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=8191a470081345a5b346eaaf44d8a30f';

function getData(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      displayData(data.results, outElem);
    })
    .catch((error) =>
      console.error(
        error,
        'an error has occured, please check: getData() function'
      )
    );
}

getData(url);

const displayData = (array, outElem) => {
  outElem.innerHTML = '';
  const spinner = document.createElement('div');
  spinner.classList.add('lds-dual-ring');
  document.body.appendChild(spinner);
  /*   setTimeout is only used to show the spinner for longer time
    otherwise i would have to set the internet speed down. I wouldn't use setTimeout if this
    wasn't a school project
*/
  setTimeout(() => {
    try {
      const sliced = array.slice(0, 8);
      sliced.map((item) => {
        const { name, rating, tags } = item;
        outElem.innerHTML += `<li>
    <p>Title: <strong>${name}</strong></p>
    <p>Rating: <strong>${rating}</strong></p>
    <p>Number of tags: <strong>${tags.length}</strong></p>
    </li>`;
      });
    } catch (e) {
      console.error(
        e,
        'an error has occured, please check: displayData() function'
      );
    } finally {
      spinner.remove();
    }
  }, 1000);
};
