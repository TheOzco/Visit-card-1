/**
 * ------------------------------------------------------------------
 *  اطلاعات کارت ویزیت  —  فقط همین فایل را ویرایش کنید
 *  (حتی از روی گوشی داخل GitHub قابل ویرایش است)
 * ------------------------------------------------------------------
 */

export const profile = {
  name: "دکتر محمد محمودیه دهکردی",
  nameLatin: "Dr. Mohammad Mahmoudieh Dehkordi",
  title: "دندانپزشک",
  subtitle: "درمان‌های ترمیمی، زیبایی، ایمپلنت و پروتز",
  motto: "لبخند شما، امضای ماست",

  phone: "09131234567",
  phoneDisplay: "۰۹۱۳ ۱۲۳ ۴۵۶۷",
  clinicPhone: "03832222222",
  clinicPhoneDisplay: "۰۳۸ ۳۲۲۲ ۲۲۲۲",

  address: "شهرکرد، خیابان ولیعصر، کوچه ۱۲، ساختمان پزشکان سینا، طبقه ۲، واحد ۵",
  hours: "شنبه تا چهارشنبه ۱۰:۰۰ تا ۲۰:۰۰ | پنجشنبه ۱۰:۰۰ تا ۱۴:۰۰",

  /** مختصات مطب — برای دکمهٔ «مسیریابی» */
  location: {
    lat: 32.3256,
    lng: 50.8644,
  },
};

/** لینک مستقیم نقشه (گوگل‌مپ و نشان) */
export const mapLinks = {
  google: `https://www.google.com/maps/dir/?api=1&destination=${profile.location.lat},${profile.location.lng}`,
  neshan: `https://nshn.ir/?lat=${profile.location.lat}&lng=${profile.location.lng}`,
  waze: `https://waze.com/ul?ll=${profile.location.lat},${profile.location.lng}&navigate=yes`,
};

export type SocialKey = "telegram" | "instagram" | "eitaa" | "bale" | "rubika" | "whatsapp";

export interface SocialItem {
  key: SocialKey;
  label: string;
  handle: string;
  url: string;
  color: string;
}

export const socials: SocialItem[] = [
  {
    key: "telegram",
    label: "تلگرام",
    handle: "@dr_mahmoudieh",
    url: "https://t.me/dr_mahmoudieh",
    color: "#2AABEE",
  },
  {
    key: "instagram",
    label: "اینستاگرام",
    handle: "@dr.mahmoudieh",
    url: "https://instagram.com/dr.mahmoudieh",
    color: "#E1306C",
  },
  {
    key: "eitaa",
    label: "ایتا",
    handle: "@dr_mahmoudieh",
    url: "https://eitaa.com/dr_mahmoudieh",
    color: "#F58C1F",
  },
  {
    key: "bale",
    label: "بله",
    handle: "@dr_mahmoudieh",
    url: "https://ble.ir/dr_mahmoudieh",
    color: "#5BC0A8",
  },
  {
    key: "rubika",
    label: "روبیکا",
    handle: "@dr_mahmoudieh",
    url: "https://rubika.ir/dr_mahmoudieh",
    color: "#8B5CF6",
  },
  {
    key: "whatsapp",
    label: "واتساپ",
    handle: "تماس و پیام",
    url: `https://wa.me/98${profile.phone.replace(/^0/, "")}`,
    color: "#25D366",
  },
];
