// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://rjuoegcslwoqgzspywfm.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJqdW9lZ2NzbHdvcWd6c3B5d2ZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE3NTU5ODEsImV4cCI6MjA1NzMzMTk4MX0.u6xs3yg7voKVqgoRZFyla97ZqP_31sUG-GdTknJ_Zps";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);