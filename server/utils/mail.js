const nodemailer = require('nodemailer');

// Create a reusable transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
  degug:true
});

// async function sendConfirmationEmail(customerEmail, customerName, shopName, location, selectedTimeSlot) {
//   let transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'sbthelp123@gmail.com',
//       pass: 'pigw wfcs pidv aibo',
//     },
//   });

//   const selectedTimeSlotHTML = selectedTimeSlot && selectedTimeSlot.length > 0
//     ? selectedTimeSlot.map(slot => `
//       Date: ${new Date(slot.showtimeDate).toLocaleDateString()},
//                 Time: ${new Date(slot.showtimeDate).toLocaleTimeString('en-US', {
//       hour: '2-digit',
//       minute: '2-digit',
//     })}
//     `).join('') : "No time slot selected";

//   const mailOptions = {
//     from: '"Salon Booking Time" sbthelp123@gmail.com',
//     to: customerEmail,
//     subject: 'Appointment Booking Confirmation',
//     text: `Dear ${customerName},
//       Your payment for booking at ${shopName}, located at ${location}, has been successfully received.
//       You have booked the following time slot:
//       ${selectedTimeSlotHTML}
//       Thank you for choosing us!
//       Best regards,
//       Salon Booking Team`,
//   };

//   return transporter.sendMail(mailOptions);
// }

// Send Confirmation Email
const sendConfirmationEmail = async (userEmail, wasteCollector) => {
  let mailOptions = {
    from: process.env.EMAIL,
    to: userEmail,
    subject: "Waste Collection Request Accepted",
    html: `<p>Your waste collection request has been accepted.</p>
           <p>Waste Collector Details:</p>
           <ul>
              <li>Name: ${wasteCollector.name}</li>
              <li>Phone: ${wasteCollector.phone}</li>
              <li>Email: ${wasteCollector.email}</li>
           </ul>`,
  };
  await transporter.sendMail(mailOptions);
};

const mailOtp = async (otp, email, subject = 'OTP') => {
  const mailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: subject,
    text: `Your OTP is ${otp}`
  }
  await transporter.sendMail(mailOptions)
}

module.exports = {
  mailOtp,
  sendConfirmationEmail
}

