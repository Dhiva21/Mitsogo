import React from "react";
import android from "../assets/images/android.svg";
import appleTv from "../assets/images/apple-tv.svg";
import androidTv from "../assets/images/android-tv.svg";
import windows from "../assets/images/windows.svg";
import ios from "../assets/images/ios.svg";
import fireTv from "../assets/images/amazon-fire.png";
import "../assets/css/Platform.css";

const platforms = [
  { name: "Android", logo: android },
  { name: "Windows",  logo: windows  },
  { name: "iOS",  logo: ios },
  { name: "Android TV",  logo: androidTv },
  { name: "Apple TV",  logo: appleTv  },
  { name: "Fire TV",  logo: fireTv  },
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
                  <div key={index} className="col-xl-2 col-md-4 col-6">
                    <div className="platform-card  mb-3">
                       <img loading='lazy' src={platform.logo} alt={platform.name} />
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
