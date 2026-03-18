#!/usr/bin/env python3
"""
Generate LaTeX resume and CV content from YAML data source.
Usage: 
  python generate_latex.py --format cv      # Full CV (all roles)
  python generate_latex.py --format resume  # 1-page resume (first 3 roles)
"""

import yaml
import argparse
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
    orcid_number = contact['orcid']
    
    header = []
    header.append("%====================")
    header.append("% CONTACT INFORMATION")
    header.append("% Auto-generated from YAML")
    header.append("%====================")
    header.append(f"\\def\\name{{{escape_latex(contact['name'])}}}")
    header.append(f"\\def\\phone{{{contact['phone']}}}")
    header.append(f"\\def\\city{{{contact['city']}}}")
    header.append(f"\\def\\email{{{contact['email']}}}")
    header.append(f"\\def\\LinkedIn{{{contact['linkedin']}}}")
    header.append(f"\\def\\github{{ }}")
    header.append(f"\\def\\role{{{escape_latex(contact['title'])}}}")
    header.append(f"\\def\\orcidnumber{{{orcid_number}}}")
    header.append(f"\\def\\orcidurl{{{contact['orcid_url']}}}")
    header.append(f"\\def\\websiteurl{{{contact['website']}}}")
    header.append(f"\\def\\portfoliourl{{ }}")
    header.append(f"\\def\\portfolioname{{ }}")
    
    return '\n'.join(header)

def generate_latex_content(data, format_type='cv'):
    """Generate LaTeX content from YAML data.
    
    Args:
        data: YAML data dictionary
        format_type: 'cv' (full) or 'resume' (1-page condensed)
    """
    latex = []
    
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
        latex.append("\\end{zitemize}")
        if format_type == 'cv':
            latex.append("")
    
    latex.append("\\vspace{6pt}\n" if format_type == 'resume' else "")
    
    # Technical Experience
    latex.append("%====================")
    latex.append("% TECHNICAL EXPERIENCE")
    latex.append("%====================\n")
    latex.append("\\section{Technical Experience}\n")
    
    # Determine which experiences to include
    exp_list = data['experience'] if format_type == 'cv' else data['experience'][:3]
    
    for i, exp in enumerate(exp_list):
        latex.append(f"\\subsection{{{{{escape_latex(exp['title'])} \\hfill {escape_latex(exp['dates'])}}}}}")
        org = f"{escape_latex(exp['organization'])}, {escape_latex(exp['department'])}" if exp.get('department') else escape_latex(exp['organization'])
        latex.append(f"\\subtext{{{org} \\hfill {escape_latex(exp['location'])}}}")
        latex.append("\\begin{zitemize}")
        for resp in exp['responsibilities']:
            latex.append(f"    \\item {escape_latex(resp)}")
        
        # Add conference as last bullet if specified
        if 'conference' in exp:
            conf = exp['conference']
            full_conf = f"{conf['name']}: {conf['description']}"
            latex.append(f"    \\item {escape_latex(full_conf)}")
        
        latex.append("\\end{zitemize}")
        
        # Add spacing between roles (resume only)
        if format_type == 'resume' and i < 2:
            latex.append("\\vspace{6pt}")
        elif format_type == 'cv':
            latex.append("")
    
    latex.append("\\vspace{6pt}\n" if format_type == 'resume' else "\\vspace{6pt}\n")
    
    # Skills & Certifications
    latex.append("%====================")
    latex.append("% SKILLS & CERTIFICATIONS")
    latex.append("%====================\n")
    latex.append("\\section{Skills and Certifications}\n")
    latex.append("\\renewcommand{\\arraystretch}{1.2}\n")
    latex.append("\\hyphenpenalty=10000")
    latex.append("\\exhyphenpenalty=10000\n")
    latex.append("\\begin{tabularx}{\\linewidth}{p{4.8cm} X}\n")
    
    for key, skill in data['skills'].items():
        name = escape_latex(skill.get('pdf_name', skill['name']))
        # Use non-breaking spaces around ampersand to keep category names together
        name = name.replace(' \\& ', '~\\&~')
        
        if 'subcategories' in skill:
            # Render category with subcategories
            subcats = skill['subcategories']
            for i, subcat in enumerate(subcats):
                subcat_name = escape_latex(subcat['name'])
                # Use non-breaking spaces around ampersand in subcategory names
                subcat_name = subcat_name.replace(' \\& ', '~\\&~')
                subcat_items = escape_latex(subcat['items'])
                
                if i == 0:
                    # First row: show category and first subcategory
                    latex.append(f"\\skills{{{name}}} & \\textit{{{subcat_name}}}\\normalfont{{: {subcat_items}}}")
                else:
                    # Subsequent rows: empty first column for cleaner layout
                    latex.append(f"  & \\textit{{{subcat_name}}}\\normalfont{{: {subcat_items}}}")
                
                latex.append(" \\\\\n")
        else:
            # Original rendering for categories without subcategories
            items = escape_latex(skill['items'])
            items = items.replace('\\LaTeX', '\\LaTeX')
            latex.append(f"\\skills{{{name}}} & {items} \\\\\n")
    
    latex.append("\\end{tabularx}\n")
    
    # Field Activities (resume only in table, CV in full section)
    if format_type == 'resume':
        latex.append("\\hyphenpenalty=10000")
        latex.append("\\exhyphenpenalty=10000\n")
        latex.append("\\begin{tabularx}{\\linewidth}{p{4.8cm} X}")
        field_activities_str = ", ".join(data['field_certifications'])
        latex.append(f"\\skills{{Field Activities}} & {escape_latex(field_activities_str)} \\\\")
        
        # Workshops
        workshops_str = ", ".join([f"{w['name']} ({w['year']})" for w in data['workshops']])
        latex.append(f"\\skills{{Workshops}} & {escape_latex(workshops_str)} \\\\")
        latex.append("\\end{tabularx}")
    
    # CV format: full Activities section with all details
    if format_type == 'cv':
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
        
        # Professional Affiliations & Certifications (two columns)
        latex.append("\\vspace{-0.5em}")
        latex.append("\\begin{multicols}{2}[")
        latex.append("\\raggedcolumns")
        latex.append("]")
        
        latex.append("\\noindent\\textbf{Certifications}")
        latex.append("\\vspace{-0.5em}")
        latex.append("\\begin{zitemize}")
        for cert in data['affiliations']['certifications']:
            latex.append(f"    \\item {escape_latex(cert)}")
        latex.append("\\end{zitemize}")
        
        latex.append("\\columnbreak")
        
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
    parser = argparse.ArgumentParser(description='Generate LaTeX resume or CV from YAML')
    parser.add_argument('--format', choices=['cv', 'resume'], default='cv',
                        help='Format to generate: cv (full) or resume (1-page)')
    args = parser.parse_args()
    
    # Read YAML data
    yaml_path = Path(__file__).parent.parent / '_data' / 'resume.yml'
    with open(yaml_path, 'r', encoding='utf-8') as f:
        data = yaml.safe_load(f)
    
    # Generate LaTeX header
    header_content = generate_header_definitions(data)
    header_path = Path(__file__).parent / 'header.tex'
    with open(header_path, 'w', encoding='utf-8') as f:
        f.write(header_content)
    print(f"Generated {header_path}")
    
    # Generate LaTeX content
    latex_content = generate_latex_content(data, format_type=args.format)
    output_path = Path(__file__).parent / 'content.tex'
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(latex_content)
    print(f"Generated {output_path}")
    
    # Compile PDF
    import subprocess
    import os
    
    resume_dir = Path(__file__).parent
    os.chdir(resume_dir)
    
    print(f"\nCompiling LaTeX to PDF ({args.format})...")
    result = subprocess.run(['pdflatex', '-interaction=nonstopmode', 'resume.tex'],
                          capture_output=True, text=True)
    
    if result.returncode == 0:
        pdf_original = resume_dir / 'resume.pdf'
        
        # Determine output PDF name based on format
        if args.format == 'cv':
            pdf_target = resume_dir / 'kschoedl.cv.pdf'
        else:  # resume
            pdf_target = resume_dir / 'kschoedl.resume.pdf'
        
        if pdf_original.exists():
            if pdf_target.exists():
                pdf_target.unlink()
            pdf_original.rename(pdf_target)
            print(f"Generated {pdf_target}")
        else:
            print("Warning: resume.pdf not found")
    else:
        print("LaTeX compilation failed")
        print(result.stdout)

if __name__ == '__main__':
    main()