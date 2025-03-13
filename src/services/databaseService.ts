
import { supabase } from '@/integrations/supabase/client';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

class DatabaseService {
  // Save contact form data to Supabase
  async saveContactForm(data: ContactFormData): Promise<{ success: boolean; message: string }> {
    try {
      // Insert the form data into the contact_submissions table
      const { error } = await supabase
        .from('contact_submissions')
        .insert([{
          name: data.name,
          email: data.email,
          phone: data.phone,
          message: data.message
        }]);
      
      if (error) {
        console.error('Error saving contact form data:', error);
        return { 
          success: false, 
          message: 'There was an error sending your message. Please try again.' 
        };
      }
      
      console.log('Contact form submission saved to Supabase');
      return { 
        success: true, 
        message: 'Your message has been sent successfully!' 
      };
    } catch (error) {
      console.error('Error saving contact form data:', error);
      return { 
        success: false, 
        message: 'There was an error sending your message. Please try again.' 
      };
    }
  }
  
  // Get all contact form submissions (requires authentication)
  async getContactSubmissions(): Promise<ContactFormData[]> {
    try {
      const { data, error } = await supabase
        .from('contact_submissions')
        .select('*')
        .order('timestamp', { ascending: false });
      
      if (error) {
        console.error('Error retrieving contact submissions:', error);
        return [];
      }
      
      return data || [];
    } catch (error) {
      console.error('Error retrieving contact submissions:', error);
      return [];
    }
  }
}

export const databaseService = new DatabaseService();
export type { ContactFormData };
