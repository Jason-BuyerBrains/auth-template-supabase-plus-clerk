
# Clerk + Supabase Auth Template

This template provides a production-ready authentication setup using Clerk for auth and Supabase for database/backend services.

## Features

- 🔐 Secure authentication with Clerk
- 📊 Database & RLS with Supabase
- 🎨 Styled with Tailwind CSS
- 🎯 TypeScript support
- 📱 Responsive design
- 🔄 Auto-sync between Clerk & Supabase

## Prerequisites

Before you begin, ensure you have:

1. A Supabase project
2. A Clerk application
3. Node.js installed (v18+ recommended)

## Environment Variables

Create a `.env` file with these variables:

```bash
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_CLERK_SECRET_KEY=your_clerk_secret_key
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Setup Instructions

1. Clone this repository
2. Install dependencies: `npm install`
3. Set up your environment variables
4. Run the SQL migration in your Supabase project:

```sql
-- Create profiles table
create table public.profiles (
  id uuid not null primary key default uuid_generate_v4(),
  user_id text not null unique,
  email text not null unique,
  full_name text,
  avatar_url text,
  updated_at timestamp with time zone default timezone('utc'::text, now()),
  created_at timestamp with time zone default timezone('utc'::text, now())
);

-- Set up Row Level Security
alter table public.profiles enable row level security;

-- Create policies
create policy "Public profiles are viewable by everyone."
  on public.profiles for select
  using ( true );

create policy "Users can insert their own profile."
  on public.profiles for insert
  with check ( auth.uid() = user_id );

create policy "Users can update own profile."
  on public.profiles for update
  using ( auth.uid() = user_id );
```

5. Start the development server: `npm run dev`

## Deployment

1. Build the project: `npm run build`
2. Deploy to your hosting provider of choice

## Additional Resources

- [Clerk Documentation](https://clerk.com/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## Support

For issues and feature requests, please open an issue on GitHub.
