# Customer Churn Prediction Engine & Dashboard

End-to-end Machine Learning classification system designed to predict customer churn, deployed with an interactive Streamlit web dashboard and Power BI executive analytics.

---

## 🔍 Overview

Customer retention is vital for subscription and financial services. Identifying churn indicators early empowers organizations to implement targeted retention strategies before revenue loss occurs.

This project, completed during the **Future Interns Machine Learning Internship**, compares multiple classification algorithms (Logistic Regression, Random Forest, and XGBoost) to predict churn probabilities and delivers an interactive user interface for real-time risk assessment.

---

## ✨ Key Features

- **Feature Engineering:** Preprocessed customer financial metrics, tenure, contract types, and interaction history.
- **Model Benchmarking:** Evaluated Logistic Regression, Random Forest, and XGBoost models on accuracy, precision, and recall metrics.
- **XGBoost Classifier:** Selected XGBoost for primary deployment due to superior classification performance.
- **Streamlit Web Application:** Interactive web app enabling users to upload CSV customer datasets or input attributes to compute real-time churn risk.
- **Power BI Intelligence:** Executive dashboard visualizing high-risk churn drivers, balance distribution, and segment churn ratios.

---

## 🛠️ Tech Stack

- **Machine Learning & Data:** Python, XGBoost, Scikit-Learn, Pandas, NumPy
- **Interactive UI:** Streamlit
- **Business Intelligence:** Power BI
- **Visualization:** Matplotlib, Seaborn

---

## 🖥️ Live Application & Testing

- 🔗 **Streamlit Dashboard:** [futureml02-6n7gwjmkst9xsnsnpbpmcq.streamlit.app](https://futureml02-6n7gwjmkst9xsnsnpbpmcq.streamlit.app/)
- 📄 **Sample CSV:** Use `xgboost_churn_predictions.csv` included in this repository to test batch predictions.

---

## 🚀 Running Locally

```bash
git clone https://github.com/pbalamurali74-hue/FUTURE_ML_02.git
cd FUTURE_ML_02
pip install -r requirements.txt
streamlit run app.py
```

---

## 👤 Author

**Purushotham Balamurali**  
Machine Learning Intern @ Future Interns  
GitHub: [@pbalamurali74-hue](https://github.com/pbalamurali74-hue)
