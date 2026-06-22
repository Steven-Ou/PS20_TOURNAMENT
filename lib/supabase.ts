import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://wtzwjqxddtygsiqusvzi.supabase.co';

// Paste your complete, long anon public key token string right between these two backticks:
const supabaseAnonKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind0endqcXhkZHR5Z3NpcXVzdnppIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIwNzgxMDQsImV4cCI6MjA5NzY1NDEwNH0.dSCcB0Jf-7SJ0mQuLRv4KZqv9Xg2vj3C7_lDpxRhegI`;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);