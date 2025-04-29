import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://yxhimueimcpgvqiwxfwg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl4aGltdWVpbWNwZ3ZxaXd4ZndnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzcxMjA1NDcsImV4cCI6MjA1MjY5NjU0N30.7cqnARHkkCm2XhJcEZuFR8F-GsD9w8zIPWe5bfc7mXg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
