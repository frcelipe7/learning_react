import TitleSection from "../TitleSection";

function ContactsSection() {
    return (
        <section id="contacts">
            <TitleSection title="Contacts" />
            <div className="right">
                <p className="description">
                    Feel free to <span>get in touch!</span> Whether you&apos;re interested
                    in discussing projects, exchanging ideas, or just chatting about
                    technology, I&apos;m available through the channels below.
                    <span>Let&apos;s connect!</span>
                </p>
            </div>
        </section>
    );
}

export default ContactsSection;