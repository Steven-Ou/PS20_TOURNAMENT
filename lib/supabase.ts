import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://wtzwjqxddtygsiqusvzi.supabase.co';

// Using backticks (``) handles long strings perfectly, even if they wrap onto a new line!
const supabaseAnonKey = `sb_publishable_1RgC5CcXtvLd2iSZcU3n3A_OsusXmqf`; 

console.log("Checking Hardcoded Supabase Connection URL:", supabaseUrl);
console.log("Checking Hardcoded Supabase Key Status:", supabaseAnonKey ? "KEY_LOADED_OK" : "MISSING/BLANK");

export const supabase = createClient(supabaseUrl, supabaseAnonKey);