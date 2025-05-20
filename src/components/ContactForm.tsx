
import React, { useState } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const ContactForm = ({ variant = "default" }) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleServiceChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      service: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Form Submitted",
        description: "We'll be in touch within 24 hours!",
      });
      setIsSubmitting(false);
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 1000);
  };

  return (
    <div className={`${variant === "card" ? "bg-white shadow-lg rounded-lg p-6" : ""}`}>
      {variant === "card" && (
        <h3 className="text-2xl font-bold mb-6 text-center">Contact Us</h3>
      )}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div>
            <Label htmlFor="name">Full Name*</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              required
            />
          </div>
          
          <div>
            <Label htmlFor="company">Company Name*</Label>
            <Input
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Acme Inc."
              required
            />
          </div>
          
          <div>
            <Label htmlFor="email">Email Address*</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john.doe@example.com"
              required
            />
          </div>
          
          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 (555) 123-4567"
            />
          </div>
          
          <div>
            <Label htmlFor="service">Service Interested In*</Label>
            <Select value={formData.service} onValueChange={handleServiceChange} required>
              <SelectTrigger>
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="app-development">App Development</SelectItem>
                <SelectItem value="ai-workflow">AI Workflow Solutions</SelectItem>
                <SelectItem value="automation">Automation Services</SelectItem>
                <SelectItem value="web-development">Web Development</SelectItem>
                <SelectItem value="custom-solutions">Custom Tech Solutions</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label htmlFor="message">Project Brief*</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project requirements..."
              className="h-32"
              required
            />
          </div>
        </div>
        
        <div>
          <Button 
            type="submit" 
            className="w-full bg-saas-600 hover:bg-saas-700"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Submit Inquiry"}
          </Button>
          <p className="text-center text-sm text-gray-500 mt-3">
            We respond to all inquiries within 24 hours.
          </p>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
