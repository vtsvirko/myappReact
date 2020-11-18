import React, {Component } from 'react';
import data from './data.json';

function ListClasses() {
  return (
    <div className="ListClasses">
  <ul>
  {data.map(function(classes){
    return<li>{classes.code}-{classes.title}-{classes.unit}</li>
  })}
  </ul>
    </div>
  );
}

export default ListClasses;