import React, { useState } from "react";

const tabsData = [
  {
    id: "anc",
    icon: "🎧",
    tabText: ["Active Noise", "Cancellation"],
    title: "Active Noise Cancellation",
    description:
      "Control what you hear. And what you don't. AirPods Pro use advanced computational audio to block out external noise.",
    features: [
      "Up to 2x more Active Noise Cancellation",
      "Adaptive Audio automatically adjusts",
    ],
    image: "5.jpg",
  },
  {
    id: "spatial",
    icon: "🔊",
    tabText: ["Personalized", "Spatial Audio"],
    title: "Personalized Spatial Audio",
    description:
      "Immersive sound. Fine-tuned to you. Spatial Audio with dynamic head tracking places sound all around you.",
    features: [
      "Personalized Spatial Audio profile",
      "Works with Dolby Atmos content",
    ],
    image: "1.jpg",
  },
  {
    id: "health",
    icon: "❤️",
    tabText: ["Hearing", "Health"],
    title: "Hearing Health Features",
    description:
      "Check, aid, and help protect your hearing. A first-of-its-kind Hearing Health experience.",
    features: [
      "Hearing Test in minutes",
      "Clinical-grade Hearing Aid feature",
    ],
    image: "3.jpg",
  },
  {
    id: "battery",
    icon: "🔋",
    tabText: ["All-Day", "Battery Life"],
    title: "All-Day Battery Life",
    description:
      "Up to 6 hours of listening time with a single charge. And up to 30 hours total with the case.",
    features: [
      "6 hours listening, 4.5 hours talk time",
      "5 minutes charge = 1 hour listening",
    ],
    image: "imgg5.jpg",
  },
  {
    id: "design",
    icon: "✨",
    tabText: ["Premium", "Design"],
    title: "Premium Design & Comfort",
    description:
      "Redesigned for even better comfort and fit. New silicone ear tips in four sizes for the perfect seal.",
    features: [
      "New XS ear tips for smaller ears",
      "Swipe to adjust volume on the stem",
    ],
    image: "4.jpg",
  },
];

const HowItWorks = () => {
  const [activeTab, setActiveTab] = useState("anc");

  const activeContent = tabsData.find((tab) => tab.id === activeTab);

  return (
    <section className="section-how-it-works">
      <div className="container">
        <div className="how-it-works-wrapper">
          <h2 className="section-title">How AirPods Pro Work</h2>

          {/* Tabs Component */}
          <div className="print-tab">
            {/* Tabs Menu */}
            <ul className="print-tab-menu">
              {tabsData.map((tab) => (
                <li
                  key={tab.id}
                  className={activeTab === tab.id ? "active" : ""}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <div className="tab-icon">{tab.icon}</div>
                  <span className="tab-text">
                    {tab.tabText[0]}
                    <br />
                    {tab.tabText[1]}
                  </span>
                </li>
              ))}
            </ul>

            {/* Tabs Content */}
            <div className="print-tab-content">
              <div className="tab-content-inner">
                <div className="content-left">
                  <h3 className="content-title">{activeContent.title}</h3>
                  <p className="content-desc">{activeContent.description}</p>
                  <ul className="content-features">
                    {activeContent.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                  <button className="btn-learn-more">Learn More</button>
                </div>
                <div className="content-right">
                  <img
                    src={activeContent.image}
                    alt={activeContent.title}
                    className="content-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
