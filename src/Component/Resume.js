import React , {Component} from 'react'
import my_projects from './my_projects'
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
        doc.setTextColor(31, 93, 187)
        doc.setDrawColor(31, 93, 187)
        doc.setFontStyle('normal')
        const link = [
            ['vienpham2019@gmail.com', 'vienpham2019@gmail.com'],
            ['Github', 'https://github.com/vienpham2019'],
            ['Blog' , 'https://medium.com/@vienpham2019'], 
            ['LinkedIn', 'https://www.linkedin.com/in/vien-pham-7529931a5/'],
            ['Portfolio', 'https://vienp.com']
        ]
        let link_x = 94
        link.forEach(l => {
            let link_title = l[0] === link[link.length - 1][0] ? l[0] : `${l[0]} |`
            doc.setFontSize('11')
            doc.textWithLink(link_title, link_x, resume_h, { url: l[1]})
            let width = doc.getTextWidth(l[0])
            link_x += (width + 3)
            doc.line(link_x - width - 3, resume_h + 1, link_x - 3, resume_h + 1 )
        })
        
        resume_h += doc.getTextDimensions('Software Engineer').h + space 

        // about
        let about_paragraph = 'Full Stack Web Developer with a passion for learning new languages and technologies. Having arrived in the United States from Vietnam seven years ago, I have an understanding of different cultures and can easily adapt to any work environment. Not only do I thrive in helping others and being a part of a team, but I have strong problem-solving skills, meet deadlines and am able to deliver quality products for clients.'
        doc.setFontSize('10')
        doc.setTextColor(0)
        var about_lines = doc.splitTextToSize(about_paragraph, (pdfInMM-lMargin-rMargin))
        doc.text(about_lines , x , resume_h , {maxWidth: 185, align: "justify"}) 

        resume_h += doc.getTextDimensions(about_lines).h + space 

        // Technical Skills
        resume_h = this.resume_header(doc, 'TECHNICAL SKILLS' , x , resume_h )

        doc.setFontStyle('normal')
        doc.setFontSize('10')
        let skill_paragraph = 'Ruby on Rails, JavaScript, ReactJS, Redux, HTML, CSS, Web API, JSON, Bootstrap, MySQL, Semantic UI, NodeJs, Express, MongoDB'
        let skill_lines = doc.splitTextToSize(skill_paragraph, (pdfInMM-lMargin-rMargin))
        doc.text(skill_lines , x , resume_h , {maxWidth: 180, align: "justify"})

        resume_h += doc.getTextDimensions(skill_lines).h + space 

        // Technical Project
        doc.setFontSize('11')
        doc.setFontStyle('bold')
        doc.setLineWidth(2.0)
        doc.text('TECHNICAL PROJECTS' , x , resume_h)
        resume_h += doc.getTextDimensions('TECHNICAL SKILLS').h
        doc.line(x, resume_h, 200, resume_h)
        resume_h += 7

        // dot = \u2022 Projects 
        const project_name = ['Vintage Village' , 'Movies' , 'League Tracker']
        const projects = my_projects.filter(p => project_name.includes(p.title))

        // let project_h = 93
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
            project.details.forEach(detail => {
                let detail_x = x + 3 
                doc.setFontType('bold')
                doc.setFontSize('14')
                doc.text('\u2022 ' , detail_x , resume_h)
                detail_x += doc.getTextWidth('\u2022 ')
                doc.setFontType('normal')
                doc.setFontSize('10')
                doc.text(detail, detail_x, resume_h,{align: "left"})
                resume_h += doc.getTextDimensions(detail).h + 1.5
            })

            resume_h += 2
        })

        // Work Experience
        resume_h = this.resume_header(doc, 'WORK EXPERIENCE' , x , resume_h )

        const work_experience = [
            {
                title: 'HEB',
                location: 'Conroe, TX', 
                date: 'March 2019 - April 2020' ,
                position: 'Checker', 
                details: [
                    'Processed customer transactions of goods and services.',
                    'Collected cash, check, or charge payment from customers and made change for cash transactions.', 
                    'Maintained a 30 IPM (Item Per Minute) rate daily.'
                ]
            },
            {
                title: 'VillaSport',
                location: 'Woodland, TX', 
                date: 'June 2016 - January 2019' ,
                position: 'Housekeeping Associate', 
                details: [
                    'Maintained and cleaned all club areas by following company standards.', 
                    'Ensured the locker room was fully stocked with supplies for members.'
                ]
            }
        ]
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

            work.details.forEach(detail => {
                let detail_x = x + 3
                doc.setFontType('bold')
                doc.setFontSize('14')
                doc.text('\u2022 ' , detail_x , resume_h)
                detail_x += doc.getTextWidth('\u2022 ')
                doc.setFontType('normal')
                doc.setFontSize('10')
                doc.text(detail, detail_x, resume_h,{align: "left"})
                resume_h += doc.getTextDimensions(detail).h + 1.5
            })
            resume_h += 2
        })

        // Education
        resume_h = this.resume_header(doc, 'EDUCATION' , x , resume_h )

        const educations = [
            {
                title: 'Flatiron School', 
                location: 'Houston, TX', 
                date: 'January 2020 - May 2020',
                description: 'Full Stack Web Development, Ruby on Rails and JavaScript immersive program'
            },
            {
                title: 'Lone Star Community College', 
                location: 'Woodland, TX', 
                date: 'January 2016 - May 2019',
                description: 'Completed coursework towards an Associate’s Degree in Software Engineering'
            }
        ]

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

        doc.output('dataurlnewwindow')
        // doc.save('Vien_Pham_Resume.pdf')
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
    render(){
        return(
            <div className="columns">
                <button onClick={() => this.downloadResume()}>
                    <i class="fas fa-download"></i>  My Resume
                </button>
            </div>
        )
    }
}

export default Resume