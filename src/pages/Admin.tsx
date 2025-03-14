
import { useState, useEffect } from 'react';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs';
import ContactSubmissions from '@/components/ContactSubmissions';
import { supabase } from '@/integrations/supabase/client';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      setSession(data.session);
      setLoading(false);
      
      if (!data.session) {
        navigate('/');
      }
    };
    
    checkSession();
    
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_, session) => {
        setSession(session);
        if (!session) {
          navigate('/');
        }
      }
    );
    
    return () => {
      if (authListener && authListener.subscription) {
        authListener.subscription.unsubscribe();
      }
    };
  }, [navigate]);

  if (loading) {
    return <div className="container mx-auto px-6 py-16 text-center">Loading...</div>;
  }

  if (!session) {
    return <div className="container mx-auto px-6 py-16 text-center">Please log in to access the admin area.</div>;
  }

  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-wealthwise-primary mb-8">Admin Dashboard</h1>
      
      <Tabs defaultValue="contact" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="contact">Contact Submissions</TabsTrigger>
        </TabsList>
        
        <TabsContent value="contact">
          <ContactSubmissions />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Admin;
