import "./main.scss";
import { treeSum } from "./assets/components/TREESUM/TREESUM";

const root = document.querySelector('#root');

root.insertAdjacentHTML('beforeend', `<div> ${treeSum([ 5, 7, 
  [ 4, [2], 8, [1,3], 2 ], 
  [ 9, [] ], 
  1, 8
])} </div>`)

