## Bangalore Real Estate Price Predictor

This is a full-stack project that predicts Bangalore house prices using a machine learning model. The project includes a data-driven model, a RESTful API built with Flask, and an interactive web application.

## 📝 Description

This project engineers a machine learning solution to accurately predict Bangalore house prices. It leverages a dataset with key features such as location, BHK (bedrooms, hall, kitchen), square footage, and bathrooms. The solution includes a comprehensive data preprocessing pipeline and a tuned regression model to achieve high prediction accuracy. The model is integrated into a web application, allowing users to get real-time price estimations through a user-friendly interface.

## ✨ Key Features

* **Accurate ML Model:** Utilizes a tuned regression model to provide highly accurate price predictions.
* **Data Preprocessing Pipeline:** Implements a robust pipeline for handling missing data, removing outliers, and encoding categorical features.
* **Flask-based API:** A lightweight backend provides a RESTful API for seamless communication with the frontend.
* **Interactive Frontend:** A responsive web interface built with HTML, CSS, and JavaScript allows for real-world property price estimation.

## 🖼️ Demo

[![Project Demo Image](C:\Users\Bharti Gangwar\OneDrive\Desktop\BHP\pro_demo.png)]


## 🛠️ Tech Stack

* **Python:** The core language for the backend logic and data science.
* **Flask:** The web framework used to build the backend API.
* **NumPy & Pandas:** Libraries for efficient data manipulation and analysis.
* **Scikit-learn:** The primary library for building, training, and deploying the machine learning model.
* **HTML, CSS, & JavaScript:** Used to build the interactive and responsive frontend.

## 📈 Data Science Methodology

The machine learning model for this project was developed using a standard data science pipeline:

1.  **Exploratory Data Analysis (EDA):** Performed initial analysis to understand data distribution and identify key features.
2.  **Data Cleaning:** Handled missing values and removed outliers based on statistical analysis.
3.  **Feature Engineering:** Engineered new features and used one-hot encoding to handle categorical data like locations.
4.  **Model Training:** Trained and evaluated multiple regression models and used cross-validation to select the best performer.
5.  **Model Export:** The final trained model and other necessary files were saved to the `artifacts` directory for use by the Flask server.
