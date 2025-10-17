import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

let supabaseInstance: SupabaseClient | null = null;
let supabaseError: string | null = null;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase environment variables are missing. Database features will be unavailable.');
  supabaseError = 'Missing Supabase environment variables';
} else {
  try {
    supabaseInstance = createClient(supabaseUrl, supabaseAnonKey);
  } catch (error) {
    console.error('Failed to initialize Supabase client:', error);
    supabaseError = error instanceof Error ? error.message : 'Unknown error';
  }
}

export const supabase = supabaseInstance as SupabaseClient;
export const isSupabaseAvailable = () => supabaseInstance !== null;
export const getSupabaseError = () => supabaseError;
