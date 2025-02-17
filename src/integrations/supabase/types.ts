
export type Profile = {
  id: string;
  user_id: string;
  email: string;
  full_name?: string;
  avatar_url?: string;
  updated_at: string;
  created_at: string;
};

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: Profile;
        Insert: Omit<Profile, "created_at" | "updated_at">;
        Update: Partial<Omit<Profile, "id">>;
      };
    };
  };
};
