export type UserRole =
  | "WHATSAPP_AGENT"
  | "CALL_CENTER_AGENT"
  | "PAYMENT_AGENT"
  | "SYSTEM_ADMIN"
  | "MANAGER"
  | "CEO";

export interface UserContext {
  name: string;
  role: UserRole;
  avatarUrl?: string;
}
