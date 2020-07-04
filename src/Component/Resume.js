import React , {Component} from 'react'
import jsPDF from 'jspdf'

class Resume extends Component {
    downloadResume = () => {
        let doc = new jsPDF({lineHeight: 1.5})
        let x = 20
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
            ['Portfolio', 'vienp.com']
        ]
        let y = 28
        let link_x = 94
        link.forEach(l => {
            let link_title = l[0] === link[link.length - 1][0] ? l[0] : `${l[0]} |`
            doc.setFontSize('11')
            doc.textWithLink(link_title, link_x, y, { url: `${l[1]}`})
            let width = doc.getTextWidth(`${l[0]}`)
            link_x += (width + 3)
            doc.line(link_x - width - 3, y + 1, link_x - 3, y + 1 )
        })

        // about
        let about_paragraph = 'Full Stack Web Developer with a passion for learning new languages and technologies. Having arrived in the United States from Vietnam seven years ago, I have an understanding of different cultures and can easily adapt to any work environment. Not only do I thrive in helping others and being a part of a team, but I have strong problem-solving skills, meet deadlines and am able to deliver quality products for clients.'
        doc.setFontSize('10')
        doc.setTextColor(0)
        var lines = doc.splitTextToSize(about_paragraph, (pdfInMM-lMargin-rMargin))
        doc.text(lines , x , 36 , {maxWidth: 180, align: "justify"}) 

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