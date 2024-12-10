import React from "react";


function Member(props){

  const people = [
    { id: 1, name: "Noor Mohamed Abdikadir", education: "Graduate", age: 24, weight: 68 },
    { id: 2, name: "Ali Hassan", education: "Undergraduate", age: 22, weight: 70 },
    { id: 3, name: "Fatima Ahmed", education: "Graduate", age: 26, weight: 60 },
    { id: 4, name: "Mohamed Abdi", education: "High School", age: 19, weight: 75 },
    { id: 5, name: "Amina Yusuf", education: "Postgraduate", age: 28, weight: 65 }
  ];
  



    return(
      {people}
    )

}

export default Member;