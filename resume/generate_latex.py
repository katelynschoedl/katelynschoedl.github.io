#!/usr/bin/env python3
"""
Generate LaTeX resume content from YAML data source.
Usage: python generate_latex.py
"""

import yaml
from pathlib import Path

def escape_latex(text):
    """Escape special LaTeX characters."""
    replacements = {
        '&': r'\&',
        '%': r'\%',
        '$': r'\$',
        '#': r'\#',
        '_': r'\_',
        '{': r'\{',
        '}': r'\}',
        '~': r'\textasciitilde{}',
        '^': r'\textasciicircum{}',
    }
    for old, new in replacements.items():
        text = text.replace(old, new)
    return text

def generate_header_definitions(data):
    """Generate LaTeX header definitions from YAML contact data."""
    contact = data['contact']
    
    # Extract just the ORCID number from the full URL
    orcid_number = contact['orcid']
    
    header = []
    header.append("%====================")
    header.append("% CONTACT INFORMATION")
    header.append("% Auto-generated from YAML")
    header.append("%====================")
    header.append(f"\\def\\name{{{escape_latex(contact['name'])}}}")
    header.append(f"\\def\\phone{{{contact['phone']}}}")
    header.append(f"\\def\\city{{Seattle, USA - Grenoble, FR}}")  # Keep as-is or add to YAML if needed
    header.append(f"\\def\\email{{{contact['email']}}}")
    header.append(f"\\def\\LinkedIn{{{contact['linkedin']}}}")
    header.append(f"\\def\\github{{ }}")  # Empty for now
    header.append(f"\\def\\role{{{escape_latex(contact['title'])}}}")
    header.append(f"\\def\\orcidnumber{{{orcid_number}}}")
    header.append(f"\\def\\orcidurl{{{contact['orcid_url']}}}")
    header.append(f"\\def\\websiteurl{{{contact['website']}}}")
    header.append(f"\\def\\portfoliourl{{ }}")
    header.append(f"\\def\\portfolioname{{ }}")
    
    return '\n'.join(header)

def generate_latex_content(data):
    """Generate LaTeX content from YAML data."""
    latex = []
    
    # Objective Statement
    latex.append("%====================")
    latex.append("% Objective Statement")
    latex.append("%====================\n")
    latex.append("\\begin{center}")
    latex.append(f"\\textbf{{{escape_latex(data['profile']['objective'])}}}")
    latex.append("\\end{center}\n")
    latex.append("\\setlength{\\parindent}{1.5em}")
    # Combine background and seeking as a single paragraph, smaller font
    latex.append(f"\\small {escape_latex(data['profile']['background'])} {escape_latex(data['profile']['seeking'])}")
    latex.append("\\vspace{8pt}\n")
    
    # Education
    latex.append("%====================")
    latex.append("% EDUCATION")
    latex.append("%====================\n")
    latex.append("\\section{Education}\n")
    
    for edu in data['education']:
        latex.append(f"\\subsection{{{{{escape_latex(edu['degree'])} \\hfill {escape_latex(edu['dates'])}}}}}")
        latex.append(f"\\subtext{{{escape_latex(edu['institution'])} \\hfill {escape_latex(edu['location'])}}}")
        latex.append("\\begin{zitemize}")
        for detail in edu['details']:
            latex.append(f"    \\item {escape_latex(detail)}")
        latex.append("\\end{zitemize}\n")
    
    # Technical Experience
    latex.append("%====================")
    latex.append("% TECHNICAL EXPERIENCE")
    latex.append("%====================\n")
    latex.append("\\section{Technical Experience}\n")
    
    for exp in data['experience']:
        latex.append(f"\\subsection{{{{{escape_latex(exp['title'])} \\hfill {escape_latex(exp['dates'])}}}}}")
        org = f"{escape_latex(exp['organization'])}, {escape_latex(exp['department'])}" if exp.get('department') else escape_latex(exp['organization'])
        latex.append(f"\\subtext{{{org} \\hfill {escape_latex(exp['location'])}}}")
        latex.append("\\begin{zitemize}")
        for resp in exp['responsibilities']:
            latex.append(f"    \\item {escape_latex(resp)}")
        latex.append("\\end{zitemize}\n")
    
    # Skills
    latex.append("%====================")
    latex.append("% SKILLS")
    latex.append("%====================\n")
    latex.append("\\section{Skills}\n")
    latex.append("\\renewcommand{\\arraystretch}{1.2}\n")
    latex.append("\\begin{tabularx}{\\linewidth}{p{3.2cm} X}\n")
    
    for key, skill in data['skills'].items():
        # Use pdf_name if available, otherwise use name
        name = escape_latex(skill.get('pdf_name', skill['name']))
        items = escape_latex(skill['items'])
        # Handle LaTeX command in items
        items = items.replace('\\LaTeX', '\\LaTeX')
        latex.append(f"\\skills{{{name}}} &")
        # Special handling for English (native) - make it bold
        items = items.replace('English (native)', '\\textbf{English} (native)')
        latex.append(f"{items} \\\\\n")
    
    latex.append("\\end{tabularx}\n")
    
    # Activities
    latex.append("%====================")
    latex.append("% ACTIVITIES")
    latex.append("%====================\n")
    latex.append("\\section{Activities}\n")
    
    # Field & Alpine Activities
    latex.append("\\subsection{{Field \\& Alpine Activities}}")
    latex.append("\\begin{zitemize}")
    for activity in data['activities']:
        latex.append(f"    \\item {escape_latex(activity)}")
    latex.append("\\end{zitemize}")
    
    # Professional Affiliations & Certifications (two columns, no section title)
    latex.append("\\vspace{-0.5em}")
    latex.append("\\begin{multicols}{2}[")
    latex.append("\\raggedcolumns")
    latex.append("]")
    
    # Left column: Certifications
    latex.append("\\noindent\\textbf{Certifications}")
    latex.append("\\vspace{-0.5em}")
    latex.append("\\begin{zitemize}")
    for cert in data['affiliations']['certifications']:
        latex.append(f"    \\item {escape_latex(cert)}")
    latex.append("\\end{zitemize}")
    
    latex.append("\\columnbreak")
    
    # Right column: Professional Affiliations
    latex.append("\\noindent\\textbf{Professional Affiliations}")
    latex.append("\\vspace{-0.5em}")
    latex.append("\\begin{zitemize}")
    for affiliation in data['affiliations']['professional']:
        latex.append(f"    \\item {escape_latex(affiliation)}")
    latex.append("\\end{zitemize}")
    
    latex.append("\\end{multicols}\n")
    
    # Conferences & Workshops
    latex.append("\\subsection{{Conferences \\& Workshops}}")
    latex.append("\\begin{zitemize}")
    for conf in data['conferences']:
        name = escape_latex(conf['name'])
        location = escape_latex(conf['location'])
        year = conf['year']
        desc = escape_latex(conf['description'])
        latex.append(f"    \\item {name}, {location} ({year})")
        latex.append(f"    {desc}")
    latex.append("\\end{zitemize}")
    
    return '\n'.join(latex)

def main():
    # Read YAML data
    yaml_path = Path(__file__).parent.parent / '_data' / 'resume.yml'
    with open(yaml_path, 'r', encoding='utf-8') as f:
        data = yaml.safe_load(f)
    
    # Generate LaTeX header definitions
    header_content = generate_header_definitions(data)
    header_path = Path(__file__).parent / 'header.tex'
    with open(header_path, 'w', encoding='utf-8') as f:
        f.write(header_content)
    print(f"Generated {header_path}")
    
    # Generate LaTeX content
    latex_content = generate_latex_content(data)
    
    # Write to content.tex
    output_path = Path(__file__).parent / 'content.tex'
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(latex_content)
    
    print(f"Generated {output_path}")
    
    # Compile PDF with custom output name
    import subprocess
    import os
    
    resume_dir = Path(__file__).parent
    os.chdir(resume_dir)
    
    # Run pdflatex to generate resume.pdf
    print("\n Compiling LaTeX to PDF...")
    result = subprocess.run(['pdflatex', '-interaction=nonstopmode', 'resume.tex'],
                          capture_output=True, text=True)
    
    if result.returncode == 0:
        # Rename resume.pdf to kschoedl.resume.pdf
        pdf_original = resume_dir / 'resume.pdf'
        pdf_target = resume_dir / 'kschoedl.resume.pdf'
        
        if pdf_original.exists():
            if pdf_target.exists():
                pdf_target.unlink()
            pdf_original.rename(pdf_target)
            print(f" Generated {pdf_target}")
        else:
            print(" Warning: resume.pdf not found")
    else:
        print(" LaTeX compilation failed")
        print(result.stdout)

if __name__ == '__main__':
    main()