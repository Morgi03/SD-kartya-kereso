
let SDtomb = [
    {
      "nev": "Maxi Ultra",
      "meret": "128"
    },
    {
      "nev": "Maxi Ultra S",
      "meret": "256"
    },
    {
      "nev": "Maxi Ultra X",
      "meret": "512"
    },
    {
      "nev": "Átlagos SD kártya",
      "meret": "128"
    },
    {
      "nev": "Átlagos SD kártya 2",
      "meret": "256"
    },
    {
      "nev": "Átlagos SD kártya 2.1",
      "meret": "256"
    },
    {
      "nev": "Ólcsó microSD",
      "meret": "32"
    },
    {
      "nev": "Kevésbé olcsó microSD",
      "meret": "64"
    }
  ]



  document.addEventListener('DOMContentLoaded', () =>{

    document.getElementById('search').addEventListener('input', ()=>{
      let inputvalue = document.getElementById('search');
      if(inputvalue.value.length >= 3) {
        const keres = query => SDtomb.filter(s => s.includes(query));
        console.log(keres(inputvalue.value));
      }


    });

  });
  