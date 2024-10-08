import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Statistics } from '../components/Statistics';
import './Home.css'; // Adjust the path as necessary

const Home = () => {
  return (
    <div className={`flex flex-col items-center justify-center min-h-screen`}>
      {/* Header Section */}
      <header className="text-center p-8">
        <h1 className="text-8xl font-extrabold lobster-regular">
          File sharing <br /> options by <br /> creatives, for <br /> creatives
        </h1>
        <p className="mt-4 text-2xl">
          Simplify your workflow so you can focus on what matters most,
          whether you’re moving ideas forward or making beautiful decks.
        </p>
      </header>

     {/* New WeTransfer-like Component Section */}
<section className="container py-24 sm:py-32 bg-red-700 text-white rounded-lg relative overflow-hidden">
  <div className="flex flex-col md:flex-row items-center justify-between">
    {/* Text Section */}
    <div className="flex-1 mb-6 md:mb-0 md:w-1/2 pr-4">
      <h2 className="text-4xl font-bold">Put your ideas in motion</h2>
      <p className="mt-4 text-xl">
        Keep your creativity flowing and ship products faster with a tool that makes light work of sending, sharing, and reviewing work.
      </p>
      <Button className="mt-6" variant="outline">
        Learn more
      </Button>
    </div>

    {/* Single Image Section */}
    <div className="flex-shrink-0 mt-6 md:mt-0 md:w-1/2">
      <img
        className="w-full rounded-lg object-cover" // Make it responsive
        src="src/components/image.png" // Change this to your image path
        alt="Descriptive alt text"
      />
      {/* Circular Progress Indicator */}
      
    </div>
  </div>
</section>


      <section id="about" className="container py-24 sm:py-32">
        <div className="bg-muted/50 border rounded-lg py-12">
          <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
            <img
              alt=""
              className="w-[300px] object-contain rounded-lg"
            />
            <div className="bg-green-0 flex flex-col justify-between">
              <div className="pb-6">
                <h2 className="text-3xl md:text-4xl font-bold">
                  <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                    About{" "}
                  </span>
                  Company
                </h2>
                <p className="text-xl text-muted-foreground mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit.
                </p>
              </div>
              <Statistics />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-8">
        {[...Array(4)].map((_, index) => (
          <Card key={index} className={`shadow-md bg-white text-black dark:bg-gray-800 dark:text-white`}>
            <h2 className="text-2xl font-semibold mb-2">Product {index + 1}</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Description of the product goes here.
            </p>
            <Button className="mt-4">
              Learn more
            </Button>
          </Card>
        ))}
      </section>
    </div>
  );
};

export default Home;
