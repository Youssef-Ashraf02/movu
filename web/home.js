const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlODQ1M2NmZDExNjc0YzU2ODNmOWJkN2IwYjJiMzM3MiIsInN1YiI6IjY1ZmNkNjNmNzcwNzAwMDE3YzA5ODFiZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9MUqCTNqKGkkXrkC7VOqb_AEc-9aUleD3lR6CDQcayc'
    }
  };
  
// const getMovies = () => {  fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
//     .then(response => response.json())
//     .then(response => {
//         const  data = response.results;
//         data.map((item) => {
//             const name = item.original_title;
//             const imageUrl = "https://image.tmdb.org/t/p/w500/" + item.poster_path;
//             let avgRate = item.vote_average;
//             avgRate = Math.round(avgRate * 10) / 10;
//             const movie = "<div class='edit_movie'>  <img src='" + imageUrl + "' alt='Movie Poster'>" +
//             "<div class='star'> <i class='fa-solid fa-star' style='color: #FFD43B;'></i> <p> " + avgRate + " </p> </div> <button>" + name + "</button> </div>";
          
//             document.getElementsByClassName("movies")[0].innerHTML += movie;  
//         })
//     })
//     .catch(err => console.error(err));
// }


const nowShowing = () => {
  fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
  .then(response => response.json())
  .then(response => {
      const data = response.results;
      
      // document.getElementsByClassName("movies")[0].innerHTML = banner;
      let movies = [];
      data.map((item) => {
          const name = item.original_title;
          const imageUrl = "https://image.tmdb.org/t/p/w500/" + item.poster_path;
          let avgRate = item.vote_average;
          avgRate = Math.round(avgRate * 10) / 10;
          movies.push({name, imageUrl, avgRate});

      });
      let counter = 0;
      nowShowingfn(movies, counter);


      document.getElementById("btn-right").addEventListener('click', () => {
          if (movies.length - counter >= 6) {
              counter += 6;
              console.log("counterRight is "+counter);
              nowShowingfn(movies, counter);
          }
      });

      document.getElementById("btn-left").addEventListener('click', () => {
          if (counter >= 6) {
              counter -= 6;
              console.log("counterleft is "+counter);
              nowShowingfn(movies, counter);
          }
      });
  })
  .catch(err => console.error(err));
}


const topRated = () => {
  fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
  .then(response => response.json())
  .then(response => {
      const data = response.results;
      
      // document.getElementsByClassName("movies")[0].innerHTML = banner;
      let movies = [];
      data.map((item) => {
          const name = item.original_title;
          const imageUrl = "https://image.tmdb.org/t/p/w500/" + item.poster_path;
          let avgRate = item.vote_average;
          avgRate = Math.round(avgRate * 10) / 10;
          movies.push({name, imageUrl, avgRate});

      });
      let counter = 0;
      topRatedfn(movies, counter);


      document.getElementById("btn-right2").addEventListener('click', () => {
          if (movies.length - counter >= 6) {
              counter += 6;
              console.log("counterRight is "+counter);
              topRatedfn(movies, counter);
          }
      });

      document.getElementById("btn-left2").addEventListener('click', () => {
          if (counter >= 6) {
              counter -= 6;
              console.log("counterleft is "+counter);
              topRatedfn(movies, counter);
          }
      });
  })
  .catch(err => console.error(err));
}


const upComing = () => {
  fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
  .then(response => response.json())
  .then(response => {
      console.log(response.results);
      const data = response.results;
      
      // document.getElementsByClassName("movies")[0].innerHTML = banner;
      let movies = [];
      data.map((item) => {
          const name = item.original_title;
          const imageUrl = "https://image.tmdb.org/t/p/w500/" + item.poster_path;
          let avgRate = item.vote_average;
          avgRate = Math.round(avgRate * 10) / 10;
          movies.push({name, imageUrl, avgRate});

      });
      let counter = 0;
      upComingfn(movies, counter);


      document.getElementById("btn-right3").addEventListener('click', () => {
          if (movies.length - counter >= 6) {
              counter += 6;
              console.log("counterRight is "+counter);
              upComingfn(movies, counter);
          }
      });

      document.getElementById("btn-left3").addEventListener('click', () => {
          if (counter >= 6) {
              counter -= 6;
              console.log("counterleft is "+counter);
              upComingfn(movies, counter);
          }
      });
  })
  .catch(err => console.error(err));
}



function topRatedfn(movies, start) {
  const end = Math.min(start + 6, movies.length);
  console.log("star :" +start);
  console.log("end :"+ end);
  let moviesHTML = "";


  for (let i = start; i < end; i++) {
      const movie = "<div class='edit_movie'><img src='" + movies[i].imageUrl + "' alt='Movie Poster'>" +
          "<div class='star'><i class='fa-solid fa-star' style='color: #FFD43B;'></i> <p>" + movies[i].avgRate + "</p></div><button>" + movies[i].name + "</button></div>";
      moviesHTML += movie;
     
  }
  document.getElementsByClassName("moviesList")[0].innerHTML = moviesHTML;
}

function nowShowingfn(movies, start) {
  const end = Math.min(start + 6, movies.length);
  console.log("star :" +start);
  console.log("end :"+ end);
  let moviesHTML = "";


  for (let i = start; i < end; i++) {
      const movie = "<div class='edit_movie'><img src='" + movies[i].imageUrl + "' alt='Movie Poster'>" +
          "<div class='star'><i class='fa-solid fa-star' style='color: #FFD43B;'></i> <p>" + movies[i].avgRate + "</p></div><button>" + movies[i].name + "</button></div>";
      moviesHTML += movie;
     
  }
  document.getElementsByClassName("nowShowing")[0].innerHTML = moviesHTML;
}

function upComingfn(movies, start) {
  const end = Math.min(start + 6, movies.length);
  console.log("star :" +start);
  console.log("end :"+ end);
  let moviesHTML = "";


  for (let i = start; i < end; i++) {
      const movie = "<div class='edit_movie'><img src='" + movies[i].imageUrl + "' alt='Movie Poster'>" +
          "<div class='star'><i class='fa-solid fa-star' style='color: #FFD43B;'></i> <p>" + movies[i].avgRate + "</p></div><button>" + movies[i].name + "</button></div>";
      moviesHTML += movie;
     
  }
  document.getElementsByClassName("upcomingList")[0].innerHTML = moviesHTML;
}



nowShowing();
topRated();
upComing();




