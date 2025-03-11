
import { useContactForm } from '../hooks/useContactForm';

const ContactForm = () => {
  const { formData, errors, isSubmitting, handleChange, handleSubmit } = useContactForm();

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-lg">
      <div className="space-y-2">
        <label htmlFor="name" className="block text-sm font-medium text-wealthwise-dark">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-wealthwise-secondary transition-colors ${
            errors.name ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="John Doe"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium text-wealthwise-dark">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-wealthwise-secondary transition-colors ${
            errors.email ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="example@gmail.com"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>

      <div className="space-y-2">
        <label htmlFor="phone" className="block text-sm font-medium text-wealthwise-dark">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-wealthwise-secondary transition-colors ${
            errors.phone ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="+1234567890"
        />
        {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-medium text-wealthwise-dark">
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-wealthwise-secondary transition-colors ${
            errors.message ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="How can we help you?"
        ></textarea>
        {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3 px-4 bg-wealthwise-primary text-white font-semibold rounded-md hover:bg-wealthwise-dark transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-wealthwise-secondary focus:ring-offset-2 disabled:opacity-75"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
};

export default ContactForm;
