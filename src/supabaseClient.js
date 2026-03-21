import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://afneaitepksjyauvhsdi.supabase.co";
const supabaseAnonKey = "sb_publishable_D7GQlo9z9ZDQmcGZBNww-w_M4kGDklM";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
