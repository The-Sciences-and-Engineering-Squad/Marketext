import React, {useState,useEffect} from 'react';
import './Home.css'


function HomePage(props) {
  const [initialData,setInitialData] = useState([{}])

  useEffect(() => {
    fetch('/hello').then(
      response => response.json()
    ).then(data => console.log(data))
  });

  return (
    <div>This is the Home Page.</div>
  );
}

export default HomePage;