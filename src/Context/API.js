import { supabase } from "./supabaseClient"

export const addDocs = async (data) => {
  console.log(data);
    const { error } = await supabase
      .from('users')
      .insert([
        data
      ])
    
    if (error) console.log('error', error)
  }

  export const fetchAllUsers = async (search = "", page = 1, limit = 10) => {
    const from = (page - 1) * limit;
    const to = from + limit - 1;
  
    let query = supabase
      .from("users")
      .select("*", { count: "exact" })
      .order("created_at", { ascending: false })
      .range(from, to);
  
    if (search) {
      // filter by name or email
      query = query.or(`name.ilike.%${search}%`);
    }
  
    const { data, error, count } = await query;
  // console.log(data, error, count);
    if (error) {
      console.error("Fetch users error:", error.message);
      return { data: [], count: 0 };
    }
  
    return { data, count };
  };
  
  


  export const uploadFile = async (file) => {
    // Upload
    const { data, error } = await supabase.storage
      .from("userimg") // bucket name must exist!
      .upload(`public/${Date.now()}_${file.name}`, file, {
        cacheControl: "3600",
        upsert: false,
      });
  
    if (error) {
      console.error("Upload error:", error.message);
      return null;
    }

    
  
    // Get public URL
    const { data: publicData } = supabase.storage
      .from("userimg")
      .getPublicUrl(data.path);
  
    return publicData.publicUrl;
  };
  


export const updateUser = async (id, updates) => {
  const { data, error } = await supabase
    .from("users") // table name
    .update(updates) // pass object with new values
    .eq("id", id)   // match row to update
    .select();      // return updated rows (optional)

  if (error) {
    console.error("Update error:", error.message);
    return null;
  }
  return data;
};


export const findUserById = async (id) => {
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("id", id)  // match by ID
    .single();     // ✅ return only one row

  if (error) {
    console.error("Find user error:", error.message);
    return null;
  }

  return data;
};

export const deleteUser = async (id) => {
  const { error } = await supabase
    .from('users')
    .delete()
    .eq('id', id)
  
  if (error) console.log('error', error)
}


export const deleteFileByUrl = async (url) => {
  try {
    // 1. Get bucket name (userimg in this case)
    const bucket = "userimg";

    // 2. Extract the path inside the bucket
    const parts = url.split(`${bucket}/`);
    if (parts.length < 2) {
      throw new Error("Invalid file URL");
    }
    const filePath = parts[1]; // e.g. "public/169556887_file.png"

    // 3. Delete the file
    const { error } = await supabase.storage
      .from(bucket)
      .remove([filePath]);

    if (error) {
      console.error("Delete error:", error.message);
      return false;
    }

    console.log("File deleted:", filePath);
    return true;
  } catch (err) {
    console.error("Delete error:", err.message);
    return false;
  }
};