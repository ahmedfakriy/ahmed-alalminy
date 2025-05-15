/*
  # Create products table

  1. New Tables
    - `products`
      - `id` (uuid, primary key)
      - `name` (text)
      - `description` (text)
      - `price` (numeric)
      - `image` (text)
      - `category` (text)
      - `featured` (boolean)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `products` table
    - Add policies for:
      - Public read access
      - Authenticated users can manage products
*/

CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL,
  price numeric NOT NULL,
  image text NOT NULL,
  category text NOT NULL,
  featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Products are viewable by everyone"
  ON products
  FOR SELECT
  TO public
  USING (true);

-- Allow authenticated users to manage products
CREATE POLICY "Authenticated users can manage products"
  ON products
  USING (auth.role() = 'authenticated');