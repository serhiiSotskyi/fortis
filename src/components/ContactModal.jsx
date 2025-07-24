import { useState } from 'react';

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({ first: '', last: '', email: '', phone: '', subject: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return isOpen ? (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white text-black p-8 rounded-lg max-w-lg w-full relative">
        <button className="absolute top-2 right-4 text-xl font-bold" onClick={onClose}>×</button>
        <h2 className="text-2xl font-extrabold mb-6">Project Inquiry</h2>
        <form action="https://formspree.io/f/mrblpwnn" method="POST" className="space-y-4">
          <div className="flex gap-4">
            <input
              name="first"
              placeholder="First Name"
              required
              className="border p-2 w-1/2"
              onChange={handleChange}
            />
            <input
              name="last"
              placeholder="Last Name"
              required
              className="border p-2 w-1/2"
              onChange={handleChange}
            />
          </div>
          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            className="border p-2 w-full"
            onChange={handleChange}
          />
          <input
            name="phone"
            type="tel"
            placeholder="Phone number"
            required
            className="border p-2 w-full"
            onChange={handleChange}
          />
          <input
            name="subject"
            placeholder="Subject"
            required
            className="border p-2 w-full"
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Message"
            required
            className="border p-2 w-full h-32"
            onChange={handleChange}
          ></textarea>
          <button type="submit" className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">Submit</button>
        </form>
      </div>
    </div>
  ) : null;
}
