import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Keep the site usable on static hosting even when env vars are not set.
export const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;

export interface Database {
  public: {
    Tables: {
      quote_requests: {
        Row: {
          id: string;
          created_at: string;
          name: string;
          email: string;
          phone: string;
          service_type: string;
          area: string;
          budget: string | null;
          message: string | null;
          status: 'pending' | 'contacted' | 'quoted' | 'closed';
        };
        Insert: {
          id?: string;
          created_at?: string;
          name: string;
          email: string;
          phone: string;
          service_type: string;
          area: string;
          budget?: string | null;
          message?: string | null;
          status?: 'pending' | 'contacted' | 'quoted' | 'closed';
        };
        Update: {
          id?: string;
          created_at?: string;
          name?: string;
          email?: string;
          phone?: string;
          service_type?: string;
          area?: string;
          budget?: string | null;
          message?: string | null;
          status?: 'pending' | 'contacted' | 'quoted' | 'closed';
        };
      };
    };
  };
}