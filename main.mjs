const data = {
    "users": [
      {
        "firstName": "Dennis",
        "lastName": "Ritchie",
        "dateOfBirth": "September 9, 1941",
        "knowsAs": "created the C programming language"
      },
      {
        "firstName": "Steve",
        "lastName": "Jobs",
        "dateOfBirth": "February 24, 1955",
        "knowsAs": "co-founder of Apple Inc, Next, Pixar"
      },
      {
        "firstName": "Bill",
        "lastName": "Gates",
        "dateOfBirth": "February 24, 1955",
        "knowsAs": "co-founder of Microsoft"
      },
      {
        "firstName": "Alan",
        "lastName": "Turing",
        "dateOfBirth": "June 23, 1912",
        "knowsAs": "developed the first modern computer"
      }
    ]
  }
  


const result = JSON.parse(data);
console.log(result);