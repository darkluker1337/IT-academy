export const treeSum =(n)=>{
    
    let arr = n.toString().split(',').map((a)=>+a).reduce((a,b)=> a+b)
    
    console.log(arr);
    return arr
}