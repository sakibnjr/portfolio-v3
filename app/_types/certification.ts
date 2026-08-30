export interface CertificationItem {
  id: string;
  badge: string;
  badge_bg?: string;
  badgeBg?: string;
  badge_text?: string;
  badgeText?: string;
  title: string;
  issuer: string;
  cert_id?: string;
  certId?: string;
  year: string;
  validity: string;
  status: "ACTIVE" | "EXPIRED" | "VERIFIED" | string;
  credential_url?: string;
  credentialUrl?: string;
  display_order?: number;
  images?: string;
  image?: string;
  image_url?: string;
  imageUrl?: string;
}
