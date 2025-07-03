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
      tasks: {
        Row: {
          id: string
          user_id: string
          subject: string
          task_text: string
          urgency: string
          status: string
          suggested: boolean | null
          due_date: string
          created_at: string | null
        }
        Insert: {
          id?: string
          user_id: string
          subject: string
          task_text: string
          urgency: string
          status?: string
          suggested?: boolean | null
          due_date?: string
          created_at?: string | null
        }
        Update: {
          id?: string
          user_id?: string
          subject?: string
          task_text?: string
          urgency?: string
          status?: string
          suggested?: boolean | null
          due_date?: string
          created_at?: string | null
        }
      }
      cbt_packs: {
        Row: {
          id: string
          title: string
          subject: string
          difficulty: string
          year: string | null
          tags: string[] | null
          created_by: string
          is_public: boolean | null
          is_ai_generated: boolean | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          title: string
          subject: string
          difficulty: string
          year?: string | null
          tags?: string[] | null
          created_by: string
          is_public?: boolean | null
          is_ai_generated?: boolean | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          title?: string
          subject?: string
          difficulty?: string
          year?: string | null
          tags?: string[] | null
          created_by?: string
          is_public?: boolean | null
          is_ai_generated?: boolean | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
      cbt_questions: {
        Row: {
          id: string
          pack_id: string
          question_text: string
          options: string[]
          correct_answer: number
          explanation: string | null
          created_at: string | null
        }
        Insert: {
          id?: string
          pack_id: string
          question_text: string
          options: string[]
          correct_answer: number
          explanation?: string | null
          created_at?: string | null
        }
        Update: {
          id?: string
          pack_id?: string
          question_text?: string
          options?: string[]
          correct_answer?: number
          explanation?: string | null
          created_at?: string | null
        }
      }
      cbt_attempts: {
        Row: {
          id: string
          user_id: string
          pack_id: string
          answers: number[]
          score: number
          duration: number
          completed_at: string | null
        }
        Insert: {
          id?: string
          user_id: string
          pack_id: string
          answers: number[]
          score: number
          duration: number
          completed_at?: string | null
        }
        Update: {
          id?: string
          user_id?: string
          pack_id?: string
          answers?: number[]
          score?: number
          duration?: number
          completed_at?: string | null
        }
      }
      points_history: {
        Row: {
          id: string
          user_id: string
          action: string
          points: number
          created_at: string | null
        }
        Insert: {
          id?: string
          user_id: string
          action: string
          points: number
          created_at?: string | null
        }
        Update: {
          id?: string
          user_id?: string
          action?: string
          points?: number
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