# Resume & CV Source Management

This directory contains the LaTeX source files for generating both a 1-page resume and a comprehensive 2-page CV from a single data source.

##  File Structure

- **`../_data/resume.yml`** - **SINGLE SOURCE OF TRUTH** for all resume/CV content (contact info, experience, skills, etc.)
- **`generate_latex.py`** - Python script to generate 1-page resume PDF
- **`generate_latex_cv.py`** - Python script to generate full 2-page CV PDF
- **`header.tex`** - Generated LaTeX contact definitions (do NOT edit directly)
- **`content.tex`** - Generated LaTeX body content (do NOT edit directly)
- **`resume.tex`** - Static LaTeX template that loads header.tex and content.tex
- **`TLCresume.sty`** - LaTeX style package (fonts, colors, spacing)
- **`kschoedl.resume.pdf`** - Final 1-page resume PDF output
- **`kschoedl.cv.pdf`** - Final 2-page CV PDF output

##  Architecture

```
resume.yml  ──→  generate_latex.py     ──→  header.tex + content.tex  ──→  resume.tex  ──→  kschoedl.resume.pdf (1-page)
   (data)         (1-page generator)          (generated)                   (template)        (output)
            ──→  generate_latex_cv.py  ──→  header.tex + content.tex  ──→  resume.tex  ──→  kschoedl.cv.pdf (2-page)
                  (full CV generator)         (generated)                   (template)        (output)
```

**How it works:**
1. All content lives in `_data/resume.yml` (contact info, education, experience, skills, etc.)
2. Two generator scripts create different PDFs:
   - **`generate_latex.py`** - Creates 1-page resume with essential content (recent roles, skills, key conferences embedded)
   - **`generate_latex_cv.py`** - Creates full 2-page CV with everything (all roles, education, activities, affiliations, conferences)
3. Both scripts generate `header.tex` and `content.tex` then compile to separate PDFs
4. `resume.tex` is a static template that imports both generated files

##  Workflow

### To Update Resume/CV Content:

1. **Edit `../_data/resume.yml`** - This is your single source of truth
2. **Run the appropriate generator:**
   - `python generate_latex.py` - Generate 1-page resume
   - `python generate_latex_cv.py` - Generate full CV
   - Or run both to update both PDFs
3. **Commit and push to GitHub Repo**
4. **Website updates automatically** - Jekyll pulls from the same YAML file

### Commands:

```bash
# In the resume/ directory:
cd resume

# Generate 1-page resume PDF
python generate_latex.py

# Generate full 2-page CV PDF
python generate_latex_cv.py

# Or generate both:
python generate_latex.py; python generate_latex_cv.py
```

##  Differences: 1-Page Resume vs. 2-Page CV

**1-Page Resume (`kschoedl.resume.pdf`):**
- Recent 3 roles only (UW, Microsoft, Amazon Avionics)
- Skills table
- Key conferences embedded as bullets in respective roles
- No Education, Activities, or Affiliations sections

**2-Page CV (`kschoedl.cv.pdf`):**
- All roles including earlier positions
- Full Education section with coursework
- Complete Activities, Affiliations, and Certifications sections
- Standalone Conferences & Workshops section
- All details preserved

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
