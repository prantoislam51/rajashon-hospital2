/**
 * DIAGNOSTIC CENTER
 * Google Sheets Appointment API
 *
 * Sheet Tab: Appointments
 * Deployment: Web App
 */

const SHEET_NAME = "Appointments";

// ╔══════════════════════════════════════════════════════════════════╗
// ║  👉 এখানে আপনার Google Sheet ID পেস্ট করুন (ঐচ্ছিক / Optional)    ║
// ║                                                                  ║
// ║  ফাঁকা ("") রাখলে স্ক্রিপ্ট নিজে থেকেই শিট খুঁজে নেবে (Auto Detect)।║
// ║  Sheet ID = শিটের URL-এর /d/ এবং /edit এর মাঝের অংশ।              ║
// ║  উদাহরণ: const SPREADSHEET_ID = "1AbCdEfGhIjKlMnOpQrStUvWxYz";   ║
// ╚══════════════════════════════════════════════════════════════════╝
//
// Script যদি Sheet-এর Extensions > Apps Script থেকে না খুলে আলাদাভাবে বানানো হয়,
// তাহলে এখানে Spreadsheet ID বসান (URL-এর /d/ এবং /edit এর মাঝের অংশ)। নাহলে ফাঁকা রাখুন।
const SPREADSHEET_ID = "";

// ╔══════════════════════════════════════════════════════════════════╗
// ║  ড্যাশবোর্ড কোন লিংকে খুলবে?                                      ║
// ║  false = শুধু  .../exec?page=dashboard  লিংকে ড্যাশবোর্ড খুলবে।      ║
// ║          .../exec লিংকে আগের মতো JSON থাকবে (মূল সাইট সম্পূর্ণ নিরাপদ)║
// ║  true  = .../exec লিংকেই ড্যাশবোর্ড খুলবে।                          ║
// ║          আগের JSON দেখতে হলে .../exec?api=1 ব্যবহার করুন।            ║
// ╚══════════════════════════════════════════════════════════════════╝
const SHOW_DASHBOARD_BY_DEFAULT = false;

// Auto Detect-এর পর শিট ID এই নামে Script Properties-এ সেভ থাকে (নিজে বদলানোর দরকার নেই)
const SAVED_ID_KEY = "DETECTED_SPREADSHEET_ID";

const HEADERS = [
  "Appointment ID",
  "Submission Date",
  "Hospital Name",
  "Patient Name",
  "Mobile Number",
  "Age",
  "Doctor Name",
  "Doctor Slug",
  "Doctor Specialty",
  "Specialty Key",
  "Appointment Date",
  "Appointment Time",
  "Appointment Fee",
  "Status"
];

const STATUS_OPTIONS = ["Pending", "Confirmed", "Completed", "Cancelled"];

/* =====================================================
   SETUP — একবার Run করলেই শিট সম্পূর্ণ রেডি
   ===================================================== */
function setup() {
  const ss = getSpreadsheet_();
  const sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);

  const hasData = sheet.getLastRow() > 1;

  // আগের ফিল্টার, banding, নিয়ম পরিষ্কার
  const oldFilter = sheet.getFilter();
  if (oldFilter) oldFilter.remove();
  sheet.getBandings().forEach(function (b) { b.remove(); });
  sheet.clearConditionalFormatRules();

  // ডেটা না থাকলে পুরো শিট clean করা হবে; থাকলে আসল ডেটা অক্ষত থাকবে
  if (!hasData) {
    sheet.clear();
    sheet.getRange(1, 1, sheet.getMaxRows(), sheet.getMaxColumns()).clearDataValidations();
  }

  // কলাম/সারি সংখ্যা ঠিক করা
  const totalCols = HEADERS.length;
  if (sheet.getMaxColumns() < totalCols) {
    sheet.insertColumnsAfter(sheet.getMaxColumns(), totalCols - sheet.getMaxColumns());
  } else if (sheet.getMaxColumns() > totalCols) {
    sheet.deleteColumns(totalCols + 1, sheet.getMaxColumns() - totalCols);
  }
  if (sheet.getMaxRows() < 1000) {
    sheet.insertRowsAfter(sheet.getMaxRows(), 1000 - sheet.getMaxRows());
  }

  // ----- হেডার -----
  const headerRange = sheet.getRange(1, 1, 1, totalCols);
  headerRange
    .setValues([HEADERS])
    .setBackground("#0b5d4b")
    .setFontColor("#ffffff")
    .setFontWeight("bold")
    .setFontSize(11)
    .setHorizontalAlignment("center")
    .setVerticalAlignment("middle")
    .setWrap(true);
  sheet.setRowHeight(1, 42);
  sheet.setFrozenRows(1);
  sheet.setFrozenColumns(1);

  // ----- কলাম ফরম্যাট -----
  const bodyRows = sheet.getMaxRows() - 1;
  const col = function (n) { return sheet.getRange(2, n, bodyRows, 1); };

  col(1).setNumberFormat("@");                         // Appointment ID
  col(2).setNumberFormat("dd-MMM-yyyy hh:mm AM/PM");   // Submission Date
  col(3).setNumberFormat("@");                         // Hospital
  col(4).setNumberFormat("@");                         // Patient
  col(5).setNumberFormat("@");                         // Mobile (০ হারাবে না)
  col(6).setNumberFormat("0");                         // Age
  col(7).setNumberFormat("@");                         // Doctor
  col(8).setNumberFormat("@");                         // Slug
  col(9).setNumberFormat("@");                         // Specialty
  col(10).setNumberFormat("@");                        // Specialty Key
  col(11).setNumberFormat("@");                        // Appointment Date (টেক্সট)
  col(12).setNumberFormat("@");                        // Appointment Time (টেক্সট)
  col(13).setNumberFormat('"৳"#,##0');                 // Fee
  col(14).setNumberFormat("@");                        // Status

  // অ্যালাইনমেন্ট
  sheet.getRange(2, 1, bodyRows, totalCols).setVerticalAlignment("middle");
  [1, 2, 5, 6, 11, 12, 13, 14].forEach(function (n) {
    col(n).setHorizontalAlignment("center");
  });

  // ----- কলামের প্রস্থ -----
  const widths = [140, 170, 180, 170, 140, 60, 180, 170, 170, 130, 130, 130, 120, 120];
  widths.forEach(function (w, i) { sheet.setColumnWidth(i + 1, w); });

  // ----- Status dropdown -----
  const rule = SpreadsheetApp.newDataValidation()
    .requireValueInList(STATUS_OPTIONS, true)
    .setAllowInvalid(false)
    .build();
  col(14).setDataValidation(rule);

  // ----- Status অনুযায়ী রঙ -----
  const statusRange = sheet.getRange(2, 14, bodyRows, 1);
  const colors = {
    "Pending":   ["#fff3cd", "#7a5b00"],
    "Confirmed": ["#d1ecf1", "#0c5460"],
    "Completed": ["#d4edda", "#155724"],
    "Cancelled": ["#f8d7da", "#721c24"]
  };
  const rules = Object.keys(colors).map(function (key) {
    return SpreadsheetApp.newConditionalFormatRule()
      .whenTextEqualTo(key)
      .setBackground(colors[key][0])
      .setFontColor(colors[key][1])
      .setBold(true)
      .setRanges([statusRange])
      .build();
  });
  sheet.setConditionalFormatRules(rules);

  // ----- Banding + Filter -----
  const dataRange = sheet.getRange(1, 1, sheet.getMaxRows(), totalCols);
  dataRange.applyRowBanding(SpreadsheetApp.BandingTheme.LIGHT_GREY, true, false)
    .setHeaderRowColor("#0b5d4b")
    .setFirstRowColor("#ffffff")
    .setSecondRowColor("#f3f7f6");
  dataRange.createFilter();

  // বর্ডার
  sheet.getRange(1, 1, Math.max(sheet.getLastRow(), 2), totalCols)
    .setBorder(true, true, true, true, true, true, "#d0d7d5",
      SpreadsheetApp.BorderStyle.SOLID);

  // ----- ডেমো ডেটা (শুধু শিট ফাঁকা থাকলে) -----
  if (!hasData) {
    const now = new Date();
    const hospital = "Rajashon Hospital";
    const demo = [
      ["Rahim Uddin", "01712345678", 45, "Dr. Md. Karim Hossain", "dr-md-karim-hossain", "Medicine Specialist", "medicine", "2026-11-18", "10:00 AM", 800, "Pending"],
      ["Fatema Begum", "01819876543", 32, "Dr. Nusrat Jahan", "dr-nusrat-jahan", "Gynecologist", "gynecology", "2026-11-18", "11:30 AM", 1000, "Confirmed"],
      ["Sabbir Ahmed", "01911223344", 8, "Dr. Tanvir Alam", "dr-tanvir-alam", "Pediatrician", "pediatrics", "2026-11-19", "09:30 AM", 700, "Pending"],
      ["Mina Akter", "01655667788", 27, "Dr. Sharmin Sultana", "dr-sharmin-sultana", "Dermatologist", "dermatology", "2026-11-19", "04:00 PM", 900, "Completed"],
      ["Kamal Hossain", "01511445566", 60, "Dr. Abdur Rahman", "dr-abdur-rahman", "Cardiologist", "cardiology", "2026-11-20", "06:00 PM", 1500, "Confirmed"],
      ["Nasrin Sultana", "01322889900", 38, "Dr. Md. Karim Hossain", "dr-md-karim-hossain", "Medicine Specialist", "medicine", "2026-11-20", "10:30 AM", 800, "Cancelled"],
      ["Jahid Hasan", "01777332211", 22, "Dr. Rafiq Islam", "dr-rafiq-islam", "Orthopedic Surgeon", "orthopedics", "2026-11-21", "05:00 PM", 1200, "Pending"],
      ["Salma Khatun", "01833445577", 54, "Dr. Abdur Rahman", "dr-abdur-rahman", "Cardiologist", "cardiology", "2026-11-22", "07:00 PM", 1500, "Pending"]
    ];

    const rows = demo.map(function (d, i) {
      const submitted = new Date(now.getTime() - (demo.length - i) * 3600 * 1000);
      return [
        "APT-" + Utilities.getUuid().substring(0, 8).toUpperCase(),
        submitted, hospital,
        d[0], d[1], d[2], d[3], d[4], d[5], d[6], d[7], d[8], d[9], d[10]
      ];
    });

    sheet.getRange(2, 1, rows.length, totalCols).setValues(rows);
  }

  ss.setActiveSheet(sheet);
  SpreadsheetApp.flush();

  Logger.log(
    "Setup সম্পন্ন! Sheet: " + SHEET_NAME +
    (hasData ? " (আগের ডেটা অক্ষত রাখা হয়েছে)" : " (ডেমো ডেটা যোগ হয়েছে)")
  );
}

/* =====================================================
   API
   ===================================================== */
function doGet(e) {
  // ✅ শুধু ?page=dashboard থাকলে ড্যাশবোর্ড (Index.html) দেখাবে।
  //    অন্য সব GET রিকোয়েস্টে আগের মতোই JSON উত্তর যাবে,
  //    তাই আপনার অন্যান্য ওয়েবসাইটের সংযোগ নষ্ট হবে না।
  const params = (e && e.parameter) || {};
  const wantsDashboard =
    params.page === "dashboard" ||
    (SHOW_DASHBOARD_BY_DEFAULT && params.api !== "1");

  if (wantsDashboard) {
    return HtmlService.createHtmlOutputFromFile("Index")
      .setTitle("Appointment Dashboard")
      .addMetaTag("viewport", "width=device-width, initial-scale=1")
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  }

  return jsonResponse({
    success: true,
    message: "Diagnostic Center Appointment API is running."
  });
}

function doPost(e) {
  const lock = LockService.getScriptLock();

  try {
    if (!e || !e.postData || !e.postData.contents) {
      throw new Error("No appointment data received.");
    }

    const data = JSON.parse(e.postData.contents);

    const required = [
      "patientName",
      "mobile",
      "age",
      "doctorName",
      "doctorSlug",
      "doctorSpecialty",
      "appointmentDate",
      "appointmentTime"
    ];

    for (const field of required) {
      if (
        data[field] === undefined ||
        data[field] === null ||
        String(data[field]).trim() === ""
      ) {
        throw new Error("Missing required field: " + field);
      }
    }

    const mobile = String(data.mobile).replace(/[\s-]/g, "");

    if (!/^(?:\+?88)?01[3-9]\d{8}$/.test(mobile)) {
      throw new Error("Invalid mobile number.");
    }

    const age = Number(data.age);

    if (!Number.isInteger(age) || age < 0 || age > 120) {
      throw new Error("Invalid patient age.");
    }

    if (!Number.isFinite(Number(data.appointmentFee)) ||
        Number(data.appointmentFee) < 0) {
      throw new Error("Invalid appointment fee.");
    }

    if (!lock.tryLock(10000)) {
      throw new Error("Server is busy. Please try again.");
    }

    let sheet = getSpreadsheet_().getSheetByName(SHEET_NAME);

    // ট্যাব না থাকলে নিজে থেকে তৈরি করে নেবে
    if (!sheet) {
      setup();
      sheet = getSpreadsheet_().getSheetByName(SHEET_NAME);
    }

    const appointmentId =
      "APT-" + Utilities.getUuid().substring(0, 8).toUpperCase();

    const row = [
      appointmentId,
      new Date(),
      cleanText(data.hospitalName),
      cleanText(data.patientName),
      mobile,
      age,
      cleanText(data.doctorName),
      cleanText(data.doctorSlug),
      cleanText(data.doctorSpecialty),
      cleanText(data.specialtyKey),
      cleanText(data.appointmentDate),
      cleanText(data.appointmentTime),
      Number(data.appointmentFee),
      "Pending"
    ];

    sheet.appendRow(row);
    SpreadsheetApp.flush();

    return jsonResponse({
      success: true,
      message: "Appointment saved successfully.",
      appointmentId: appointmentId
    });

  } catch (error) {
    return jsonResponse({
      success: false,
      message: error.message || "Something went wrong."
    });

  } finally {
    if (lock.hasLock()) {
      lock.releaseLock();
    }
  }
}

/* =====================================================
   Helpers
   ===================================================== */

/**
 * শিট খোঁজার ক্রম (উপর থেকে নিচে):
 *  ১) SPREADSHEET_ID-তে হাতে বসানো ID থাকলে সেটাই ব্যবহার হবে (Manual)
 *  ২) ফাঁকা থাকলে — যে শিট থেকে Script খোলা হয়েছে সেটি নিজে থেকে ধরবে (Auto Detect)
 *  ৩) Auto Detect সফল হলে ID সেভ করে রাখবে; পরে কোনো কারণে ধরতে না পারলে সেভ করা ID ব্যবহার করবে
 *
 * অন্য শিটে কপি করলে: ফাইলসহ কপি (Make a copy) করুন। নতুন শিটের Apps Script
 * নিজে থেকেই নতুন শিট চিনে নেবে। (SPREADSHEET_ID ফাঁকা থাকতে হবে)
 */
function getSpreadsheet_() {
  let ss = null;

  if (SPREADSHEET_ID) {
    // ১) Manual
    ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  } else {
    // ২) Auto Detect
    try {
      ss = SpreadsheetApp.getActiveSpreadsheet();
    } catch (err) {
      ss = null;
    }

    const props = PropertiesService.getScriptProperties();

    if (ss) {
      // ৩) পাওয়া ID সেভ করে রাখা (বদলালে আপডেট হবে)
      try {
        if (props.getProperty(SAVED_ID_KEY) !== ss.getId()) {
          props.setProperty(SAVED_ID_KEY, ss.getId());
        }
      } catch (err) {}
    } else {
      // Auto Detect না পারলে আগে সেভ করা ID
      const savedId = props.getProperty(SAVED_ID_KEY);
      if (savedId) ss = SpreadsheetApp.openById(savedId);
    }
  }

  if (!ss) {
    throw new Error("Google Spreadsheet not found. Set SPREADSHEET_ID.");
  }
  return ss;
}

function cleanText(value) {
  const text = String(value || "").trim();

  if (text.length > 500) {
    throw new Error("A text field is too long.");
  }

  return text;
}

function jsonResponse(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

/* =====================================================
   নতুন যোগ করা অংশ — ড্যাশবোর্ড (Index.html) এর জন্য
   ===================================================== */

// ওয়েবসাইট থেকে সব অ্যাপয়েন্টমেন্ট পড়ার জন্য
function getAppointments() {
  const sheet = getSpreadsheet_().getSheetByName(SHEET_NAME);
  if (!sheet || sheet.getLastRow() < 2) return [];

  const tz = Session.getScriptTimeZone();
  const values = sheet
    .getRange(2, 1, sheet.getLastRow() - 1, HEADERS.length)
    .getValues();

  const fmtDate = function (v) {
    return v instanceof Date ? Utilities.formatDate(v, tz, "yyyy-MM-dd") : String(v).trim();
  };
  const fmtTime = function (v) {
    return v instanceof Date ? Utilities.formatDate(v, tz, "hh:mm a") : String(v).trim();
  };

  return values
    .filter(function (r) { return String(r[0]).trim() !== ""; })
    .map(function (r) {
      return {
        id: String(r[0]),
        submitted: r[1] instanceof Date
          ? Utilities.formatDate(r[1], tz, "dd MMM yyyy, hh:mm a")
          : String(r[1]),
        submittedTs: r[1] instanceof Date ? r[1].getTime() : 0,
        hospital: String(r[2]),
        patient: String(r[3]),
        mobile: String(r[4]),
        age: String(r[5]),
        doctor: String(r[6]),
        doctorSlug: String(r[7]),
        specialty: String(r[8]),
        specialtyKey: String(r[9]),
        date: fmtDate(r[10]),
        time: fmtTime(r[11]),
        fee: Number(r[12]) || 0,
        status: String(r[13]) || "Pending"
      };
    });
}

// স্ট্যাটাস পরিবর্তনের জন্য
function updateStatus(appointmentId, newStatus) {
  if (STATUS_OPTIONS.indexOf(newStatus) === -1) {
    throw new Error("Invalid status.");
  }

  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const sheet = getSpreadsheet_().getSheetByName(SHEET_NAME);
    const ids = sheet.getRange(2, 1, Math.max(sheet.getLastRow() - 1, 1), 1).getValues();
    for (let i = 0; i < ids.length; i++) {
      if (String(ids[i][0]) === String(appointmentId)) {
        sheet.getRange(i + 2, 14).setValue(newStatus);
        SpreadsheetApp.flush();
        return { success: true };
      }
    }
    throw new Error("Appointment not found.");
  } finally {
    lock.releaseLock();
  }
}

/* =====================================================
   টেস্ট — Editor থেকে একবার Run করে Execution log দেখুন
   কোন শিট ধরা হয়েছে এবং ID কী, এখানে দেখা যাবে
   ===================================================== */
function checkConnection() {
  const ss = getSpreadsheet_();
  const mode = SPREADSHEET_ID ? "Manual (হাতে বসানো ID)" : "Auto Detect";
  Logger.log("মোড: " + mode);
  Logger.log("শিটের নাম: " + ss.getName());
  Logger.log("Sheet ID: " + ss.getId());
  Logger.log("URL: " + ss.getUrl());
  Logger.log("'" + SHEET_NAME + "' ট্যাব আছে? " + (ss.getSheetByName(SHEET_NAME) ? "হ্যাঁ" : "না — setup() Run করুন"));
}

/* =====================================================
   ড্যাশবোর্ড থেকে রোগীর তথ্য এডিট / Approve / Reject
   (নাম, বয়স, মোবাইল, ডাক্তার, তারিখ, সময়, ফি, স্ট্যাটাস — সব Sheet-এ আপডেট হবে)
   ===================================================== */
function updateAppointment(appointmentId, f) {
  f = f || {};
  const need = function (k) {
    if (f[k] === undefined || f[k] === null || String(f[k]).trim() === "") {
      throw new Error("Missing required field: " + k);
    }
  };
  ["patientName", "mobile", "age", "doctorName", "doctorSpecialty", "appointmentDate", "appointmentTime", "status"].forEach(need);

  if (STATUS_OPTIONS.indexOf(f.status) === -1) throw new Error("Invalid status.");

  const mobile = String(f.mobile).replace(/[\s-]/g, "");
  if (!/^(?:\+?88)?01[3-9]\d{8}$/.test(mobile)) throw new Error("Invalid mobile number.");

  const age = Number(f.age);
  if (!Number.isInteger(age) || age < 0 || age > 120) throw new Error("Invalid patient age.");

  const fee = Number(f.appointmentFee);
  if (!Number.isFinite(fee) || fee < 0) throw new Error("Invalid appointment fee.");

  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const sheet = getSpreadsheet_().getSheetByName(SHEET_NAME);
    const last = sheet.getLastRow();
    if (last < 2) throw new Error("Appointment not found.");
    const ids = sheet.getRange(2, 1, last - 1, 1).getValues();

    for (let i = 0; i < ids.length; i++) {
      if (String(ids[i][0]) === String(appointmentId)) {
        const r = i + 2;
        // কলাম ৪–১৪ (Patient Name থেকে Status পর্যন্ত)
        sheet.getRange(r, 4, 1, 11).setValues([[
          cleanText(f.patientName),
          mobile,
          age,
          cleanText(f.doctorName),
          cleanText(f.doctorSlug),
          cleanText(f.doctorSpecialty),
          cleanText(f.specialtyKey),
          cleanText(f.appointmentDate),
          cleanText(f.appointmentTime),
          fee,
          f.status
        ]]);
        SpreadsheetApp.flush();
        return { success: true, mobile: mobile };
      }
    }
    throw new Error("Appointment not found.");
  } finally {
    lock.releaseLock();
  }
}
