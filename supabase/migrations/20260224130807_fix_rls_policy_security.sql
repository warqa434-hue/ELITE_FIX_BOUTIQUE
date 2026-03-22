/*
  # Fix RLS Policy Security Issue

  1. Changes
    - Drop the overly permissive RLS policy for INSERT on quote_requests
    - Create a new restrictive policy that validates the data being inserted
    - Ensure only legitimate quote requests with proper data can be submitted
    - Prevent spam and malicious submissions by validating required fields

  2. Security Improvements
    - Policy now checks that required fields (name, email, phone, service_type, area) are not empty
    - Validates email format using a simple pattern check
    - Ensures status can only be set to 'pending' on insert (prevents privilege escalation)
    - All fields must contain meaningful data (not just whitespace)
*/

-- Drop the overly permissive policy
DROP POLICY IF EXISTS "Anyone can submit quote requests" ON quote_requests;

-- Create a more restrictive policy that validates the data
CREATE POLICY "Public can submit valid quote requests"
  ON quote_requests
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    -- Ensure all required fields are provided and not empty
    length(trim(name)) >= 2 AND
    length(trim(email)) >= 5 AND
    email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$' AND
    length(trim(phone)) >= 8 AND
    length(trim(service_type)) >= 2 AND
    length(trim(area)) >= 2 AND
    -- Ensure status is set to pending (prevents privilege escalation)
    (status = 'pending' OR status IS NULL)
  );