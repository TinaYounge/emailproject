const languageReplies = {
    "vn": {
        "residentCard6MonthsExpired": `
        <h2>Subject: GIG-A Cập nhật- Thẻ cư trú dưới 6 tháng hết hạn</h2>
        <p>Kính chào quý khách,</p>
        <p class="email-text">Cảm ơn quý khách đã sử dụng dịch vụ của chúng tôi. Chúng tôi đã nhận được đơn đăng ký của quý khách, nhưng <strong class="reason">thẻ cư trú của quý khách còn hạn dưới 6 tháng.</strong> Quý khách vui lòng gia hạn thẻ cư trú mới khi tạo tài khoản.</p>
        <p>Nếu quý khách có thêm câu hỏi hoặc cần sự hỗ trợ, đừng ngần ngại <a href="mailto:support@gigabank.jp">liên hệ với chúng tôi qua email này</a> hoặc phần <strong class="reason"> Chat để nhận hỗ trợ</strong>trong ứng dụng.</p>
        <div class="signature">
            <h3>Trân trọng,</h3>
            <p>GIG-A- Đội ngũ chăm sóc khách hàng</p>
        `,
        "technical": `
            <h2>Dear {name},</h2>
            <p>We have received your <strong><a href='#'>technical issue</a></strong>. Our technical team is already working to resolve your issue as quickly as possible.</p>
            <p>Best Regards,</p>
            <p>Technical Support Team</p>
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
    const customerNote = document.getElementById("customerNote").value;
    const issueType = document.getElementById("issueType").value;
    const language = document.getElementById("language").value;
    let replyText = "";

    // if (!customerNote) {
    //     replyText = "Please enter a customer name.";
    // } else {
        const template = languageReplies[language][issueType];
        replyText = template.replace("{name}", customerNote);
    // }

    document.getElementById("replyText").innerHTML = replyText;  // Changed to innerHTML to support HTML tags
}
