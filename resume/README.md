# Resume Source Management

This directory contains the LaTeX source files for generating the PDF resume from a single data source.

## 📁 File Structure

- **`content.tex`** - Generated LaTeX content (do NOT edit directly)
- **`resume.tex`** - Main LaTeX document with formatting and header
- **`TLCresume.sty`** - LaTeX style package (fonts, colors, spacing)
- **`generate_latex.py`** - Python script to generate content.tex from YAML data
- **`../_data/resume.yml`** - **SINGLE SOURCE OF TRUTH** for all resume content

## 🔄 Workflow

### To Update Resume Content:

1. **Edit `../_data/resume.yml`** - This is your single source of truth
2. **Generate LaTeX**: Run `python generate_latex.py` to create `content.tex`
3. **Compile PDF**: Run `pdflatex resume.tex` to generate the PDF
4. **Website updates automatically** - Jekyll pulls from the same YAML file

### Commands:

```bash
# In the resume/ directory:
cd resume

# Generate content.tex from YAML data
python generate_latex.py

# Compile PDF (may need to run twice for proper formatting)
pdflatex resume.tex
pdflatex resume.tex

# Clean up LaTeX build files
rm *.aux *.log *.out *.synctex.gz
```

## 🎯 Data Source

All resume content lives in `_data/resume.yml`:
- Profile objective and seeking statement
- Education details
- Work experience with responsibilities
- Skills organized by category
- Professional affiliations & certifications
- Activities, conferences, interests

Both the LaTeX PDF (`content.tex`) and the Jekyll website (`pages/resume_data_version.md`) pull from this single YAML file.

## 📝 Making Updates

**DO:**
- ✓ Edit `_data/resume.yml` for content changes
- ✓ Run `generate_latex.py` after editing YAML
- ✓ Edit `resume.tex` for header/contact info or LaTeX-specific formatting
- ✓ Edit `TLCresume.sty` for global style changes

**DON'T:**
- ✗ Edit `content.tex` directly (it gets overwritten by the Python script)
- ✗ Edit content in multiple places (maintain single source of truth)

## 🔧 Requirements

- Python 3 with PyYAML: `pip install pyyaml`
- LaTeX distribution (TeX Live, MikTeX, etc.)
- Jekyll (for website generation)

## 🚀 First-Time Setup

```bash
# Install Python dependencies
pip install pyyaml

# Generate initial content.tex
python generate_latex.py

# Compile PDF
pdflatex resume.tex
```
