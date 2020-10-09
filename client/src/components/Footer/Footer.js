import React from 'react';

import './Footer.css'

export default class Footer extends React.Component {
  render(){
    return (
      <footer className="footer text-center py-2">
        <p className="text-white">&copy; 2020-2021 The Sciences and Engineering Squad</p>
      </footer>
    );
  }
}