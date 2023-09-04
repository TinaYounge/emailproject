const languageReplies = {
    "vn": {
        "residentCard6MonthsExpired1": `
        <h2>Subject: GIG-A Cập nhật- Thẻ cư trú dưới 6 tháng hết hạn</h2>
        <p>Kính chào quý khách,</p>
        <p class="email-text">Cảm ơn quý khách đã sử dụng dịch vụ của chúng tôi. Chúng tôi đã nhận được đơn đăng ký của quý khách, nhưng <strong class="reason">thẻ cư trú của quý khách còn hạn dưới 6 tháng.</strong> Quý khách vui lòng gia hạn thẻ cư trú mới khi tạo tài khoản.</p>
        <p>Nếu quý khách có thêm câu hỏi hoặc cần sự hỗ trợ, đừng ngần ngại <a href="mailto:support@gigabank.jp">liên hệ với chúng tôi qua email này</a> hoặc phần <strong class="reason"> Chat để nhận hỗ trợ</strong> trong ứng dụng.</p>
        `,
        "residentCard6MonthsExpired": `
        <p class="email-text">Cảm ơn quý khách đã sử dụng dịch vụ của chúng tôi. Chúng tôi đã nhận được đơn đăng ký của quý khách, nhưng <strong class="reason">thẻ cư trú của quý khách còn hạn dưới 6 tháng.</strong> Quý khách vui lòng gia hạn thẻ cư trú mới khi tạo tài khoản.</p>
        <p>Nếu quý khách có thêm câu hỏi hoặc cần sự hỗ trợ, đừng ngần ngại <a href="mailto:support@gigabank.jp">liên hệ với chúng tôi qua email này</a> hoặc phần <strong class="reason"> Chat để nhận hỗ trợ</strong> trong ứng dụng.</p>
        `,
        "missingKatakana": `
            <p>Quý khách chưa nhập tên Katakana. Tên Katakana của quý khách sẽ dùng để viết trên thẻ rút tiền của quý khách. Quý khách cần cập nhật lại trên ứng dụng
            </p>
        `,
        "no": `
        
            <p>
            </p>
        `,
        "scanID": `
        <p>ảnh thẻ cư trú đã cung cấp không đủ rõ ràng nên quý khách cần cập nhật ảnh chụp mới trên ứng dụng</p>
    `,
        "general": `
            <h2>Dear {name},</h2>
            <p><strong>Thank you</strong> for reaching out to us. We have received your inquiry and will get back to you within 24 hours.</p>
            <p>Best Regards,</p>
            <p>Customer Service Team</p>
        `
    },

    "en": {
        "residentCard6MonthsExpired": `
        <h2>    GIG-A Update - Residency Card Expires in Less Than 6 Months</h2>
        <p><strong>Thank you</strong> for reaching out to us. We have received your inquiry and will get back to you within 24 hours.</p>
        <p>Best Regards,</p>
        <p>Customer Service Team</p>
    `
    },
    "fr": {
        // ... (French version)
    }
};

function generateReply() {
    const customerNote1 = document.getElementById("customerNote1").value;
    const issueType = document.getElementById("issueType").value;
    const issueType2 = document.getElementById("issueType2").value;

    console.log("first",issueType)
    const language = document.getElementById("language").value;
    let replyText = "";
    let replyText2 = "";

    // if (!customerNote) {
    //     replyText = "Please enter a customer name.";
    // } else {
        const template = languageReplies[language][issueType];
        const template2 = languageReplies[language][issueType2];

        replyText = template.replace("{name}", customerNote1);
        replyText2 = template2;

    // }

    document.getElementById("replyText").innerHTML = replyText;  // Changed to innerHTML to support HTML tags
    document.getElementById("replyText2").innerHTML = replyText2;  // Changed to innerHTML to support HTML tags

}
