/* =====================================================================
   ไฟล์ตั้งค่าหลังบ้าน (SITE CONFIG)
   -----------------------------------------------------------------
   แก้ไขค่าต่างๆ ด้านล่างนี้ได้ตามต้องการ แล้วอัปโหลดไฟล์นี้คู่กับ
   index.html ขึ้น GitHub (หรือ GitHub Pages) ได้เลย ไม่ต้องแตะไฟล์
   index.html เลย

   หมายเหตุสำคัญ: เว็บนี้เมื่อโฮสต์บน GitHub Pages จะไม่มี "เซิร์ฟเวอร์
   หลังบ้าน" จริงๆ ค่าด้านล่างนี้คือค่าที่แขกทุกคนจะเห็นเหมือนกัน
   ส่วนการแก้ไขผ่านหน้า "หลังบ้าน" ในตัวเว็บ (ล็อกอินแล้วเปลี่ยนชื่อ,
   สี, โลโก้ ฯลฯ) จะถูกบันทึกไว้เฉพาะเบราว์เซอร์ของคนที่แก้เท่านั้น
   (ผ่าน localStorage) — ถ้าอยากให้ "ทุกคน" เห็นค่าที่เปลี่ยน ต้องมา
   แก้ในไฟล์นี้แล้ว push ขึ้น GitHub ใหม่ทุกครั้ง
   ===================================================================== */

const SITE_CONFIG = {

  /* ---------- Google Drive ---------- */
  // API Key จาก Google Cloud Console (เปิดใช้งาน Google Drive API)
  apiKey: 'AIzaSyAKYbYpuXUxG7VlW8AdRga9tPNU7oLJKLY',

  // Folder ID ของอัลบั้ม Google Drive ที่ใช้แสดงรูป (ต้องแชร์แบบ "ทุกคนที่มีลิงก์ดูได้")
  driveFolderId: '1cXBFJhPWf6euUKQnaCrJc9B7mhd6eFan',

  // ความถี่ในการเช็ครูปใหม่อัตโนมัติ (มิลลิวินาที)
  pollIntervalMs: 8000,

  /* ---------- รหัสผ่านหลังบ้าน ---------- */
  // รหัสผ่านเริ่มต้นสำหรับกดปุ่ม "เข้าสู่ระบบ" (ถ้ายังไม่มีใครเปลี่ยนจากในเว็บ)
  adminPassword: 'bws2026',

  /* ---------- แบรนด์ / โลโก้ ---------- */
  brandName: 'Bangkok Wedding Studio',

  /* ---------- ข้อมูลงานแต่ง ---------- */
  eventSub: 'ยินดีกับ',              // ข้อความนำ เช่น "ยินดีกับ"
  coupleNames: 'คู่บ่าวสาว',          // ชื่อคู่บ่าวสาว / ชื่ออีเวนต์
  eventDate: '',                      // เช่น "26 สิงหาคม 2569"
  coupleFont: "'Cormorant Garamond', serif",

  /* ---------- ธีมสี ---------- */
  accentColor: '#A9814B',             // สีหลักของเว็บ (โทนทองแชมเปญ)

  /* ---------- Firebase (สำหรับ real-time sync ข้ามเครื่อง) ---------- */
  // คัดลอกค่าจากหน้า Firebase Console (Project settings > Your apps > Web app)
  // มาแปะแทนค่าด้านล่างนี้ทั้งก้อน ถ้ายังไม่ได้ตั้งค่า Firebase ให้เว้นว่างไว้แบบนี้ได้
  // เว็บจะยังทำงานปกติ แต่การตั้งค่าจะไม่ sync ข้ามเครื่อง (แบบเดิม)
  firebase: {
    apiKey: 'AIzaSyAqkTw5j53jgEAK6RqYYlrN_I_mWUhc_lU',
    authDomain: 'bkkphoto8117-e7826.firebaseapp.com',
    databaseURL: 'https://bkkphoto8117-e7826-default-rtdb.asia-southeast1.firebasedatabase.app',
    projectId: 'bkkphoto8117-e7826',
    storageBucket: 'bkkphoto8117-e7826.firebasestorage.app',
    messagingSenderId: '870859961318',
    appId: '1:870859961318:web:5284fa0173d39c3cf69c27',
  },

  /* ---------- อื่นๆ ---------- */
  defaultLang: 'th',                  // 'th' หรือ 'en'
  defaultTheme: 'light',              // 'light' หรือ 'dark'
};
