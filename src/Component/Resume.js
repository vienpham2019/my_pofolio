import React , {Component} from 'react'
import my_projects from './my_projects'
import jsPDF from 'jspdf'

class Resume extends Component {
    downloadResume = () => {
        let doc = new jsPDF({lineHeight: 1.5})
        let x = 15
        let lMargin=15; //left margin in mm
        let rMargin=15; //right margin in mm
        let pdfInMM=210;  // width of A4 in mm

        doc.setFontSize('24')
        doc.setFontStyle('bold')
        doc.text("PHAM" , doc.getTextWidth('VIEN') + 2 + x , 20)
        doc.setTextColor(31, 93, 187)
        doc.text("VIEN", x , 20)

        doc.setFontSize('12')
        doc.setTextColor(0)
        doc.text('Software Engineer' , x , 28)

        doc.setFontSize('11')
        doc.setFontType("normal")
        doc.text('Houston, Texas | 502-296-0606', 145 , 20)

        // links
        doc.setTextColor(31, 93, 187)
        doc.setDrawColor(31, 93, 187)
        const link = [
            ['vienpham2019@gmail.com', 'vienpham2019@gmail.com'],
            ['Github', 'https://github.com/vienpham2019'],
            ['Blog' , 'https://medium.com/@vienpham2019'], 
            ['LinkedIn', 'https://www.linkedin.com/in/vien-pham-7529931a5/'],
            ['Portfolio', 'https://vienp.com']
        ]
        let y = 28
        let link_x = 94
        link.forEach(l => {
            let link_title = l[0] === link[link.length - 1][0] ? l[0] : `${l[0]} |`
            doc.setFontSize('11')
            doc.textWithLink(link_title, link_x, y, { url: l[1]})
            let width = doc.getTextWidth(l[0])
            link_x += (width + 3)
            doc.line(link_x - width - 3, y + 1, link_x - 3, y + 1 )
        })

        // about
        let about_paragraph = 'Full Stack Web Developer with a passion for learning new languages and technologies. Having arrived in the United States from Vietnam seven years ago, I have an understanding of different cultures and can easily adapt to any work environment. Not only do I thrive in helping others and being a part of a team, but I have strong problem-solving skills, meet deadlines and am able to deliver quality products for clients.'
        doc.setFontSize('10')
        doc.setTextColor(0)
        var lines = doc.splitTextToSize(about_paragraph, (pdfInMM-lMargin-rMargin))
        doc.text(lines , x , 36 , {maxWidth: 185, align: "justify"}) 

        // Technical Skills
        doc.setFontSize('11')
        doc.setFontStyle('bold')
        doc.setLineWidth(2.0)
        doc.setDrawColor(196, 196, 196)
        doc.text('TECHNICAL SKILLS' , x , 60)
        doc.line(x, 63, 200, 63)

        doc.setFontStyle('normal')
        doc.setFontSize('10')
        let skill_paragraph = 'Ruby on Rails, JavaScript, ReactJS, Redux, HTML, CSS, Web API, JSON, Bootstrap, MySQL, Semantic UI, NodeJs, Express, MongoDB'
        let skill_lines = doc.splitTextToSize(skill_paragraph, (pdfInMM-lMargin-rMargin))
        doc.text(skill_lines , x , 70 , {maxWidth: 180, align: "justify"})
        let skill_dimenstions = doc.getTextDimensions(skill_lines) // {w , h}

        // Technical Project
        doc.setFontSize('11')
        doc.setFontStyle('bold')
        doc.setLineWidth(2.0)
        doc.text('TECHNICAL PROJECTS' , x , skill_dimenstions.h + 73)
        doc.line(x, 86, 200, 86)

        // dot = \u2022 Projects 
        const project_name = ['Vintage Village' , 'Movies' , 'League Tracker']
        const projects = my_projects.filter(p => project_name.includes(p.title))

        let project_h = 93
        projects.forEach(project => {
            let project_w = x
            doc.setFontStyle('bold')
            doc.setFontSize('10')

            doc.text(project.title , project_w , project_h)
            let project_title_dimentions = doc.getTextDimensions(project.title)
            project_w += project_title_dimentions.w
            doc.setFontStyle('normal')

            doc.text(' - ' , project_w , project_h)
            let dash_w = doc.getTextWidth(' - ')
            project_w += (dash_w + 1)

            doc.setTextColor(31, 93, 187)
            doc.textWithLink('Github', project_w , project_h, { url: project.github})
            let project_github_w = doc.getTextWidth('Github')
            project_w += (project_github_w + 1)

            doc.setTextColor(0)
            doc.text('|', project_w , project_h)
            let vertical_bar_w = doc.getTextWidth('|')
            project_w += (vertical_bar_w  + 1)

            doc.setTextColor(31, 93, 187)
            doc.textWithLink('Demo', project_w , project_h, { url: project.demo})

            project_h += project_title_dimentions.h

            doc.setTextColor(0)
            doc.setFontType("italic")
            doc.text(project.resume_description , x , project_h + 1)
            project_h += doc.getTextDimensions(project.resume_description).h + 2

            doc.setFontStyle('normal')
            project.details.forEach(detail => {
                let detail_x = x + 3
                doc.setFontType('bold')
                doc.setFontSize('14')
                doc.text('\u2022 ' , detail_x , project_h)
                detail_x += doc.getTextWidth('\u2022 ')
                doc.setFontType('normal')
                doc.setFontSize('10')
                doc.text(detail, detail_x, project_h,{align: "left"})
                project_h += doc.getTextDimensions(detail).h + 1.5
            })

            project_h += 2
        })

        // Work Experience
        doc.setFontSize('11')
        doc.setFontStyle('bold')
        doc.setLineWidth(2.0)
        doc.setDrawColor(196, 196, 196)
        doc.text('WORK EXPERIENCE' , x , project_h)
        project_h += doc.getTextDimensions('WORK EXPERIENCE').h
        doc.line(x, project_h, 200, project_h)
        project_h += 7

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
            doc.text(work.title , x , project_h) 
            let work_experience_title_dimentions = doc.getTextDimensions(work.title)
            doc.setFontStyle('normal')
            doc.text(`, ${work.location}`, x + work_experience_title_dimentions.w , project_h)
            doc.text(work.date , 196 - doc.getTextWidth(work.date), project_h)

            project_h += work_experience_title_dimentions.h + 2

            doc.text(work.position , x , project_h)
            project_h += doc.getTextDimensions(work.position).h + 2

            work.details.forEach(detail => {
                let detail_x = x + 3
                doc.setFontType('bold')
                doc.setFontSize('14')
                doc.text('\u2022 ' , detail_x , project_h)
                detail_x += doc.getTextWidth('\u2022 ')
                doc.setFontType('normal')
                doc.setFontSize('10')
                doc.text(detail, detail_x, project_h,{align: "left"})
                project_h += doc.getTextDimensions(detail).h + 1.5
            })
            project_h += 2
        })

        // Education
        doc.setFontSize('11')
        doc.setFontStyle('bold')
        doc.setLineWidth(2.0)
        doc.setDrawColor(196, 196, 196)
        doc.text('EDUCATION' , x , project_h)
        project_h += doc.getTextDimensions('EDUCATION').h
        doc.line(x, project_h, 200, project_h)
        project_h += 7

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
            doc.text(title , x , project_h) 
            let education_title_dimentions = doc.getTextDimensions(title)
            doc.setFontStyle('normal')
            doc.text(`, ${location}`, x + education_title_dimentions.w , project_h)
            doc.text(date , 196 - doc.getTextWidth(date), project_h)
            project_h += education_title_dimentions.h + 1
            doc.text(description , x , project_h)
            project_h += doc.getTextDimensions(description).h + 3
        })

        doc.output('dataurlnewwindow')
        // doc.save('Vien_Pham_Resume.pdf')
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