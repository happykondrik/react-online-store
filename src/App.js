import Card from './components/Card/Card'
import Header from './components/Header'
import Drawer from './components/Drawer'

const computers = [
  { title: 'Notebook Apple MacBook Air 13" M1 256GB 2020 (MGN63) Space Gray', price: 1265, imageUrl: '/img/computers/1.png' },
  { title: 'Notebook Apple MacBook Air 13" M1 256GB 2020 (MGN93) Silver', price: 1265, imageUrl: '/img/computers/1.png' },
  { title: 'Notebook Apple MacBook Air 13" M1 256GB 2020 (MGND3) Gold', price: 1265, imageUrl: '/img/computers/1.png' },
  { title: 'Notebook Apple MacBook Air 13" M1 512GB 2020 (MGNE3) Gold', price: 1600, imageUrl: '/img/computers/1.png' },
  // {name: 'Ноутбук Apple MacBook Air 13" M1 512GB 2020 (MGNA3) Silver', price: 1600, imageUrl: '/img/computers/1.png'},
  // {name: 'Ноутбук Apple MacBook Air 13" M1 512GB 2020 (MGN73) Space Gray', price: 1600, imageUrl: '/img/computers/1.png'}
];

function App() {
  return (
    <div className="wrapper">
      <Drawer />
      <Header />
      <div className="content">
        <div className="search">
          <h1>Computer catalog</h1>
          <div className="search-block">
            <img width={14} height={14} src="/img/search.svg" alt="Search" />
            <input placeholder="Search..." />
          </div>
        </div>

        <div className="computers">
          {computers.map((obj) => (
            <Card
              title={obj.title}
              price={obj.price}
              imageUrl={obj.imageUrl}
              onClick={() => console.log(obj)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
