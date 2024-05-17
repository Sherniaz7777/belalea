import React from "react";
import "./BlogDetail.css";
import { useParams } from "react-router-dom";
import FooterTop from "../../footer/FooterTop";
import { useTranslation } from "react-i18next";

const BlogDetail = () => {
  const {t, i18n} = useTranslation()
  const params = useParams();
  return (
    <div>
      <div className="BlogDetail-backr"></div>
      <div className="container">
        <div className="BlogDetail-all">
          <div className="BlogDetail-content">
            <h5>

              {t("Дата публикации:")} <span>{t("Январь 6, 2024")}</span>
              <h1>{params.name}</h1>
              <p>
                Established fact that a reader will be distracted by the
                readable content of a page when looking a layout. The point of
                using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed
              </p>
            </h5>
          </div>
          <div className="BlogDetail-content-2-all">
            <div>
              <p style={{marginTop:80}}>
                Uniquely matrix economically sound value through cooperative
                technology. Competently parallel task fully researched data and
                enterprise process improvements. Collaboratively expedite
                quality manufactured products via client-focused results quickly
                communicate enabled technology and turnkey leadership skills.
                Uniquely enable accurate supply chains rather than friction
                technology.
              </p>

              <h1>Preferred Form of Vitamin D?</h1>
              <p style={{marginTop:24}}>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking a layout. The
                point of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to using 'Content here,
                content here', making it look like readable English.
              </p>

              <li>
                {" "}
                Publishing packages and web pageLorem Ipsum as their default
              </li>
              <li>
                {" "}
                Content here, content here', making it look like readable
              </li>
              <li> Packages and web pageLorem Ipsum as their default</li>

              <div className="BlogDetail-content-3-in">
                <h4>
                  “The first rule of any organic used in a business is that
                  nature applied to an efficient operation will magnify the
                  efficiency. The second is that organic applied to an
                  inefficient operation will magnify the health.”
                </h4>
              </div>
              <h2>Make perfect organic product with us</h2>
              <p style={{marginTop:24}}>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking a layout. The
                point of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to using 'Content here,
                content here', making it look like readable English.
              </p>
              <ul>
                1. Publishing packages and web pageLorem Ipsum as their default
              </ul>
              <ul>
                2. Content here, content here', making it look like readable
              </ul>
              <ul>3. Packages and web pageLorem Ipsum as their default</ul>
              <ul>4. more-or-less normal distribution of letters</ul>
            </div>
          </div>
        </div>
        <FooterTop/>
      </div>
    </div>
  );
};

export default BlogDetail;
