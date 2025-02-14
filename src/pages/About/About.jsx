import "./About.scss";

const About = () => {
    const aboutContent = [
        {
            titleEn: "Virtual Dream",
            titleCh: "團隊信念",
            texts: [
                "是個充滿熱情的遊戲開發公司，專注於遊戲訂製、發行與平台設計服務，無論是打造專屬遊戲體驗，還是設計創新的平台，我們的團隊都將熱愛與創意融入每一個專案，讓每個遊戲夢想成真",
                "服務範圍涵蓋遊戲訂製、發行、客服、軟體設計、平台設計及SDK設計等。我們深愛遊戲，並致力於提供最具創意和競爭力的解決方案，幫助客戶實現業務目標，並提升品牌價值",
                "我們堅信創新與專業是成功的關鍵，並將每個細節做到極致，帶來與眾不同的遊戲體驗，助您在激烈的市場競爭中脫穎而出"
            ],
            imgUrl: "https://cdn.jsdelivr.net/gh/RalphSN/images@main/official-images/about.jpg"
        }
    ];

    // **解構數據**
    const { titleEn, titleCh, texts, imgUrl } = aboutContent[0];

    return (
        <section className="about">
            <div className="about-pic">
                <img src={imgUrl} alt="團結照片" />
            </div>
            <div className="about-content">
                <h2 className="about-title en">{titleEn}</h2>
                <h2 className="about-title ch">{titleCh}</h2>
                {texts.map((text, index) => (
                    <p key={index} className="about-text">{text}</p>
                ))}
            </div>
        </section>
    );
};

export default About;

