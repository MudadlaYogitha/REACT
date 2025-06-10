function List2() {
  const fruits = [
    { id: 1, name: "apple", cal: 95 },
    { id: 2, name: "orange", cal: 45 },
    { id: 3, name: "banana", cal: 105 },
    { id: 4, name: "pineapple", cal: 37 }
  ];

  const lowcals = fruits.filter((fruit) => fruit.cal < 100);

  const listItems = lowcals.map((lowcal) => (
    <li key={lowcal.id}>
      {lowcal.name}:&nbsp;<b>{lowcal.cal}</b>
    </li>
  ));

  return <ul>{listItems}</ul>;
}

export default List2;
