
interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

// In a real application, this would connect to a database like Firebase or a backend API
// For now, we'll simulate database storage with localStorage
class DatabaseService {
  // Save contact form data
  saveContactForm(data: ContactFormData): Promise<{ success: boolean; message: string }> {
    return new Promise((resolve) => {
      try {
        // Get existing submissions or initialize empty array
        const existingData = localStorage.getItem('contactSubmissions');
        const submissions = existingData ? JSON.parse(existingData) : [];
        
        // Add timestamp to the data
        const submissionWithTimestamp = {
          ...data,
          timestamp: new Date().toISOString(),
        };
        
        // Add new submission
        submissions.push(submissionWithTimestamp);
        
        // Save back to localStorage
        localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
        
        console.log('Contact form submission saved:', submissionWithTimestamp);
        
        // Simulate a small delay like a real API call
        setTimeout(() => {
          resolve({ 
            success: true, 
            message: 'Your message has been sent successfully!' 
          });
        }, 500);
      } catch (error) {
        console.error('Error saving contact form data:', error);
        resolve({ 
          success: false, 
          message: 'There was an error sending your message. Please try again.' 
        });
      }
    });
  }
  
  // Get all contact form submissions (for admin purposes)
  getContactSubmissions(): ContactFormData[] {
    try {
      const data = localStorage.getItem('contactSubmissions');
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error('Error retrieving contact submissions:', error);
      return [];
    }
  }
}

export const databaseService = new DatabaseService();
export type { ContactFormData };
