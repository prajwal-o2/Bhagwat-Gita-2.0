import React, { useRef, useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactSection = ({ isVisible }) => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'your_service_id',    // ⬅️ Replace with actual EmailJS Service ID
        'your_template_id',   // ⬅️ Replace with actual Template ID
        formRef.current,
        'your_public_key'     // ⬅️ Replace with your Public Key
      )
      .then(
        () => {
          alert("✅ Message sent! I’ll get back to you soon.");
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          alert('❌ Failed to send message. Please try again later.');
          console.error('EmailJS Error:', error);
        }
      );
  };

  return (
    <section 
      id="contact" 
      data-animate 
      className={`py-20 px-6 bg-gradient-to-br from-gray-900 to-amber-900 transition-all duration-1000 ${
        isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">Get In Touch</h2>
          <p className="text-xl text-amber-200">Have questions? Want to connect? I'd love to hear from you!</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <ContactInfo />
          <ContactForm
            formRef={formRef}
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </section>
  );
};

const ContactInfo = () => {
  const contactDetails = [
    { icon: Mail, label: 'Email', value: 'author@example.com' },
    { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567' },
    { icon: MapPin, label: 'Location', value: 'New York, NY' }
  ];

  return (
    <div className="space-y-8">
      {contactDetails.map(({ icon: Icon, label, value }) => (
        <div key={label} className="flex items-center space-x-4">
          <div className="bg-amber-500 p-3 rounded-full">
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="text-white font-semibold">{label}</div>
            <div className="text-amber-200">{value}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

const ContactForm = ({ formRef, formData, handleChange, handleSubmit }) => (
  <form
    ref={formRef}
    onSubmit={handleSubmit}
    className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 space-y-6"
  >
    <input
      type="text"
      name="name"
      value={formData.name}
      onChange={handleChange}
      placeholder="Your Name"
      required
      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-amber-200 focus:border-amber-400 focus:outline-none"
    />
    <input
      type="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      placeholder="Your Email"
      required
      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-amber-200 focus:border-amber-400 focus:outline-none"
    />
    <textarea
      name="message"
      value={formData.message}
      onChange={handleChange}
      rows="4"
      placeholder="Your Message"
      required
      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-amber-200 focus:border-amber-400 focus:outline-none resize-none"
    />
    <button
      type="submit"
      className="w-full bg-gradient-to-r from-amber-500 to-red-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-amber-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300"
    >
      Send Message
    </button>
  </form>
);

export default ContactSection;
