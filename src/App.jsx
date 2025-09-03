import { useState, useRef } from 'react';
import ContactModal from './components/ContactModal';

const colors = {
  navy:    '#0C1F2F',  // deep brick‑blue from the logo
  gold:    '#A78B44',  // warm gold from the logo
  offWhite:'#F9F8F3',  // very light background tint
  darkBg:  '#1D1D1D',  // your existing dark gray
  footerBg:'#0E144A',  // your existing footer navy
};

const images = [
  '/assets/pic3.jpg',
  '/assets/pic4.jpg',
  '/assets/pic6.jpg',
];

const testimonials = [
  {
    name: "Sarah J.",
    text: "FORTIS transformed our crumbling wall into something truly beautiful. The team was professional, quick, and respectful throughout.",
  },
  {
    name: "Martin L.",
    text: "We were worried about the cost, but FORTIS gave us a fair quote and delivered beyond our expectations. Highly recommend!",
  },
  {
    name: "Gemma T.",
    text: "I’ve had neighbours stop me to ask who did the pointing work — that’s how good it looks. Thank you FORTIS!",
  },
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const projectScrollRef = useRef(null);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  // Tailwind for spacing & shape, inline for colors
  const buttonClass = "px-6 py-2 rounded-full font-bold shadow hover:bg-gray-200 transition";
  const buttonStyle = { backgroundColor: colors.offWhite, color: colors.navy };

  const prevSlide = () => {
    setCurrentIndex(i => (i - 1 + images.length) % images.length);
  };
  const nextSlide = () => {
    setCurrentIndex(i => (i + 1) % images.length);
  };
  const scrollLeft = () => {
    projectScrollRef.current.scrollBy({ left: -320, behavior: 'smooth' });
  };
  const scrollRight = () => {
    projectScrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
  };
  const prevTestimonial = () => {
    setTestimonialIndex(i => (i - 1 + testimonials.length) % testimonials.length);
  };
  const nextTestimonial = () => {
    setTestimonialIndex(i => (i + 1) % testimonials.length);
  };

  return (
    <div className="text-white font-sans bg-white">
      {/* Hero Section */}
      <div
        className="h-screen w-screen text-white relative overflow-hidden"
        style={{ backgroundColor: colors.navy }}
      >
        {/* Top nav */}
        <div className="flex justify-between items-center px-6 py-4">
          
            <img
              src="/assets/logo.jpg"
              alt="FORTIS Logo"
              className="h-20 w-auto object-contain rounded-full"
            />
        
          <button
            onClick={() => setShowModal(true)}
            className={buttonClass}
            style={buttonStyle}
          >
            GET IN TOUCH
          </button>
        </div>

        {/* Hero Heading aligned right */}
        <div className="flex justify-end px-6 md:px-20 mt-6">
          <h2 className="text-5xl md:text-7xl font-extrabold uppercase leading-tight text-right">
            REPOINTING & RESTORATION<br />SPECIALISTS
          </h2>
        </div>

        {/* Image carousel */}
        <div className="relative w-[80%] ml-[6%] mt-6">
          <button
            onClick={prevSlide}
            className="absolute left-2 md:-left-12 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full shadow z-10"
            style={{ backgroundColor: colors.offWhite, color: colors.navy }}
          >
            ◀
          </button>
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full h-[450px] object-cover rounded shadow"
          />
          <button
            onClick={nextSlide}
            className="absolute right-2 md:-right-12 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full shadow z-10"
            style={{ backgroundColor: colors.offWhite, color: colors.navy }}
          >
            ▶
          </button>
        </div>
      </div>

      {/* Services Section */}
      <div
        className="text-white py-16 px-4 md:px-20"
        style={{ backgroundColor: colors.darkBg }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-10">
          <span className="block">Our</span>
          <span className="block">Services</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Brick Repointing",
              desc: "We renew deteriorating mortar to extend the life and look of your property.",
              icon: "🧱",
            },
            {
              title: "Wall Restoration",
              desc: "From historic facades to modern walls, we restore structural integrity and charm.",
              icon: "🏗️",
            },
            {
              title: "Exterior Painting",
              desc: "Add colour and protection with our professional painting service.",
              icon: "🎨",
            },
            {
              title: "Indoor Painting",
              desc: "Refresh your interior with clean lines, smooth finishes, and long-lasting colour.",
              icon: "🖌️",
            },
            {
              title: "Crack Repairs",
              desc: "We fill and repair structural cracks to stop damage from spreading.",
              icon: "🪛",
            },
            {
              title: "Windows & Doors",
              desc: "We restore and repaint window and door frames to match your exterior.",
              icon: "🚪",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white text-black p-6 rounded shadow-md hover:shadow-xl transition"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="font-bold text-lg mb-2">{service.title}</h3>
              <p className="text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
        <br />
        <button
          onClick={() => setShowModal(true)}
          className={buttonClass}
          style={buttonStyle}
        >
          GET IN TOUCH
        </button>
      </div>

      {/* Our Projects Section */}
      <div className="bg-white text-black py-16 px-4 md:px-20 relative">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-10">
          <span className="block">Our</span>
          <span className="block">Projects</span>
        </h2>
        <button
          onClick={scrollLeft}
          className="absolute left-2 top-[60%] -translate-y-1/2 w-10 h-10 z-10 rounded-full shadow hidden sm:flex items-center justify-center"
          style={{ backgroundColor: colors.navy, color: colors.offWhite }}
        >
          ◀
        </button>
        <div
          ref={projectScrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth pb-4 px-1 sm:px-10"
        >
          {[
            { title: "Wall Restoration", src: "/assets/projects/brick_wall.JPEG" },
            { title: "Repointing", src: "/assets/projects/bricks.JPEG" },
            { title: "Brick Work and Repointing", src: "/assets/projects/house.JPG" },
            { title: "Full House Refresh", src: "/assets/projects/white_doors.jpeg" },
            { title: "Painting", src: "/assets/projects/white_house.jpeg" },
          ].map((project, index) => (
            <div key={index} className="inline-block w-[250px] md:w-[300px] shrink-0">
              <img
                src={project.src}
                alt={project.title}
                className="w-full h-[300px] object-cover rounded shadow mb-3"
              />
              <h3 className="font-bold text-lg text-center">{project.title}</h3>
            </div>
          ))}
        </div>
        <button
          onClick={scrollRight}
          className="absolute right-2 top-[60%] -translate-y-1/2 w-10 h-10 z-10 rounded-full shadow hidden sm:flex items-center justify-center"
          style={{ backgroundColor: colors.navy, color: colors.offWhite }}
        >
          ▶
        </button>
      </div>

      {/* Vision CTA Section */}
      <div
        className="text-white px-4 md:px-20 py-20 flex flex-col md:flex-row items-center justify-between gap-10"
        style={{ backgroundColor: colors.navy }}
      >
        <div className="w-full md:w-[40%] max-w-[400px]">
          <img
            src="/assets/pic1.jpg"
            alt="Construction Team"
            className="w-full h-auto object-cover rounded shadow"
          />
        </div>
        <div className="w-full md:w-[55%] text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Ready to Build Your Vision?
          </h2>
          <p className="mb-6 text-sm md:text-base max-w-md md:maxw-full">
            It all begins with an idea. Maybe you want to launch a business. Maybe you
            want to turn a hobby into something more. Or maybe you have a creative
            project to share with the world.
          </p>
          <button
            onClick={() => setShowModal(true)}
            className={buttonClass}
            style={buttonStyle}
          >
            GET IN TOUCH
          </button>
        </div>
      </div>

      {/* About / History Section */}
      <div className="bg-white text-black py-20 px-4 md:px-20">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16">
          From Worn to Wow
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <img
              src="/assets/pic5.jpg"
              alt="Timber Supplies"
              className="w-full max-w-[400px] h-auto object-cover rounded shadow"
            />
            <p className="text-sm leading-relaxed max-w-[500px]">
              At FORTIS, we specialise in repointing, brick cleaning, and exterior
              restoration — bringing tired facades back to life. Whether it's Victorian
              terraces, post-war brickwork, or garden walls, we treat every surface
              with precision and respect.
            </p>
            <p className="text-sm leading-relaxed max-w-[500px]">
              Our mission is simple: to protect and enhance the look of your property.
              We don’t cut corners. We don’t upsell. We just do what’s right — and we’ve
              built our reputation on that.
            </p>
          </div>
          <div>
            <img
              src="/assets/pic2.jpg"
              alt="Measuring Structure"
              className="w-full max-w-[600px] h-auto object-cover rounded shadow"
            />
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div
        className="py-20 px-4 md:px-20 text-center text-white"
        style={{ backgroundColor: colors.darkBg }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-10">
          What Our Clients Say
        </h2>
        <p className="text-lg max-w-2xl mx-auto mb-6 italic">
          "{testimonials[testimonialIndex].text}"
        </p>
        <p className="text-sm font-semibold mb-6">
          — {testimonials[testimonialIndex].name}
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={prevTestimonial}
            className="w-10 h-10 rounded-full shadow"
            style={{ backgroundColor: colors.offWhite, color: colors.navy }}
          >
            ◀
          </button>
          <button
            onClick={nextTestimonial}
            className="w-10 h-10 rounded-full shadow"
            style={{ backgroundColor: colors.offWhite, color: colors.navy }}
          >
            ▶
          </button>
        </div>
      </div>

      {/* Contact Section */}
      <div
        id="contact"
        className="py-20 px-4 md:px-20 text-left text-white"
        style={{ backgroundColor: colors.navy }}
      >
        <div className="max-w-xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Contact Us
          </h2>
          <p className="text-sm mb-2">
            North East, England, UK
          </p>
          <p className="text-sm mb-2">07340 556912</p>
          <p className="text-sm mb-6">contact@fortisbuilds.co.uk</p>
          <button
            onClick={() => setShowModal(true)}
            className={buttonClass}
            style={buttonStyle}
          >
            GET IN TOUCH
          </button>
        </div>
      </div>

      {/* Footer */}
      <div
        className="text-sm py-4 px-6 text-center text-white"
        style={{ backgroundColor: colors.footerBg }}
      >
        Made by{' '}
        <a
          href="https://www.linkedin.com/in/sotskyis/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-gray-300"
        >
          Serhii Sotskyi
        </a>
      </div>

      <ContactModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}

export default App;
