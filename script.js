const languageReplies = {
  vn: {
    partialAddressInput:
      "<p><strong>-Địa chỉ quý khách cung cấp bị thiếu một phần, Thẻ rút tiền của quý khách sẽ được giao tới địa chỉ này.</strong></p>",
    lessThanSixMonthsResidency:
      "<p><strong>-Thẻ cư trú của quý khách còn hạn dưới 6 tháng. </strong></p>",
    partialRomajiNameInput:
      "<p><strong>-Tên của quý khách bị thiếu một phần, tên quý khách phải giống trên thẻ cư trú.</strong></p>",
    repeatedNameInput:
      "<p><strong>-Tên của quý khách bị viết lặp lại, tên của quý khách phải giống trên thẻ cư trú.</strong></p>",
    unableToVerifyThicknessOfID:
      "<p><strong>-Không xác thực thẻ cư trú do ảnh chụp nghiêng không rõ dộ dày.</strong></p>",
    foreignerUsedMyNumberCardToApply:
      "<p><strong>-Quý khách là người nước ngoài nhưng dùng thẻ My Number để tạo tài khoản. Quý khách vui lòng dùng Thẻ cư trú.</strong></p>",
    unclearImageOfID:
      "<p><strong>-Hình ảnh thẻ không rõ ràng, Quý khách vui lòng chụp lại rõ hơn.</strong></p>",
    somethingCoveringOfficialStampOnID:
      "<p><strong>-Một phần thẻ (con dấu) bị che bởi ngón tay, Quý khách vui lòng chụp lại rõ hơn.</strong></p>",
    partialAddressMismatch:
      "<p><strong>-Một phần của địa chỉ quý khách cung cấp không giống trên thẻ cư trú. Thẻ rút tiền của quý khách sẽ được giao tới địa chỉ này.</strong></p>",
    addressInputInRomaji:
      "<p><strong>-Địa chỉ nhập là Tiếng Anh. Quý khách cần nhập địa chỉ y hệt trên thẻ cư trú là Tiếng Nhật</strong></p>",
    partialRepeatedNameInput:
      "<p><strong>-Một phần trong tên quý khách bị nhập lại nhiều lần, tên của quý khách phải giống trên thẻ cư trú.</strong></p>",
    partialBuildingNameMismatch:
      "<p><strong>-Tên toàn nhà không giống chính xác như trong thẻ cư trú</strong></p>",
    birthdayMismatch:
      "<p><strong>-Ngày sinh không giống như trên thẻ cư trú</strong></p>",
    partialKatakanaNameInput:
      "<p><strong>-Tên Katakana của quý khách bị thiếu một phần. Tên này sẽ được viết trên thẻ Rút tiền của quý khách. Quý khách có thể tìm thấy tên Katakana của mình trên thẻ bảo hiểm</strong></p>",
    roomNumberMismatch:
      "<p><strong>-Số phòng không giống như trên thẻ cư trú, Thẻ rút tiền của quý khách sẽ được giao tới địa chỉ này.</strong></p>",
    addressMismatch:
      "<p><strong>-Địa chỉ quý khách cung cấp không giống trên thẻ cư trú, Thẻ rút tiền của quý khách sẽ được giao tới địa chỉ này.</strong></p>",
    eyesClosedInSelfie:
      "<p><strong>-Quý khách nhắm mắt khi chụp nên cần chụp lại ảnh. Quý khách vui lòng chụp lại ảnh mở mắt rõ nét hơn.</strong></p>",
    rejectedByJintech: "<p><strong>-</strong></p>",
    missingCompanyName:
      "<p><strong>-Quý khách điền thiếu địa tên công ty. Quý khách có thể tìm thấy Tên công ty qua thẻ bảo hiểm hoặc phiếu lương.</strong></p>",
    no: `
            <p>
            </p>
        `,
    howDoIChangeTheGIGAAppLanguage:
      "<p>-Thay đổi ngôn ngữ: <a href='https://intercom.help/gigabank/vi/articles/6740402' style='color: #007bff; text-decoration: none;' target='_blank' rel='noopener noreferrer'>[Hướng dẫn thay đổi ngôn ngữ của app sang tiếng Việt]</a></p>",
    howDoTakeFacePicture:
      "<p>-Chụp ảnh khuôn mặt <a href='https://intercom.help/gigabank/vi/articles/6714154' style='color: #007bff; text-decoration: none;' target='_blank' rel='noopener noreferrer'>[Hướng dẫn chụp ảnh khuôn mặt]</a></p>",
    takingPhotosForTheIdentityVerificationProcess:
      "<p>-Cập nhật lại ảnh chụp để xác minh danh tính <a href='https://intercom.help/gigabank/vi/articles/7002469' style='color: #007bff; text-decoration: none;' target='_blank' rel='noopener noreferrer'>[Cách chụp ảnh thẻ ]</a></p>",
    inputDddressInTheGIGAAp:
      "<p>-Địa chỉ tại cung cấp trên ứng dụng phải giống hệt như địa chỉ trên thẻ cư trú. <a href='https://intercom.help/gigabank/vi/articles/6796052' style='color: #007bff; text-decoration: none;' target='_blank' rel='noopener noreferrer'>[Cách điền địa chỉ tại Nhật bản vào GIG-A app.]</a></p>",
  },
  en: {
    residentCard6MonthsExpired:
      "<h2>GIG-A Update - Residency Card Expires in Less Than 6 Months</h2><p><strong>Thank you</strong> for reaching out to us. We have received your inquiry and will get back to you within 24 hours.</p><p>Best Regards,</p><p>Customer Service Team</p>",
  },
};

function generateReply() {
  const customerNote1 = document.getElementById("customerNote1").value;
  const issueType = document.getElementById("issueType").value;
  const issueType2 = document.getElementById("issueType2").value;

  const issueType3 = document.getElementById("issueType3").value;
  const issueType4 = document.getElementById("issueType4").value;
  const faq1 = document.getElementById("faq1").value;
  const faq2 = document.getElementById("faq2").value;
  const faq3 = document.getElementById("faq3").value;
  const emailType = document.getElementById("emailType").value;

  const showFAQ = document.getElementById("faq1").value;

  const language = document.getElementById("language").value;
  let replyText = "";
  let replyText2 = "";
  let replyText3 = "";
  let replyText4 = "";
  let replyTextFAQ1 = "";
  let replyTextFAQ2 = "";
  let replyTextFAQ3 = "";
  let replyemailType = "";

  if (showFAQ === "no") {
    replyshowFAQ = "";
  } else {
    replyshowFAQ =
      "*Quý khách có thể tham khảo qua bài viết dưới đây";
  }

  // if (emailType === "reApply") {
  //   replyemailType = "Subject: GIG-A Cập Nhật Thông Tin Đơn Đăng Ký";
  // } else {
  //   if (emailType === "congratHowToActiveGIG-AApp") {
  //     replyemailType = "Subject: congratHowToUseGIG";
  //   } else {
  //     replyemailType = "lol";
  //   }
  // }

  switch(emailType) {
    case "reApply":
      replyemailType = "Subject: GIG-A Cập Nhật Thông Tin Đơn Đăng Ký";
      emailBody = `
      <p>
        Cảm ơn quý khách đã sử dụng dịch vụ của
        <a
          href="https://gigabank.jp/"
          target='_blank'
          style="color: #4c1fa6; text-decoration: none; font-weight: bold"
        >GIG-A</a>.
        Chúng tôi đã nhận được đơn đăng ký của quý khách, tuy nhiên chúng tôi
        cần quý khách nộp lại đơn do:
        </p>
    `
      break;
    case "congratHowToActiveGIG-AApp":
      replyemailType = "Subject: GIG-A- Chúc Mừng và Thông Báo Kích Hoạt Tài khoản      ";
      emailBody = `
      
    
    <div >
        <p>Cảm ơn Quý khách đã tham gia và đăng ký dịch vụ của GIG-A. <strong style="color: green;">Chúng tôi rất vui thông báo rằng đơn đăng ký của Quý khách đã được xử lý và chấp nhận thành công.</strong></p>

        <h3 style="color: #4c1fa6;           font-size: 20px;
        ">Hướng dẫn Kích Hoạt Tài Khoản</h3>
        <p>Để hoàn tất quá trình này và sử dụng dịch vụ, Quý khách vui lòng kích hoạt tài khoản theo hướng dẫn sau:</p>
        <ul style="list-style-type: disc; padding-left: 20px;">
            <li><a
            href="https://intercom.help/gigabank/vi/articles/7992209"
            target='_blank'
            style=" text-decoration: none"
          >[Hướng dẫn chi tiết về kích hoạt tài khoản] </a></li>
            <li><a
            href="        https://intercom.help/gigabank/vi/articles/6740402
            "
            target='_blank'
            style=" text-decoration: none"
          >[Cách chuyển ngôn ngữ sang Tiếng Việt trên ứng dụng] </a></li>
            </ul>
        <h3 style="color: #4c1fa6;           font-size: 20px;
        ">Hướng dẫn Nạp Tiền và Chuyển Khoản</h3>
        <ul style="list-style-type: disc; padding-left: 20px;">
            <li><strong style="color: #4c1fa6;">Nạp Tiền Miễn Phí:</strong> <a
            href="https://intercom.help/gigabank/vi/articles/7992209"
            target='_blank'
            style=" text-decoration: none"
          >[Hướng dẫn chi tiết về cách nạp tiền vào tài khoản] </a></li>
            <li><strong style="color: #4c1fa6;">Chuyển Khoản Miễn Phí:</strong> 
            <a
            href="https://intercom.help/gigabank/vi/articles/7992209"
            target='_blank'
            style=" text-decoration: none"
          >[Hướng dẫn chi tiết về cách chuyển khoản]. </a>
            Vui lòng lưu ý rằng:</li>
                <ul style="list-style-type: disc; padding-left: 40px;">
                    <li>Các giao dịch thực hiện sau 3 giờ chiều sẽ được xử lý vào lúc 9-10 giờ sáng ngày làm việc hôm sau.</li>
                    <li>Các giao dịch thực hiện từ 9 giờ sáng đến 3 giờ chiều sẽ được xử lý vào lúc 3 giờ chiều cùng ngày.</li>
                </ul>
            <li><strong style="color: #4c1fa6;">Tính năng chuyển khoản ngay lập tức</strong> đang trong quá trình phát triển và sẽ sớm có trong tương lai.</li>
        </ul>

        <h3 style="color: #4c1fa6;  font-size: 20px;">Nhận mã PIN và Thẻ</h3>
        <ul>
        <li> Quý khách có thể đặt và nhận mã PIN <a
        href="        https://intercom.help/gigabank/vi/articles/7337955
        "
        target='_blank'
        style=" text-decoration: none"
      >[hướng dẫn chi tiết nhận mã PIN]. </a> trong 3-5 ngày làm việc sau khi kích hoạt thành công. Vui lòng kiểm tra hòm thư
</li>
<li> Thẻ rút tiền mặt sẽ được gửi từ 7-10 ngày làm việc sau khi kích hoạt thành công
</li>
<li> Thẻ rút tiền mặt chỉ hỗ trợ và miễn phí tại 26000 cây ATM Seven Bank và Kiraboshi Bank.  <a
href="        https://intercom.help/gigabank/vi/articles/6743838
"
target='_blank'
style=" text-decoration: none"
>[hướng dẫn chi tiết Chi tiết hạn mức rút]. </a>
</li>
        </ul>
    </div>
  

    `;
      break;
    case "congratHowToUseGIG-AApp":
      replyemailType = "Subject: congratHowToUseGIG-AApp";
      break;
      case "not6Months":
      replyemailType = "Subject: GIG-A Cập nhật- Thẻ cư trú dưới 6 tháng hết hạn";
      emailBody = `
      <p>
        Cảm ơn quý khách đã sử dụng dịch vụ của
        <a
          href="https://gigabank.jp/"
          target='_blank'
          style="color: #4c1fa6; text-decoration: none; font-weight: bold"
        >GIG-A</a>.
        Chúng tôi đã nhận được đơn đăng ký của quý khách, nhưng thẻ cư trú của quý khách còn hạn dưới 6 tháng. Quý khách vui lòng gia hạn thẻ cư trú mới khi tạo tài khoản
      </p>
    `;
      break;
      case "noOpen":
        replyemailType = "Subject: GIG-A Xin lỗi vì không thể hỗ trợ mở tài khoản ngân hàng";
        emailBody = `
          Chúng tôi xin lỗi vì không thể hỗ trợ quý khách mở tài khoản ngân hàng.
          </p>          <p>

Chúng tôi rất tiếc vì sự bất tiện này và xin chân thành cảm ơn sự quan tâm của quý khách. Đồng thời, chúng tôi cam kết nỗ lực để nâng cao dịch vụ và mở rộng phạm vi hỗ trợ trong tương lai.

</p>
Chúng tôi xin lỗi và rất trân trọng sự khoan dung của quý khách.
        </p>
      `;
        break;
    default:
      replyemailType = "Please choose Email Type";
      break;
  }
  

  const template = languageReplies[language][issueType];
  const template2 = languageReplies[language][issueType2];
  const template3 = languageReplies[language][issueType3];
  const template4 = languageReplies[language][issueType4];
  const templatefaq1 = languageReplies[language][faq1];
  const templatefaq2 = languageReplies[language][faq2];
  const templatefaq3 = languageReplies[language][faq3];
  // const templateemailType = languageReplies[language][emailType];

  replyText = template.replace("{name}", customerNote1);
  replyText2 = template2;
  replyText3 = template3;
  replyText4 = template4;
  replyTextFAQ1 = templatefaq1;
  replyTextFAQ2 = templatefaq2;
  replyTextFAQ3 = templatefaq3;
  // replyemailType = templateemailType;

  document.getElementById("replyshowFAQ").innerHTML = replyshowFAQ; // Changed to innerHTML to support HTML tags
  document.getElementById("replyemailType").innerHTML = replyemailType; // Changed to innerHTML to support HTML tags
  document.getElementById("emailBody").innerHTML = emailBody; // Changed to innerHTML to support HTML tags

  document.getElementById("replyText").innerHTML = replyText; // Changed to innerHTML to support HTML tags
  document.getElementById("replyText2").innerHTML = replyText2; // Changed to innerHTML to support HTML tags
  document.getElementById("replyText3").innerHTML = replyText3; // Changed to innerHTML to support HTML tags
  document.getElementById("replyText4").innerHTML = replyText4; // Changed to innerHTML to support HTML tags
  document.getElementById("replyTextFAQ1").innerHTML = replyTextFAQ1; // Changed to innerHTML to support HTML tags
  document.getElementById("replyTextFAQ2").innerHTML = replyTextFAQ2; // Changed to innerHTML to support HTML tags
  document.getElementById("replyTextFAQ3").innerHTML = replyTextFAQ3; // Changed to innerHTML to support HTML tags
}
