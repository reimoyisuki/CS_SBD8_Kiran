import { useState, useEffect } from "react";
import Header from './components/Header';
import Hero from './components/Hero';
import ConsumerProducts from './components/ConsumerProducts';
import BusinessProducts from './components/BusinessProducts';
import About from './components/About';
import Footer from './components/Footer';

const response = {
  results: [
    {
      userId: 1,
      id: 1,
      title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      image: "https://picsum.photos/500",
    },
    {
      userId: 1,
      id: 2,
      title: "qui est esse",
      body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
      image: "https://picsum.photos/500",
    },
    {
      userId: 1,
      id: 3,
      title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
      image: "https://picsum.photos/500",
    },
    {
      userId: 1,
      id: 4,
      title: "eum et est occaecati",
      body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam\nquisquam unde voluptatem rerum illo velit",
      image: "https://picsum.photos/500",
    },
    {
      userId: 1,
      id: 5,
      title: "nesciunt quas odio",
      body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
      image: "https://picsum.photos/500",
    },
  ],
};

function App() {
  const [count, setCount] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (count !== 0 && count % 10 === 0) {
      alert(`${count} is divisible by 10`);
    }
  }, [count]);

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className="font-sans bg-white dark:bg-gray-900 text-gray-900 dark:text-white scroll-smooth min-h-screen">
        {/* Header */}
        <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

        <main>
          <section id="home">
            <Hero />
          </section>

          <section>
            <ConsumerProducts />
            <BusinessProducts />
          </section>

          <section id="profile">
            <About />
          </section>

          {/* Card Grid */}
          <section className="px-6 py-12 bg-gray-100 dark:bg-gray-800">
            <h2 className="text-3xl font-bold text-center mb-8">Explore Our Content</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {response.results.map((item) => (
                <div key={item.id} className="bg-white dark:bg-gray-700 rounded shadow-md p-4">
                  <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded mb-4" />
                  <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                  <p className="text-sm">{item.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Counter */}
          <section className="px-6 py-12 bg-white dark:bg-gray-900 text-center">
            <h2 className="text-3xl font-bold mb-4">Counter Demo</h2>
            <p className="text-4xl mb-4">{count}</p>
            <div className="flex justify-center space-x-4">
              <button onClick={() => setCount(count - 1)} className="px-4 py-2 bg-red-500 text-white rounded">-</button>
              <button onClick={() => setCount(0)} className="px-4 py-2 bg-gray-500 text-white rounded">Reset</button>
              <button onClick={() => setCount(count + 1)} className="px-4 py-2 bg-green-500 text-white rounded">+</button>
            </div>
          </section>

          <section id="contact">
            <Footer />
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
