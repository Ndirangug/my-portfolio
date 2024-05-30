// HeroSection.tsx
const HeroSection = () => {
    return (
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold mb-4">Hello, I'm Pawan.</h1>
          <p className="text-xl mb-8">A Full-Stack Developer with expertise in Web, Blockchain, and DevOps.</p>
          <a
            href="mailto:pawanudassi@hotmail.com"
            className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-md"
          >
            Contact me
          </a>
        </div>
      </section>
    );
  };
  
  export default HeroSection;