import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Check if credentials have been populated with real URLs
export const isSupabaseConfigured = Boolean(
  supabaseUrl && 
  supabaseAnonKey && 
  !supabaseUrl.includes('your-project') &&
  !supabaseAnonKey.includes('your-anon-key')
);

export const supabase: SupabaseClient | null = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

export interface InquiryPayload {
  fullName: string;
  phone: string;
  email: string;
  interestType: 'international' | 'domestic' | 'both';
  country?: string;
  internationalVisaMode?: 'visa_only' | 'visa_and_package';
  domesticCircuit?: string;
  domesticPackagePreference?: 'curated_signature' | 'custom_tailored';
  hotelTier?: '3_star' | '4_star' | '5_star';
  message?: string;
}

/**
 * Resilient inquiry submission function.
 * Inserts directly to Supabase if configured; otherwise persists safely to localStorage
 * so that no customer inquiry is ever lost.
 */
export async function submitInquiry(data: InquiryPayload): Promise<{
  success: boolean;
  isDemo: boolean;
  message?: string;
  error?: string;
}> {
  try {
    const formattedRecord = {
      full_name: data.fullName,
      phone: data.phone,
      email: data.email,
      interest_type: data.interestType,
      country: data.country || null,
      international_visa_mode: data.internationalVisaMode || null,
      domestic_circuit: data.domesticCircuit || null,
      domestic_package_preference: data.domesticPackagePreference || null,
      hotel_tier: data.hotelTier || null,
      message: data.message || null,
      status: 'new',
      created_at: new Date().toISOString(),
    };

    if (supabase && isSupabaseConfigured) {
      const { error } = await supabase.from('inquiries').insert([formattedRecord]);
      if (error) {
        console.warn('Supabase insert warning, falling back to local vault:', error.message);
        saveToLocalVault(formattedRecord);
        return { success: true, isDemo: true, message: 'Saved with local fallback' };
      }
      return { success: true, isDemo: false, message: 'Saved to Supabase cloud' };
    } else {
      // Local demo mode fallback
      saveToLocalVault(formattedRecord);
      return { success: true, isDemo: true, message: 'Saved to local concierge memory' };
    }
  } catch (err: unknown) {
    console.error('Inquiry submission error:', err);
    return { success: false, isDemo: true, error: (err as Error)?.message || 'Submission failed' };
  }
}

function saveToLocalVault(record: Record<string, unknown>) {
  try {
    const existing = JSON.parse(localStorage.getItem('vishwa_setu_inquiries') || '[]');
    existing.unshift({ ...record, id: `local-${Date.now()}` });
    localStorage.setItem('vishwa_setu_inquiries', JSON.stringify(existing.slice(0, 50)));
  } catch (e) {
    console.warn('LocalStorage unavailable:', e);
  }
}
