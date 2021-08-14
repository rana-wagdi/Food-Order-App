import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from './components/Meals/Meals'
import Cart from './components/Cart/Cart';
import CartProvider from "./store/CartProvuder";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hiderCartHandler = () => {
    setCartIsShown(false)
  }

  return (
    <CartProvider>
    {cartIsShown && <Cart onClose={hiderCartHandler} />}
    
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
