import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://wtzwjqxddtygsiqusvzi.supabase.co'; // Replace with your URL
const supabaseAnonKey = 'sb_publishable_1RgC5CcXtvLd2iSZcU3n3A_OsusXmqf';           // Replace with your Key

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
