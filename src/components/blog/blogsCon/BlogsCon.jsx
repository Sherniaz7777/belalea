import React from "react";
import "./BlogsCon.css";
import Blog1Img from "../../../assets/Image (5).png";
import Blog2Img from "../../../assets/Photo.png";
import Blog3Img from "../../../assets/Image (10).png";
import Blog4Img from "../../../assets/Image (11).png";
import strelka from "../../../assets/Aerrow.png";
import { NavLink } from "react-router-dom";

const BlogsCon = () => {
  const blogsArr = [
    {
      name: "Test 1",
      des: "Uniquely matrix economically sound value through cooperative technology. Competently parallel task…",
      id: 1,
      backround: `url("${Blog4Img}")`,
    },
    {
      name: "Test 2",
      des: "Uniquely matrix economically sound value through cooperative technology. Competently parallel task…",
      id: 2,
      backround: `url("${Blog1Img}")`,
    },
    {
      name: "Test 3",
      des: "Uniquely matrix economically sound value through cooperative technology. Competently parallel task…",
      id: 3,
      backround: `url("${Blog3Img}")`,
    },
    {
      name: "Test 4",
      des: "Uniquely matrix economically sound value through cooperative technology. Competently parallel task…",
      id: 4,
      backround: `url("${Blog2Img}")`,
    },
    {
      name: "Research More Organic Food",
      des: "Uniquely matrix economically sound value through cooperative technology. Competently parallel task…",
      id: 5,
      backround: `url("${Blog4Img}")`,
    },
  ];

  return (
    <div className="blogs-all">
      <div className="container">
        <div className="blogsCon-all">
          {blogsArr.map((el) => (
            <div
              className="blogCon-1"
              key={el.id}
              style={{ backgroundImage: el.backround }}
            >
              <div className="blogCon-data">
                25
                <br />
                Nov
              </div>
              <div className="blogCon-text">
                <h2>{el.name}</h2>
                <p>{el.des}</p>
                <NavLink className={'NavLink'} to={`/blogDetail/${el.name}`}>
                  <button>
                    <h4>
                      Read More <img src={strelka} alt="" />
                    </h4>
                  </button>
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsCon;
