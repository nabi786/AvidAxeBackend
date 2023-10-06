const {createClient} = require("@supabase/supabase-js")



// const supabaseUrl = import.meta.env.REACT_APP_SUPABASE_URL;
const supabaseUrl = process.env.supabaseUrl;
const supabaseAnonKey = process.env.supabaseAnonKey;

// console.log("this is usapbse url ", supabaseUrl)
// console.log("this is usapbse supabaseAnonKey ", supabaseAnonKey)

// creating client;
const options = {
  db: {
    schema: 'public',
  },
  auth: {
    autoRefreshToken: true,
    persistSession: false,
    detectSessionInUrl: true
  },
  global: {
    headers: { 'x-my-custom-header': 'AvidAxe'},
  },
}
const supabase = createClient(supabaseUrl, supabaseAnonKey, options)

// export default supabase;
module.exports = supabase