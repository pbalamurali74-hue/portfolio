# 📊 Customer Churn Prediction Engine & Dashboard

[![Live App](https://img.shields.io/badge/Streamlit-Live%20Demo-FF4B4B?style=for-the-badge&logo=streamlit&logoColor=white)](https://futureml02-6n7gwjmkst9xsnsnpbpmcq.streamlit.app/)
[![Python](https://img.shields.io/badge/Python-3.8+-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://python.org)
[![XGBoost](https://img.shields.io/badge/XGBoost-Classifier-111111?style=for-the-badge&logo=xgboost&logoColor=white)](https://xgboost.readthedocs.io)
[![Scikit-Learn](https://img.shields.io/badge/Scikit--Learn-F7931E?style=for-the-badge&logo=scikit-learn&logoColor=white)](https://scikit-learn.org)

An end-to-end Machine Learning classification system designed to predict customer churn risk, developed as **Task 2** during the **Future Interns Machine Learning Internship**. Deployed with an interactive **Streamlit** web application and comprehensive **Power BI** visual analytics.

---

## 🌐 Live Application

- 🖥️ **Interactive Streamlit App:** [futureml02-6n7gwjmkst9xsnsnpbpmcq.streamlit.app](https://futureml02-6n7gwjmkst9xsnsnpbpmcq.streamlit.app/)
- 📄 **Batch Test CSV:** Use `xgboost_churn_predictions.csv` included in this repository to test real-time batch predictions directly inside the app.

---

## 🔍 Problem Statement & Overview

Customer retention is vital for subscription and financial services. Identifying churn indicators early empowers organizations to implement targeted retention strategies before revenue loss occurs.

This project analyzes customer demographic, financial, and behavioral attributes from the `Churn_Modelling.csv` dataset, trains and benchmarks multiple classification algorithms (Logistic Regression, Random Forest, and XGBoost), and provides an intuitive web interface for real-time risk assessment.

---

## ✨ Key Features

1. **Feature Engineering & Preprocessing:**
   - Evaluated customer balance, credit score, tenure, active membership, estimated salary, and geography.
   - Handled categorical encoding and feature scaling for optimized convergence.
2. **Model Benchmarking:**
   - Evaluated **Logistic Regression**, **Random Forest**, and **XGBoost** on Accuracy, Precision, Recall, and ROC-AUC metrics.
   - Selected **XGBoost** as the primary production engine due to superior recall on churned customers.
3. **Interactive Streamlit Web GUI (`app.py`):**
   - Real-time customer churn probability calculator.
   - CSV upload feature for instantaneous batch classification.
4. **Visual Analytics & Explanations:**
   - Feature importance rankings revealing high-impact churn drivers.
   - Executive visualizations for customer segment distributions.

---

## 📈 Model Performance & Visualizations

| Metric | Logistic Regression | Random Forest | XGBoost (Final Model) |
| :--- | :--- | :--- | :--- |
| **Accuracy** | ~80.5% | ~85.2% | **86.1%** |
| **ROC-AUC** | 0.76 | 0.84 | **0.87** |
| **Recall (Churn)** | 0.21 | 0.47 | **0.53** |

### Feature Importance & Metrics
![Feature Importance & Churn Drivers](./image.png)
![Evaluation Matrix](./output.png)

---

## 📁 Repository Structure

```
FUTURE_ML_02/
├── app.py                         # Streamlit interactive web application
├── FUTURE_ML_02.ipynb             # Jupyter Notebook: EDA, model training & evaluation
├── Churn_Modelling.csv            # Training dataset with 10,000 customer records
├── xgboost_churn_predictions.csv  # Sample batch predictions test CSV
├── requirements.txt               # Package dependencies (Streamlit, XGBoost, etc.)
├── image.png                      # Model feature importance plot
├── output.png                     # Classification evaluation matrix
└── README.md                      # Detailed project documentation
```

---

## 🚀 Running Locally

### 1. Prerequisites
Ensure Python 3.8+ is installed.

### 2. Clone & Install Dependencies
```bash
git clone https://github.com/pbalamurali74-hue/FUTURE_ML_02.git
cd FUTURE_ML_02
pip install -r requirements.txt
```

### 3. Launch Streamlit Web App
```bash
streamlit run app.py
```
Open your browser at `http://localhost:8501` to use the interactive churn prediction dashboard.

### 4. Run Jupyter Notebook
```bash
jupyter notebook FUTURE_ML_02.ipynb
```

---

## 👤 Author

**Purushotham Balamurali**  
- **Role:** Machine Learning Intern @ Future Interns  
- **GitHub:** [@pbalamurali74-hue](https://github.com/pbalamurali74-hue)  
- **LinkedIn:** [purushothambalamurali](https://www.linkedin.com/in/purushothambalamurali/)  
- **Portfolio:** [Purushotham Balamurali Portfolio](https://github.com/pbalamurali74-hue)
