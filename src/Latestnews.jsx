import React from 'react'

export default function Latestnews() {
  return (
    <div className="container-fluid" id="slide-section">
          <div className="container">
            <div>
              <p id="news">Latest News</p>
            </div>
            <marquee
              direction="”right”"
              onmouseover="stop()"
              onmouseout="start()"
              style={{ marginTop: 8 }}
            >
              <span>
                🟥  एक समग्र आईडी होते हुए नवीन समग्र आईडी बनवाना नियम विरुध हैं|
              </span>
              <span>
                🟥  नवीन समग्र आईडी बनाने से पहले ये जांच लें, कि आपका समग्र पहले से
                बना हुआ तो नहीं हैं।
              </span>
              <span>
                🟥  नवीन समग्र बनाने के लिए आधार अनिवार्य हैं। समग्र में आधार ई-
                केवाईसी करने के 2 विकल्प उपलब्ध हैं ।
              </span>
              <span>
                🟥  1. आधार में दर्ज मोबाइल पर OTP के माध्यम से एवं 2. बायोमैट्रिक के
                माध्यम से।
              </span>
            </marquee>
          </div>
        </div>
  )
}
