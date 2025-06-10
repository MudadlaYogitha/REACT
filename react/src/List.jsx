//rendering list
function List(){
    const fruits=["apple ","orange ","banana ","pineapple "];
    const listItems=fruits.map(fruit=><li>{fruit}</li>);
    return(<ul>{listItems}</ul>);

}
export default List