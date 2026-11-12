-- ==============================================================================
-- VISHWA SETU VISA & HOLIDAYS — SUPABASE DATABASE SCHEMA
-- Door-to-Door International Visa Arrangements & Bespoke Luxury Holidays
-- ==============================================================================

-- 1. Create Inquiries Table
CREATE TABLE IF NOT EXISTS public.inquiries (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    full_name TEXT NOT NULL,
    phone TEXT NOT NULL,
    email TEXT NOT NULL,
    interest_type TEXT NOT NULL, -- 'international', 'domestic', 'both'
    
    -- International Corridor Fields
    country TEXT,
    international_visa_mode TEXT, -- 'visa_only', 'visa_and_package'
    
    -- Domestic Circuit Fields
    domestic_circuit TEXT,
    domestic_package_preference TEXT, -- 'curated_signature', 'custom_tailored'
    hotel_tier TEXT, -- '3_star', '4_star', '5_star'
    
    -- Additional Notes
    message TEXT,
    
    -- Concierge Status Tracking
    status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'dossier_in_prep', 'completed', 'archived')),
    assigned_to TEXT DEFAULT 'Rajiv Thakkur Concierge Desk',
    notes TEXT
);

-- 2. Enable Row Level Security (RLS)
ALTER TABLE public.inquiries ENABLE ROW LEVEL SECURITY;

-- 3. Create Public Insertion Policy (allows website visitors to submit inquiries)
CREATE POLICY "Allow public anonymous submissions" 
ON public.inquiries 
FOR INSERT 
TO anon, authenticated
WITH CHECK (true);

-- 4. Create Authenticated Admin Policy (allows staff/Rajiv Thakkur to view & update)
CREATE POLICY "Allow authenticated staff to read inquiries" 
ON public.inquiries 
FOR SELECT 
TO authenticated 
USING (true);

CREATE POLICY "Allow authenticated staff to update inquiries" 
ON public.inquiries 
FOR UPDATE 
TO authenticated 
USING (true);

-- 5. Performance Indexes
CREATE INDEX IF NOT EXISTS idx_inquiries_created_at ON public.inquiries (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_inquiries_phone ON public.inquiries (phone);
CREATE INDEX IF NOT EXISTS idx_inquiries_status ON public.inquiries (status);

-- 6. Comment for Documentation
COMMENT ON TABLE public.inquiries IS 'Lead captures & doorstep consultation bookings for Vishwa Setu Visa & Holidays Concierge';
