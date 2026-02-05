# Resume Source Management

This directory contains the LaTeX source files for generating the PDF resume from a single data source.

##  File Structure

- **`../_data/resume.yml`** - **SINGLE SOURCE OF TRUTH** for all resume content (contact info, experience, skills, etc.)
- **`generate_latex.py`** - Python script to generate LaTeX files from YAML and compile PDF
- **`header.tex`** - Generated LaTeX contact definitions (do NOT edit directly)
- **`content.tex`** - Generated LaTeX body content (do NOT edit directly)
- **`resume.tex`** - Static LaTeX template that loads header.tex and content.tex
- **`TLCresume.sty`** - LaTeX style package (fonts, colors, spacing)
- **`kschoedl.resume.pdf`** - Final compiled PDF output

##  Architecture

```
resume.yml  ──→  generate_latex.py  ──→  header.tex + content.tex  ──→  resume.tex  ──→  kschoedl.resume.pdf
   (data)         (generator)              (generated)                   (template)        (output)
```

**How it works:**
1. All content lives in `_data/resume.yml` (contact info, education, experience, skills, etc.)
2. `generate_latex.py` reads the YAML and generates:
   - `header.tex` with contact definitions (name, phone, email, LinkedIn, ORCID, website)
   - `content.tex` with body content (profile, education, experience, skills, activities)
3. `resume.tex` is a static template that imports both generated files
4. Script automatically compiles to PDF and renames it to `kschoedl.resume.pdf`

##  Workflow

### To Update Resume Content:

1. **Edit `../_data/resume.yml`** - This is your single source of truth
2. **Run `python generate_latex.py`** - This will:
   - Generate `header.tex` and `content.tex` from YAML
   - Compile the PDF with pdflatex
   - Output `kschoedl.resume.pdf`
3. **Commit and push to GitHub Repo**
4. **Website updates automatically** - Jekyll pulls from the same YAML file

### Commands:

```bash
# In the resume/ directory:
cd resume

# Generate LaTeX files from YAML and compile PDF (all-in-one)
python generate_latex.py
```

That's it! The script handles everything.

##  Data Source

All resume content lives in `_data/resume.yml`:
- **Contact information**: name, title, phone, email, LinkedIn, GitHub, ORCID, website, profile photo
- **Profile**: objective and seeking statement
- **Education**: degrees, institutions, dates, coursework details
- **Work experience**: titles, organizations, dates, responsibilities
- **Skills**: organized by category with detailed items
- **Professional affiliations & certifications**
- **Field activities, conferences, interests**

Both the LaTeX PDF and the Jekyll website pull from this single YAML file.

##  Making Updates

**DO:**
- ✓ Edit `_data/resume.yml` for ALL content changes (including contact info)
- ✓ Run `python generate_latex.py` after editing YAML
- ✓ Edit `TLCresume.sty` for global style changes (fonts, colors, spacing)
- ✓ Edit `resume.tex` only for structural LaTeX template changes

**DON'T:**
- ✗ Edit `header.tex` or `content.tex` directly (auto-generated and overwritten)
- ✗ Edit contact info in `resume.tex` (now comes from YAML)
- ✗ Edit content in multiple places (maintain single source of truth)

##  Requirements

- Python 3 with PyYAML: `pip install pyyaml`
- LaTeX distribution with pdflatex (TeX Live, MikTeX, etc.)
- Jekyll (for website generation)

##  First-Time Setup

```bash
# Install Python dependencies
pip install pyyaml

# Generate LaTeX files and compile PDF
cd resume
python generate_latex.py
```
