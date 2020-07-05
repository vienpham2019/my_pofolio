import React , {Component} from 'react'
import my_projects from './my_projects'
import {link , about_paragraph , skill_paragraph , work_experience , educations} from './resume_infomation'
import jsPDF from 'jspdf'

class Resume extends Component {
    downloadResume = () => {
        let doc = new jsPDF({lineHeight: 1.5})
        let x = 15
        let resume_h = 25
        let space = 4 // space between section
        let lMargin=15; //left margin in mm
        let rMargin=15; //right margin in mm
        let pdfInMM=210;  // width of A4 in mm

        doc.setFontSize('24')
        doc.setFontStyle('bold')
        doc.text("PHAM" , doc.getTextWidth('VIEN') + 2 + x , resume_h)
        doc.setTextColor(31, 93, 187)
        doc.text("VIEN", x , resume_h)

        doc.setTextColor(0)
        doc.setFontSize('11')
        doc.setFontType("normal")
        doc.text('Houston, Texas | 502-296-0606', 145 , resume_h)

        resume_h += doc.getTextDimensions('VIEN').h + space
        doc.setFontSize('12')
        doc.setFontStyle('bold')
        doc.text('Software Engineer' , x , resume_h)

        // links
        doc.setFontStyle('normal')
        let link_x = 94
        link.forEach(l => {
            doc.setDrawColor(31, 93, 187)
            doc.setTextColor(31, 93, 187)
            doc.setFontSize('11')
            doc.textWithLink(l[0], link_x, resume_h, { url: l[1]})
            let width = doc.getTextWidth(l[0])
            link_x += (width + 1)
            doc.line(link_x - width - 1, resume_h + 1, link_x - 1, resume_h + 1 )

            if(l[0] !== link[link.length - 1][0]){
                doc.setTextColor(0)
                doc.text('|', link_x, resume_h)
                let vertical_bar_w = doc.getTextWidth('|')
                link_x += vertical_bar_w + 1
            }
        })
        
        resume_h += doc.getTextDimensions('Software Engineer').h + space 

        // about
        doc.setFontSize('10')
        doc.setTextColor(0)
        var about_lines = doc.splitTextToSize(about_paragraph, (pdfInMM-lMargin-rMargin))
        doc.text(about_lines , x , resume_h , {maxWidth: 185, align: "justify"}) 

        resume_h += doc.getTextDimensions(about_lines).h + space 

        // Technical Skills
        resume_h = this.resume_header(doc, 'TECHNICAL SKILLS' , x , resume_h )

        doc.setFontStyle('normal')
        doc.setFontSize('10')
        let skill_lines = doc.splitTextToSize(skill_paragraph, (pdfInMM-lMargin-rMargin))
        doc.text(skill_lines , x , resume_h , {maxWidth: 180, align: "justify"})

        resume_h += doc.getTextDimensions(skill_lines).h + space 

        // Technical Project
        resume_h = this.resume_header(doc, 'TECHNICAL PROJECTS' , x , resume_h )

        // Projects 
        const project_name = ['Vintage Village' , 'Movies' , 'League Tracker']
        const projects = my_projects.filter(p => project_name.includes(p.title))

        projects.forEach(project => {
            let project_w = x
            doc.setFontStyle('bold')
            doc.setFontSize('10')

            doc.text(project.title , project_w , resume_h)
            let project_title_dimentions = doc.getTextDimensions(project.title)
            project_w += project_title_dimentions.w
            doc.setFontStyle('normal')

            doc.text(' - ' , project_w , resume_h)
            let dash_w = doc.getTextWidth(' - ')
            project_w += (dash_w + 1)

            doc.setTextColor(31, 93, 187)
            doc.textWithLink('Github', project_w , resume_h, { url: project.github})
            let project_github_w = doc.getTextWidth('Github')
            project_w += (project_github_w + 1)

            doc.setTextColor(0)
            doc.text('|', project_w , resume_h)
            let vertical_bar_w = doc.getTextWidth('|')
            project_w += (vertical_bar_w  + 1)

            doc.setTextColor(31, 93, 187)
            doc.textWithLink('Demo', project_w , resume_h, { url: project.demo})

            resume_h += project_title_dimentions.h

            doc.setTextColor(0)
            doc.setFontType("italic")
            doc.text(project.resume_description , x , resume_h + 1)
            resume_h += doc.getTextDimensions(project.resume_description).h + 2

            doc.setFontStyle('normal')
            resume_h = this.resume_list(doc , project.details , x ,resume_h) + 2

        })

        // Work Experience
        resume_h = this.resume_header(doc, 'WORK EXPERIENCE' , x , resume_h )

        work_experience.forEach(work => {
            doc.setFontStyle('bold')
            doc.setFontSize('10')
            doc.text(work.title , x , resume_h) 
            let work_experience_title_dimentions = doc.getTextDimensions(work.title)
            doc.setFontStyle('normal')
            doc.text(`, ${work.location}`, x + work_experience_title_dimentions.w , resume_h)
            doc.text(work.date , 196 - doc.getTextWidth(work.date), resume_h)

            resume_h += work_experience_title_dimentions.h + 2

            doc.text(work.position , x , resume_h)
            resume_h += doc.getTextDimensions(work.position).h + 2

            resume_h = this.resume_list(doc , work.details , x ,resume_h) + 2
        })

        // Education
        resume_h = this.resume_header(doc, 'EDUCATION' , x , resume_h )

        educations.forEach(education => {
            let {title , date , location , description} = education
            doc.setFontStyle('bold')
            doc.setFontSize('10')
            doc.text(title , x , resume_h) 
            let education_title_dimentions = doc.getTextDimensions(title)
            doc.setFontStyle('normal')
            doc.text(`, ${location}`, x + education_title_dimentions.w , resume_h)
            doc.text(date , 196 - doc.getTextWidth(date), resume_h)
            resume_h += education_title_dimentions.h + 1
            doc.text(description , x , resume_h)
            resume_h += doc.getTextDimensions(description).h + 3
        })

        // doc.output('dataurlnewwindow')
        doc.save('Vien_Pham_Resume.pdf')
    }

    resume_header = (doc , title , x , resume_h ) => {
        doc.setFontSize('11')
        doc.setFontStyle('bold')
        doc.setLineWidth(2.0)
        doc.setDrawColor(196, 196, 196)
        doc.text(title , x , resume_h)
        resume_h += doc.getTextDimensions(title).h
        doc.line(x, resume_h, 200, resume_h)
        resume_h += 7
        return resume_h
    }

    resume_list = (doc , lists , x , resume_h ) => {
        // dot = \u2022 
        lists.forEach(list => {
            let list_x = x + 3
            doc.setFontType('bold')
            doc.setFontSize('14')
            doc.text('\u2022 ' , list_x , resume_h)
            list_x += doc.getTextWidth('\u2022 ')
            doc.setFontType('normal')
            doc.setFontSize('10')
            doc.text(list, list_x, resume_h, {align: "left"})
            resume_h += doc.getTextDimensions(list).h + 1.5
        })
        return resume_h
    }
    render(){
        return(
            <div className="columns download">
                <button className="button" onClick={() => this.downloadResume()}>
                    <i className="fas fa-download"></i>  Download Resume
                </button>
            </div>
        )
    }
}

export default Resume