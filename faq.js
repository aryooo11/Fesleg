$(document).ready(function () {
    $.ajax({
        url: 'faq.json',
        dataType: 'json',
        success: function (faqs) {
            const container = $('#faq-container');

            faqs.forEach((item, index) => {
                const faqItem = $(`
                            <div class="faq-item">
                                <button class="faq-question">
                                    ${item.question}
                                    <span class="icon">+</span>
                                </button>
                                <div class="faq-answer">
                                    <p>${item.answer}</p>
                                </div>
                            </div>
                        `);

                faqItem.find('.faq-question').on('click', function () {
                    faqItem.toggleClass('active');
                });

                container.append(faqItem);
            });
        },
        error: function (xhr, status, error) {
            console.error("Gagal memuat FAQ:", error);
        }
    });
});