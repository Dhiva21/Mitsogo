import React from "react";
import android from "../assets/images/android.svg";
import "../assets/css/Platform.css";

const platforms = [
  { name: "Android", logo: android },
  { name: "Windows",  logo: android  },
  { name: "iOS",  logo: android },
  { name: "Android TV",  logo: android },
  { name: "Apple TV",  logo: android  },
  { name: "Fire TV",  logo: android  },
];

const Platform = () => {
  return (
    <section className="platformSection">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="platform-section text-center">
              <h2>Platforms supported</h2>

              <div className="row justify-content-center">
                {platforms.map((platform, index) => (
                  <div key={index} className="col-md-2">
                    <div className="platform-card">
                      <img src={platform.logo} alt={platform.name} />
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Platform;
