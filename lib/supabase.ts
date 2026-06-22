import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Clean console logs to see what your browser is reading
console.log("Checking Supabase Connection Profile URL:", supabaseUrl);
console.log("Checking Supabase Key Loaded:", supabaseAnonKey ? "KEY_LOADED_OK" : "MISSING/BLANK");

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("CRITICAL ERROR: Env variables failed to clear browser compilation!");
}

export const supabase = createClient(supabaseUrl || '', supabaseAnonKey || '');