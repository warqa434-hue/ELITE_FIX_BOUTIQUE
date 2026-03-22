/*
  # Create Quote Requests Table

  1. New Tables
    - `quote_requests`
      - `id` (uuid, primary key) - Unique identifier for each quote request
      - `created_at` (timestamptz) - Timestamp when the request was created
      - `name` (text) - Customer's full name
      - `email` (text) - Customer's email address
      - `phone` (text) - Customer's phone number
      - `service_type` (text) - Type of service requested
      - `area` (text) - Location/area in Abu Dhabi
      - `budget` (text, nullable) - Budget range selected by customer
      - `message` (text, nullable) - Additional details from customer
      - `status` (text) - Request status (pending, contacted, quoted, closed)

  2. Security
    - Enable RLS on `quote_requests` table
    - Add policy for public insert (anyone can submit a quote request)
    - Add policy for authenticated users to read all requests (for admin access)
*/

CREATE TABLE IF NOT EXISTS quote_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  service_type text NOT NULL,
  area text NOT NULL,
  budget text DEFAULT NULL,
  message text DEFAULT NULL,
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'contacted', 'quoted', 'closed'))
);

ALTER TABLE quote_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit quote requests"
  ON quote_requests
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read all quote requests"
  ON quote_requests
  FOR SELECT
  TO authenticated
  USING (true);