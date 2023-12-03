import React, { useState, useEffect } from "react";

const Class = () => {
    const [currentCategory, setCurrentCategory] = useState("*");

    useEffect(() => {
        const classItems = document.querySelectorAll(".mp-isotop-item");

        classItems.forEach((item) => {
            item.addEventListener("click", () => {
                classItems.forEach((item) => {
                    item.classList.remove("active");
                });

                item.classList.add("active");
            });
        });
    }, []);

    const data = [
        {
            id: 1,
            category: "Modular",
            title: "Componentes",
            imageUrl: "/image/square.png",
        },
        {
            id: 2,
            category: "Estados",
            title: "Hooks",
            imageUrl: "/image/amongus.png",
        },
        {
            id: 3,
            category: "Reactivo",
            title: "Transpila",
            imageUrl: "/image/round.png",
        },
    ];

    const filteredData =
        currentCategory === "*"
            ? data
            : data.filter((item) => item.category === currentCategory);

    const handleCategoryChange = (category) => {
        setCurrentCategory(category);
    };

    return (
        <div className="mp-portfolio-section section pb-20 figures">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 mb-65">
                        <div className="mp-isotop-filter isotop-filter">
                            <button
                                className={
                                    currentCategory === "*" ? "active" : ""
                                }
                                onClick={() => handleCategoryChange("*")}
                            >
                                All
                            </button>
                            {data.map((item) => (
                                <button
                                    key={item.id}
                                    className={
                                        currentCategory === item.category
                                            ? "active"
                                            : ""
                                    }
                                    onClick={() =>
                                        handleCategoryChange(item.category)
                                    }
                                >
                                    {item.category}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="col-xs-12">
                        <div
                            className="isotop-grid isotop-grid-masonry row"
                            id="portfolioGrid"
                        >
                            {filteredData.map((item) => (
                                <div
                                    key={item.id}
                                    className={`mp-isotop-item isotop-item ${item.category} col-sm-12 col-xs-12 mb-30`}
                                >
                                    <a href="#/">
                                        <img src={item.imageUrl} alt="" />
                                        <div className="content">
                                            <h5 className="title">
                                                {item.title}
                                            </h5>
                                            <span className="cat">
                                                {item.category}
                                            </span>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Class;
