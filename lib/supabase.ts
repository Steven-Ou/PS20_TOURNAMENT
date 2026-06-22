import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://your-project-id.supabase.co'; // Replace with your URL
const supabaseAnonKey = 'your-anon-public-key';           // Replace with your Key

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
