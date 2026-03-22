import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

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