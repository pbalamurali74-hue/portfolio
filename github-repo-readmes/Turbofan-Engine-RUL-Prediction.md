# ✈️ Turbofan Engine Remaining Useful Life Prediction

End-to-end **predictive maintenance** system for estimating the Remaining Useful Life (RUL) of turbofan engines using the NASA C-MAPSS dataset.

## What this project does
- Processes multivariate engine sensor telemetry.
- Prevents data leakage with engine-level train/validation splits.
- Generates RUL targets with piecewise-linear capping.
- Engineers rolling statistical features and temporal windows.
- Benchmarks Linear Regression, Random Forest, XGBoost, 1D-CNN and PyTorch LSTM.
- Evaluates models using **RMSE, MAE, R² and NASA asymmetric scoring**.
- Provides a Streamlit maintenance console for inference and analysis.

## Best result
The PyTorch LSTM achieved **14.72 RMSE, 11.19 MAE and 0.8745 R²** on the reported FD001 test evaluation.

## Tech Stack
Python • Pandas • NumPy • Scikit-Learn • XGBoost • PyTorch • Streamlit • Jupyter

## Architecture
```
C-MAPSS Telemetry
      ↓
Validation + EDA
      ↓
Leak-Free Preprocessing
      ↓
RUL Target + Feature Engineering
      ↓
Classical ML + Deep Learning
      ↓
Benchmarking
      ↓
Maintenance Dashboard
```

## Repository
```
config/       Configuration
data/         Raw and processed datasets
notebooks/    EDA and experiments
src/          Data, features, training and evaluation
models/       Saved model artifacts
reports/      Evaluation outputs
```

## Run
```bash
pip install -r requirements.txt
streamlit run src/app.py
```

> A portfolio project demonstrating time-series ML, predictive maintenance, model evaluation and production-oriented ML workflow.

## Author
**Purushotham Balamurali**  
[GitHub](https://github.com/pbalamurali74-hue) • [LinkedIn](https://www.linkedin.com/in/purushothambalamurali/)