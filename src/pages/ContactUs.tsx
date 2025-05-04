
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const ContactUs = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#fdf1f4] to-[#f8e6ea]">
      <Navigation />
      <div className="flex-grow container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#530c2c]">Contact Us</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We'd love to hear from you. Reach out to us with any questions or feedback.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          <div className="bg-white/80 backdrop-blur rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-[#530c2c]">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <Input
                  id="name"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="What is this regarding?"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Type your message here..."
                  rows={5}
                  required
                  className="resize-none"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-[#530c2c] to-[#c6576f] hover:from-[#3b081f] hover:to-[#a8485d] text-white"
              >
                Send Message
              </Button>
            </form>
          </div>

          <div>
            <div className="bg-white/80 backdrop-blur rounded-lg p-8 shadow-lg mb-8">
              <h2 className="text-2xl font-bold mb-6 text-[#530c2c]">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-[#c6576f] mt-1 mr-3" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Address</h3>
                    <p className="text-gray-700">
                      123 Fashion Street, Saket<br />
                      New Delhi 110017, India
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-[#c6576f] mt-1 mr-3" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-700">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-[#c6576f] mt-1 mr-3" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-700">contact@sareekurta.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-[#c6576f] mt-1 mr-3" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Business Hours</h3>
                    <p className="text-gray-700">
                      Monday-Saturday: 10:00 AM - 8:00 PM<br />
                      Sunday: 11:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur rounded-lg p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-[#530c2c]">Customer Service</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  For any product inquiries, order status, or returns, our customer service team is available 
                  to assist you.
                </p>
                <p>
                  Customer Support: +91 98765 43211<br />
                  Email: support@sareekurta.com
                </p>
                <p>
                  <strong>Service Hours:</strong><br />
                  Monday-Friday: 9:00 AM - 9:00 PM<br />
                  Saturday-Sunday: 10:00 AM - 7:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
