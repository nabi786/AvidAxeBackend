const supabase = require("../config/supabaseClient");

// inserting data to supbase Table
exports.insert_to_supabase = async (taleName, table_data) => {
  try {
    console.log("table name ", taleName);
    console.log("table table_data ", table_data);
    // inserting data to supabase
    const { data, error } = await supabase
      .from(taleName)
      .insert([table_data])
      .select();

    if (data != null) {
      return { success: true };
    } else {
      return { success: false };
    }
  } catch (err) {
    console.log("this is err ", err.message);
    return { success: false };
  }
};

// getting data from supabse table
exports.check_user_and_uuid = async (taleName, table_data) => {
  try {
    console.log("table name ", taleName);
    console.log("table_data ", table_data);
    // inserting data to supabase
    const { data, error } = await supabase
      .from(taleName)
      .select("*")
      .eq("cust_id", table_data.cust_id)
      .eq("uuid", table_data.uuid);

    return { success: true, msg: "success", data };
  } catch (err) {
    console.log("this is err ", err.message);
    return { success: false, msg: "failed", data: [] };
  }
};
