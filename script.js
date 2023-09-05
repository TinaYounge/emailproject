const languageReplies = {
  vn: {
    partialAddressInput:
      "<p><strong>-Địa chỉ quý khách cung cấp bị thiếu một phần</strong></p>",
    lessThanSixMonthsResidency:
      "<p><strong>-Thẻ cư trú của quý khách còn hạn dưới 6 tháng. </strong></p>",
    partialRomajiNameInput:
      "<p><strong>-Tên của quý khách bị thiếu một phần</strong></p>",
    repeatedNameInput:
      "<p><strong>-Tên của quý khách bị viết lặp lại</strong></p>",
    unableToVerifyThicknessOfID:
      "<p><strong>-Không xác thực thẻ do ảnh chụp nghiêng không rõ dộ dày.</strong></p>",
    foreignerUsedMyNumberCardToApply:
      "<p><strong>-Quý khách là người nước ngoài nhưng dùng thẻ My Number để tạo tài khoản. Người nước ngoài sẽ dùng Thẻ cư trú.</strong></p>",
    unclearImageOfID: "<p><strong>-Hình ảnh thẻ không rõ ràng</strong></p>",
    somethingCoveringOfficialStampOnID:
      "<p><strong>-Một phần thẻ (con dấu) bị che bởi ngón tay</strong></p>",
    partialAddressMismatch:
      "<p><strong>-Một phần của địa chỉ quý khách cung cấp không giống trên thẻ cư trú</strong></p>",
    addressInputInRomaji:
      "<p><strong>-Địa chỉ nhập là Tiếng Anh. Quý khách cần nhập địa chỉ y hệt trên thẻ cư trú là Tiếng Nhật</strong></p>",
    partialRepeatedNameInput:
      "<p><strong>-Một phần trong tên quý khách bị nhập lại nhiều lần</strong></p>",
    partialBuildingNameMismatch:
      "<p><strong>-Tên toàn nhà không giống chính xác như trong thẻ cư trú</strong></p>",
    birthdayMismatch:
      "<p><strong>-Ngày sinh không giống như trên thẻ cư trú</strong></p>",
    partialKatakanaNameInput:
      "<p><strong>-Tên Katakana của quý khách bị thiếu một phần. Tên này sẽ được viết trên thẻ Rút tiền của quý khách. Quý khách có thể tìm thấy tên Katakana của mình trên thẻ bảo hiểm</strong></p>",
    roomNumberMismatch:
      "<p><strong>-Số phòng không giống như trên thẻ cư trú</strong></p>",
    addressMismatch:
      "<p><strong>-Địa chỉ quý khách cung cấp không giống trên thẻ cư trú</strong></p>",
    eyesClosedInSelfie:
      "<p><strong>-Quý khách nhắm mắt khi chụp nên cần chụp lại ảnh.</strong></p>",
    rejectedByJintech: "<p><strong>-</strong></p>",
    missingCompanyName:
      "<p><strong>-Quý khách điền thiếu địa tên công ty. Quý khách có thể tìm thấy Tên công ty qua thẻ bảo hiểm hoặc phiếu lương.</strong></p>",
    no: `
            <p>
            </p>
        `,
    scanID: `
        <p ><strong> - Ảnh thẻ cư trú đã cung cấp không đủ rõ ràng.</strong></p>
    `,
    general: `
            <h2>Dear {name},</h2>
            <p><strong>Thank you</strong> for reaching out to us. We have received your inquiry and will get back to you within 24 hours.</p>
            <p>Best Regards,</p>
            <p>Customer Service Team</p>
        `,
  },

  en: {
    residentCard6MonthsExpired: `
        <h2>    GIG-A Update - Residency Card Expires in Less Than 6 Months</h2>
        <p><strong>Thank you</strong> for reaching out to us. We have received your inquiry and will get back to you within 24 hours.</p>
        <p>Best Regards,</p>
        <p>Customer Service Team</p>
    `,
  },
  fr: {
    // ... (French version)
  },
};

function generateReply() {
  const customerNote1 = document.getElementById("customerNote1").value;
  const issueType = document.getElementById("issueType").value;
  const issueType2 = document.getElementById("issueType2").value;
  const issueType3 = document.getElementById("issueType3").value;
  const issueType4 = document.getElementById("issueType4").value;

  console.log("first", issueType);
  const language = document.getElementById("language").value;
  let replyText = "";
  let replyText2 = "";

  // if (!customerNote) {
  //     replyText = "Please enter a customer name.";
  // } else {
  const template = languageReplies[language][issueType];
  const template2 = languageReplies[language][issueType2];
  const template3 = languageReplies[language][issueType3];
  const template4 = languageReplies[language][issueType4];

  replyText = template.replace("{name}", customerNote1);
  replyText2 = template2;
  replyText3 = template3;
  replyText4 = template4;


  // }

  document.getElementById("replyText").innerHTML = replyText; // Changed to innerHTML to support HTML tags
  document.getElementById("replyText2").innerHTML = replyText2; // Changed to innerHTML to support HTML tags
  document.getElementById("replyText3").innerHTML = replyText3; // Changed to innerHTML to support HTML tags
  document.getElementById("replyText4").innerHTML = replyText4; // Changed to innerHTML to support HTML tags

}
