# Interactive Matrix Operations Tool

A clean, modular, and interactive dual-interface **Matrix Operations Engine** built with Python and NumPy. Supports desktop GUI (Tkinter) and CLI mode (`--cli`).

---

## ⚡ Features

- **Dual Execution Modes:** Launches a desktop Graphical User Interface (GUI) by default, or runs in a terminal Command Line Interface (CLI) when called with `--cli`.
- **Dynamic Dimension Auto-Binding:**
  - Auto-syncs matrix grid dimensions for addition and subtraction.
  - Dynamically locks the row dimension of Matrix B to the column dimension of Matrix A for matrix multiplication.
  - Automatically restricts grids to square matrices for determinant, inverse, and power operations.
- **Convenient Preset Loaders:**
  - **Identity:** Generates identity matrices instantly.
  - **Random:** Fills matrix cells with random integers between -9 and 9 for fast testing.
  - **Clear:** Resets grid input fields.
- **Formatted Outputs:** Clean mathematical layout using ASCII delimiters (`┌ ┐`, `│ │`, `└ ┘`).
- **Test Coverage:** Automated unit tests using `pytest`.

---

## 🛠️ Tech Stack

- **Language:** Python 3.8+
- **Mathematical Core:** NumPy
- **Desktop Interface:** Tkinter
- **Testing:** Pytest

---

## 🚀 Usage

### Launch Desktop GUI Mode
```bash
python matrix_operations.py
```

### Launch CLI Mode
```bash
python matrix_operations.py --cli
```

### Run Unit Tests
```bash
pytest test_matrix_operations.py
```

---

## 👤 Author

**Purushotham Balamurali**  
GitHub: [@pbalamurali74-hue](https://github.com/pbalamurali74-hue)
