const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
admin.initializeApp();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: functions.config().gmail.email,
    pass: functions.config().gmail.password,
  },
});

exports.sendQuoteNotification = functions.firestore
  .document("quote-requests/{docId}")
  .onCreate(async (snapshot, context) => {
    const quoteData = snapshot.data();
    const docId = context.params.docId;
    const submissionDate = new Date(quoteData.createdAt).toLocaleString(
      "en-US",
      {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "Africa/Lusaka",
      }
    );

    const mailOptions = {
      from: `"Makondo Steel Quotation System" <${
        functions.config().gmail.email
      }>`,
      to: "malozdev@gmail.com",
      subject: `QUOTATION REQUEST: ${quoteData.companyName} - ${quoteData.projectType}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <!-- Header -->
          <div style="background-color: #ff6b35; color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0;">New Quotation Request</h1>
            <p style="margin: 5px 0 0; font-size: 16px;">Makondo Steel Limited</p>
          </div>
          
          <!-- Reference Info -->
          <div style="background-color: #f8f9fa; padding: 15px; border-bottom: 1px solid #e0e0e0;">
            <p style="margin: 0;"><strong>Reference ID:</strong> ${docId}</p>
            <p style="margin: 5px 0 0;"><strong>Submitted:</strong> ${submissionDate}</p>
          </div>
          
          <!-- Client Information -->
          <div style="padding: 20px;">
            <h2 style="color: #ff6b35; border-bottom: 2px solid #ff6b35; padding-bottom: 5px;">Client Details</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; width: 40%;"><strong>Company Name:</strong></td>
                <td style="padding: 8px 0;">${quoteData.companyName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0;"><strong>Contact Person:</strong></td>
                <td style="padding: 8px 0;">${quoteData.contactPerson}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0;"><strong>Email:</strong></td>
                <td style="padding: 8px 0;">${quoteData.email}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0;"><strong>Phone:</strong></td>
                <td style="padding: 8px 0;">${quoteData.phone}</td>
              </tr>
            </table>
          </div>
          
          <!-- Project Details -->
          <div style="padding: 0 20px 20px;">
            <h2 style="color: #ff6b35; border-bottom: 2px solid #ff6b35; padding-bottom: 5px;">Project Specifications</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; width: 40%;"><strong>Project Type:</strong></td>
                <td style="padding: 8px 0;">${quoteData.projectType}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0;"><strong>Location:</strong></td>
                <td style="padding: 8px 0;">${quoteData.projectLocation}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0;"><strong>Timeframe:</strong></td>
                <td style="padding: 8px 0;">${
                  quoteData.timeframe || "Not specified"
                }</td>
              </tr>
              <tr>
                <td style="padding: 8px 0;"><strong>Budget Range:</strong></td>
                <td style="padding: 8px 0;">${
                  quoteData.budget || "Not specified"
                }</td>
              </tr>
            </table>
          </div>
          
          <!-- Project Description -->
          <div style="padding: 0 20px 20px;">
            <h2 style="color: #ff6b35; border-bottom: 2px solid #ff6b35; padding-bottom: 5px;">Project Description</h2>
            <div style="background-color: #f8f9fa; padding: 15px; border-left: 4px solid #ff6b35;">
              ${quoteData.projectDescription}
            </div>
          </div>
          
          ${
            quoteData.additionalNotes
              ? `
          <!-- Additional Notes -->
          <div style="padding: 0 20px 20px;">
            <h2 style="color: #ff6b35; border-bottom: 2px solid #ff6b35; padding-bottom: 5px;">Additional Notes</h2>
            <div style="background-color: #f8f9fa; padding: 15px; border-left: 4px solid #ff6b35;">
              ${quoteData.additionalNotes}
            </div>
          </div>
          `
              : ""
          }
          
          <!-- Quotation Requirements -->
          <div style="padding: 0 20px 20px;">
            <h2 style="color: #ff6b35; border-bottom: 2px solid #ff6b35; padding-bottom: 5px;">Quotation Requirements</h2>
            <p>Please include the following in your quotation:</p>
            <ul style="padding-left: 20px;">
              <li>Detailed material specifications and quantities</li>
              <li>Itemized cost breakdown (materials, labor, etc.)</li>
              <li>Project timeline with milestones</li>
              <li>Payment terms and schedule</li>
              <li>Quote validity period (30 days recommended)</li>
              <li>Any applicable taxes or fees</li>
            </ul>
          </div>
          
          <!-- Footer -->
          <div style="background-color: #f8f9fa; padding: 15px; text-align: center; font-size: 14px; color: #666;">
            <p style="margin: 0;"><strong>Action Required:</strong> Please respond within 48 hours</p>
            <p style="margin: 5px 0 0;">This is an automated notification from Makondo Steel Limited</p>
          </div>
        </div>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log("Notification email sent successfully");
      return null;
    } catch (error) {
      console.error("Error sending email:", error);
      return null;
    }
  });
