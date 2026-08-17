# NASA Turbofan Engine Remaining Useful Life (RUL) Prediction

Predictive degradation modeling and Remaining Useful Life (RUL) estimation using multivariate sensor time-series measurements from the NASA C-MAPSS dataset.

---

## 📌 Overview

Equipment failures in critical aerospace applications can lead to catastrophic damage and unscheduled operational delays. Predictive maintenance leverages continuous sensor telemetry to estimate the **Remaining Useful Life (RUL)** of degrading components before failure criteria are breached.

This project implements an end-to-end Machine Learning pipeline to preprocess, analyze, and model degradation trends across multiple operating cycles using the **NASA Commercial Modular Aero-Propulsion System Simulation (C-MAPSS)** dataset.

---

## ⚙️ Key Features

- **Telemetry Data Processing:** Preprocessing of 21 sensor measurements across multiple run-to-failure engine units.
- **Degradation Labeling:** Calculation of ground-truth RUL targets for training datasets.
- **Sensor Selection & Normalization:** Statistical feature selection to isolate high-variance degradation signals from noisy channels.
- **Predictive Regression Modeling:** Training machine learning regression estimators to forecast remaining operating cycles.
- **Performance Evaluation:** Quantifying model precision using Root Mean Squared Error (RMSE) and R² metrics.

---

## 🛠️ Tech Stack

- **Language:** Python
- **Environment:** Jupyter Notebook
- **Libraries:** Pandas, NumPy, Scikit-Learn, Matplotlib, Seaborn

---

## 🏗️ System Workflow

```
[NASA C-MAPSS Telemetry] ➔ [Data Normalization & RUL Labeling] ➔ [Feature Selection] ➔ [ML Regression Model] ➔ [RUL Prediction & Evaluation]
```

---

## 🚀 Installation & Execution

### Prerequisites
- Python 3.8+
- Jupyter Notebook / Google Colab

### Installation
```bash
git clone https://github.com/pbalamurali74-hue/TurboFan-Degradation-ML-Project.git
cd TurboFan-Degradation-ML-Project
pip install -r requirements.txt
```

### Running the Notebook
```bash
jupyter notebook RUL_ML_PROJECT.ipynb
```

---

## 👤 Author

**Purushotham Balamurali**  
AI/ML Developer • Data Science Enthusiast  
GitHub: [@pbalamurali74-hue](https://github.com/pbalamurali74-hue)
