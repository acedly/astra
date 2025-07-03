export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          user_id: string
          academic_level: 'secondary' | 'undergraduate' | 'postgraduate' | null
          target_exam: string[] | null
          study_goal: string | null
          completed_onboarding: boolean | null
          created_at: string | null
          updated_at: string | null
          total_points: number | null
          current_streak: number | null
          last_checkin_date: string | null
          pro_status: boolean | null
          upload_count: number | null
          plan: string | null
          plan_expiry: string | null
          ref_code: string | null
          referred_by: string | null
        }
        Insert: {
          id?: string
          user_id: string
          academic_level?: 'secondary' | 'undergraduate' | 'postgraduate' | null
          target_exam?: string[] | null
          study_goal?: string | null
          completed_onboarding?: boolean | null
          created_at?: string | null
          updated_at?: string | null
          total_points?: number | null
          current_streak?: number | null
          last_checkin_date?: string | null
          pro_status?: boolean | null
          upload_count?: number | null
          plan?: string | null
          plan_expiry?: string | null
          ref_code?: string | null
          referred_by?: string | null
        }
        Update: {
          id?: string
          user_id?: string
          academic_level?: 'secondary' | 'undergraduate' | 'postgraduate' | null
          target_exam?: string[] | null
          study_goal?: string | null
          completed_onboarding?: boolean | null
          created_at?: string | null
          updated_at?: string | null
          total_points?: number | null
          current_streak?: number | null
          last_checkin_date?: string | null
          pro_status?: boolean | null
          upload_count?: number | null
          plan?: string | null
          plan_expiry?: string | null
          ref_code?: string | null
          referred_by?: string | null
        }
      }
      materials: {
        Row: {
          id: string
          user_id: string
          title: string
          subject: string
          description: string | null
          tags: string[] | null
          file_url: string
          created_at: string | null
        }
        Insert: {
          id?: string
          user_id: string
          title: string
          subject: string
          description?: string | null
          tags?: string[] | null
          file_url: string
          created_at?: string | null
        }
        Update: {
          id?: string
          user_id?: string
          title?: string
          subject?: string
          description?: string | null
          tags?: string[] | null
          file_url?: string
          created_at?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      academic_level: 'secondary' | 'undergraduate' | 'postgraduate'
    }
  }
}