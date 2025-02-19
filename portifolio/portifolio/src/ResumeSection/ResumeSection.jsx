import SectionTitle from "../SectionTitle";
import Button from "../Button"

function ResumeSection() {
    const buttonContent = <><span className="material-symbols-outlined">download</span> <p className="description_section">Download resume</p></>;

    return (
        <section id="cv">
            <SectionTitle title="Resume" />
            <div className="right">
                <p className="description">
                    Want to know more about my <span>experience and skills?</span> Check
                    out my <span>full resume</span> to get a detailed view 
                    of my <span>qualifications and projects</span>. Available
                    for <span>download by clicking the button below.</span>
                </p>
            </div>
            <div className="container">
                <Button
                    download={true}
                    href="assets/cv/cv_dev_felipe.pdf"
                    content={buttonContent}
                />
            </div>
        </section>
    );
}

export default ResumeSection;